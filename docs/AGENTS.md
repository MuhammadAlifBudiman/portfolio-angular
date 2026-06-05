# Agent Map

## Agent Strategy
Use agents to keep large searches, reviews, and specialized checks outside the main working context. The main session remains the coordinator and final decision maker.

## Agents
| Agent | When to use | Write access |
|---|---|---|
| `portfolio-frontend-engineer` | Angular architecture, component decomposition, typed models, route/form logic | Yes |
| `portfolio-accessibility-auditor` | WCAG 2.1 AA review, keyboard/focus/contrast/semantics/motion checks | No |
| `portfolio-ui-ux-reviewer` | Visual review, UX copy, accessibility, anti-AI-slop checks | No |
| `portfolio-qa-engineer` | Test planning, Karma/Jasmine specs, regression review | No by default |
| `portfolio-security-analyst` | Secrets, EmailJS, dependency, workflow, link security | No |
| `portfolio-seo-performance-analyst` | Meta tags, crawlability, images, performance, accessibility overlap | No |

## Invocation Examples
```text
Use portfolio-ui-ux-reviewer to review the proposed hero redesign against DESIGN.md.
Use portfolio-accessibility-auditor to review keyboard and focus behavior before PR.
Use portfolio-security-analyst to review this diff before PR.
Use portfolio-qa-engineer to identify missing tests for issue #11.
```

## Output Contract
Each agent report must contain:
- verdict: pass, pass with notes, or fail;
- findings sorted by severity;
- exact files/areas reviewed;
- required fixes;
- optional follow-up issues.
