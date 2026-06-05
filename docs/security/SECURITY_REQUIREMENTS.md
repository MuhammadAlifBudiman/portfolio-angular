# Security Requirements

## Scope

This is a client-side Angular portfolio deployed as static assets. Current security scope covers browser execution, static hosting, dependency supply chain, public contact form abuse, and GitHub Actions deployment.

## Requirements

| ID | Requirement | Verification |
|---|---|---|
| SEC-001 | Do not commit private credentials, service tokens, or provider secrets. | Secret scan before PR merge. |
| SEC-002 | Treat EmailJS Public Key as public client configuration, not as a secret credential. | Review integration docs and environment naming. |
| SEC-003 | Contact form must use browser validation for required fields and email format. | Manual UAT and component review. |
| SEC-004 | Contact submission must expose loading, success, and failure states. | Manual UAT. |
| SEC-005 | New external links must use safe attributes where `target="_blank"` is used. | Code review. |
| SEC-006 | Dependency updates must run `npm audit` and document residual risk. | Audit report in issue or PR. |
| SEC-007 | GitHub Actions must use minimum required permissions. | Workflow review. |
| SEC-008 | Generated production environment files must not be committed. | Git status check and `.gitignore` review. |
