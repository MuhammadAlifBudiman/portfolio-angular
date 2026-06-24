#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
CV_DIR="$ROOT_DIR/external/cv-latex"
SOURCE_PDF="$CV_DIR/dist/Muhammad_Alif_Budiman_CV_en_fullstack.pdf"
TARGET_PDF="$ROOT_DIR/public/resume.pdf"

fail() {
  printf 'resume sync failed: %s\n' "$1" >&2
  exit 1
}

[ -f "$ROOT_DIR/.gitmodules" ] || fail ".gitmodules is missing"
git -C "$ROOT_DIR" config --file .gitmodules --get submodule.external/cv-latex.url >/dev/null ||
  fail "external/cv-latex is not registered as a submodule"
[ -d "$CV_DIR" ] || fail "external/cv-latex directory is missing"
[ -f "$CV_DIR/Makefile" ] || fail "external/cv-latex Makefile is missing"
command -v make >/dev/null || fail "make is not installed"

CV_SHA="$(git -C "$CV_DIR" rev-parse --short=12 HEAD 2>/dev/null || true)"
[ -n "$CV_SHA" ] || fail "cannot read cv-latex submodule SHA"

printf 'Syncing resume from cv-latex %s\n' "$CV_SHA"

make -C "$CV_DIR" CV_LANG=en CV_ROLE=fullstack build
make -C "$CV_DIR" CV_LANG=en CV_ROLE=fullstack qa
make -C "$CV_DIR" CV_LANG=en CV_ROLE=fullstack release

[ -s "$SOURCE_PDF" ] || fail "expected release PDF is missing or empty: $SOURCE_PDF"

mkdir -p "$(dirname "$TARGET_PDF")"
cp "$SOURCE_PDF" "$TARGET_PDF"
[ -s "$TARGET_PDF" ] || fail "synced PDF is empty: $TARGET_PDF"

if command -v pdftotext >/dev/null; then
  PDF_TEXT="$(pdftotext "$TARGET_PDF" -)"
  if ! grep -q 'Muhammad Alif Budiman' <<< "$PDF_TEXT"; then
    fail "synced PDF text does not contain candidate name"
  fi
else
  printf 'pdftotext not found; skipped PDF text validation\n'
fi

SIZE_BYTES="$(wc -c < "$TARGET_PDF" | tr -d '[:space:]')"
printf 'Submodule SHA: %s\n' "$CV_SHA"
printf 'Output PDF: %s\n' "$TARGET_PDF"
printf 'Output size: %s bytes\n' "$SIZE_BYTES"
