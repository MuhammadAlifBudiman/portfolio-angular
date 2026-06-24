# CV Resume Sync

`public/resume.pdf` is generated from the `cv-latex` source repository. Do not hand-edit or replace the PDF in this repository unless the sync pipeline is unavailable and the owner explicitly approves a one-off manual update.

## Source Of Truth

- CV source: `external/cv-latex`
- Submodule URL: `https://github.com/MuhammadAlifBudiman/cv-latex`
- Published portfolio PDF: `public/resume.pdf`
- Expected CV build artifact: `external/cv-latex/dist/Muhammad_Alif_Budiman_CV_en_fullstack.pdf`

The portfolio sync uses the English full-stack variant:

```bash
CV_LANG=en CV_ROLE=fullstack
```

## Local Setup

Clone or update with submodules:

```bash
git submodule update --init --recursive
```

Install the CV build tools on Debian/Ubuntu:

```bash
sudo apt update
sudo apt install make latexmk texlive-latex-extra texlive-fonts-recommended \
  texlive-lang-english texlive-lang-other lmodern chktex poppler-utils imagemagick
```

Then sync the PDF:

```bash
npm run resume:sync
npm run resume:check
```

The sync script runs the CV `build`, `qa`, and `release` targets, copies the release PDF into `public/resume.pdf`, checks the file is non-empty, and verifies the candidate name with `pdftotext` when available.

## GitHub Actions

`.github/workflows/deploy.yml` checks out submodules and runs `npm run resume:sync` before tests and build on every `main` deploy.

Both workflows use the repository `GH_TOKEN` secret for checkout so private `cv-latex` submodule access stays in GitHub Actions secrets instead of `.gitmodules`.

`.github/workflows/sync-resume.yml` supports:

- manual `workflow_dispatch`
- `repository_dispatch` with event type `cv-latex-updated`

The sync workflow updates `external/cv-latex` to `origin/main`, regenerates `public/resume.pdf`, runs tests/build/prerender checks, commits changes only when the submodule pointer or PDF changed, deploys, and verifies the `gh-pages` update.

## Dispatch Token Notes

To trigger portfolio syncs from `cv-latex`, create a fine-grained GitHub token with repository access to this portfolio repo and permission to dispatch workflows or repository events. Store it only as a secret in the calling repository, for example `PORTFOLIO_DISPATCH_TOKEN`.

Never commit the token or print it in workflow logs.

Example event payload shape:

```json
{
  "event_type": "cv-latex-updated"
}
```

## Troubleshooting

- `external/cv-latex is missing`: run `git submodule update --init --recursive`.
- `latexmk: command not found`: install the LaTeX dependencies listed above.
- `lmodern.sty not found`: install `lmodern` or `fonts-lmodern`.
- `synced PDF text does not contain candidate name`: inspect the generated CV output before committing.
- CV content mismatch, such as dates or project wording: fix `cv-latex` first, then rerun the sync. The portfolio PDF should not be patched manually.
