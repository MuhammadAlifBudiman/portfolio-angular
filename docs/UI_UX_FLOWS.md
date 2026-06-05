# UI/UX Flows

## Primary Recruiter Flow

```mermaid
flowchart TD
  A[Open portfolio] --> B[Read landing headline]
  B --> C[Inspect project list]
  C --> D[Open project source or demo]
  C --> E[Open resume]
  B --> F[Open contact page]
  F --> G[Submit contact form]
```

## Contact Form State Flow

```mermaid
stateDiagram-v2
  [*] --> Idle
  Idle --> Invalid: required field missing or invalid email
  Idle --> Sending: valid form submitted
  Sending --> Success: EmailJS resolves
  Sending --> Failure: EmailJS rejects
  Success --> Idle: form reset
  Failure --> Idle: user edits and retries
```

## Routing Flow

Routes currently expected by the Angular app:

| Path | Page | Expected behavior |
|---|---|---|
| `/` | Main / Landing | Shows primary introduction and navigation paths. |
| `/about-me` | About Me | Shows background, experience, education, and interests. |
| `/portfolio` | Portfolio | Shows project list and external links when available. |
| `/contact` | Contact | Shows contact form, WhatsApp link, email link, and submission feedback. |
| `/**` | Fallback | Redirects to `/`. |

## Theme Selector Flow

```mermaid
stateDiagram-v2
  [*] --> DefaultTheme
  DefaultTheme --> UserSelectedTheme: user chooses theme
  UserSelectedTheme --> PersistedTheme: save to localStorage
  PersistedTheme --> RestoredTheme: reload page
  PersistedTheme --> DefaultTheme: invalid stored value
```

## Language Selector Flow

```mermaid
stateDiagram-v2
  [*] --> DefaultLanguage
  DefaultLanguage --> SelectedLanguage: user selects EN or ID
  SelectedLanguage --> PersistedLanguage: save preference
  PersistedLanguage --> FallbackLanguage: missing translation key
  PersistedLanguage --> RestoredLanguage: reload page
```
