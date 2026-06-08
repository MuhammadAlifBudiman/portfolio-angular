# EmailJS Security Notes

The EmailJS `serviceId`, `templateId`, and `publicKey` are intentionally
client-side credentials — they are designed to appear in the browser bundle.

## Required dashboard configuration

To prevent unauthorized use of these credentials from other origins:

1. Log in to the EmailJS dashboard at https://dashboard.emailjs.com/
2. Go to **Account** → **Security**
3. Under **Allowed Origins**, add `https://muhammadalifbudiman.my.id`
4. Remove any wildcard or localhost entries from production settings

Without this restriction, anyone who reads the bundle can send emails on
your behalf and exhaust your free-tier quota (200 emails/month).

## Local development

For local development, EmailJS requests will be blocked by the origin
allowlist. Use a separate EmailJS account or temporarily add
`http://localhost:4200` to allowed origins while testing.
