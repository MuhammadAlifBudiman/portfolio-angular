# Test Matrix: F00O

## ProjectStatusBadgeComponent
| Test | Expected |
|---|---|
| renders supplied label | label text visible |
| has role=status | `[role="status"]` |
| aria-label contains project title | `"Restricted: BKN..."` |
| live status — success token classes | green styling |
| restricted status — amber token classes | amber styling |
| archived status — neutral/amber classes | NOT error-red |
| unavailable status — gray classes | gray styling |
| is NOT a button | no `<button>` element |

## ButtonComponent variants
| Test | Expected |
|---|---|
| default variant: hero classes present | `h-[64px] w-[230px]` |
| compact variant: compact classes present | `h-10 w-auto px-4` |
| text variant: text classes present | no border/bg |
| compact routerLink: internal link | `[routerLink]` |
| compact external + newTab: `target=_blank` | present |
| external links: `rel=noopener noreferrer` | present |
| disabled button: still works | `[disabled]` |
| focus-visible classes: present | `focus-visible:*` |

## ProjectCardComponent
| Test | Expected |
|---|---|
| renders ownership | ownership label visible |
| renders year when provided | year text visible |
| status independent from actions | badge not inside action div |
| renders context when provided | context label visible |
| renders role when translated | role text visible |
| renders tech badges | stack chips visible |
| internal case-study link | routerLink button |
| external links new tab | target=_blank + rel |
| no empty action group | no empty div |
| restricted status + case study link | badge shown, cta shown separately |

## Portfolio component
| Test | Expected |
|---|---|
| uses app-project-card for featured | `app-project-card` in DOM |
| uses app-project-card for other | `app-project-card` in DOM |
| filter/order unchanged | same count + order |
| EN/ID labels work | translated text |

## Project-detail
| Test | Expected |
|---|---|
| status in meta row | badge above action row |
| status NOT in action row | no badge inside action div |
| external actions compact | compact variant buttons |
| no case study CTA | no routerLink on detail page |

## Certifications
| Test | Expected |
|---|---|
| credential buttons compact | compact variant |
| BKN two credentials wrap | two buttons |
| links safe | noopener noreferrer |

## Layout
| Test | Expected |
|---|---|
| standalone About → wrapper class | `.wrapper` present |
| embedded About → section-wrapper class | `.section-wrapper` present |
| standalone Portfolio → wrapper | `.wrapper` present |
| embedded Portfolio → section-wrapper | `.section-wrapper` present |
