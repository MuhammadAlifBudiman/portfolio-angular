# EmailJS Integration Requirement

## Current Contract

The contact page submits an HTML form through `EmailService.sendEmail(form: HTMLFormElement)`. The service reads `serviceId`, `templateId`, and `publicKey` from Angular environment configuration and calls `emailjs.sendForm(...)`.

## Form Fields

| Field | HTML name | Required | Purpose |
|---|---|---:|---|
| Name | `name` | Yes | Sender name. |
| Email | `email` | Yes | Sender email address. |
| Subject | `title` | Yes | Message subject. |
| Message | `message` | Yes | Message body. |
| Time | `time` | Hidden | UTC timestamp injected before submission. |

## Behavior

| State | Required behavior |
|---|---|
| Idle | Form fields are editable and submit button is available. |
| Sending | Show visible sending indicator and prevent ambiguous user feedback. |
| Success | Show success message and reset form. |
| Failure | Show failure message and keep page usable for retry. |

## Security Notes

- EmailJS Public Key is client-side configuration. Do not document it as a private secret.
- Service ID and Template ID are also client-side identifiers when used from browser code.
- Abuse protection must rely on provider-side controls, validation, rate limits, domain restrictions, and monitoring rather than hiding client configuration.

## Verification

- Required-field validation works for `name`, `email`, `title`, and `message`.
- Invalid email format is rejected by the browser.
- Success state is visible after provider success.
- Failure state is visible after provider failure.
- Production build injects environment configuration before deploy.
