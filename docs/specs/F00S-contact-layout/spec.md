# F00S — Contact Section Two-Column Layout

## Problem
`contact.component.html` wraps everything in `mx-auto flex max-w-2xl flex-col items-center` — single column. On a wide viewport this is sparse and undersells the recruiter-accessible contact info.

## Requirements
See `docs/product/FEATURE_SPEC.md` FR-F00S-1 through FR-F00S-6.

## Target structure
```
<section class="...">
  <div class="grid lg:grid-cols-2 gap-12 ...">
    <!-- Left: contact info -->
    <div>
      recruiter message (existing i18n key)
      email link
      WhatsApp link
      LinkedIn link
      availability (if i18n key exists)
    </div>
    <!-- Right: existing form -->
    <div>
      <form>...</form>
    </div>
  </div>
</section>
```

## Files to change
- `src/app/pages/contact/contact.component.html`
- `src/app/i18n/en.ts` + `id.ts` — add contact info keys if missing

## Tests
- `contact.component.spec.ts` — verify 2-col grid class present, form still inside right column
