# Scanos — Team Svanstein

A student project website for the Scanos retail robotics and cloud monitoring system.

## Project Structure

```
src/
├── assets/                   # Images, logo, and static assets
├── components/
│   ├── Brand.tsx             # Logo + project name (reusable)
│   ├── Navbar.tsx            # Site navigation (all pages)
│   ├── Footer.tsx            # Site footer (all pages)
│   ├── LanguageSwitcher.tsx  # EN / SV / ZH dropdown
│   ├── SectionHeader.tsx
│   ├── TeamMemberCard.tsx
│   ├── SprintCard.tsx
│   ├── FeatureCard.tsx
│   └── SocialLinks.tsx
├── data/                     # Editable content
│   ├── project.ts            # Project name, email, Zoom link, feature ids
│   ├── team.ts               # Team members + social links
│   └── sprints.ts            # Sprint goals, backlogs, plans
├── i18n/
│   ├── translations.ts       # All translated UI strings (EN, SV, ZH)
│   └── LanguageContext.tsx   # Language provider + useTranslation hook
├── pages/
│   ├── Home.tsx
│   ├── Contact.tsx
│   └── Zoom.tsx
└── App.tsx                   # Router + providers
```

## How to Edit Content

| Want to change…              | Edit this file                              |
| ---------------------------- | ------------------------------------------- |
| Project name / email / year  | `src/data/project.ts`                       |
| Zoom meeting link            | `src/data/project.ts` → `zoomLink`          |
| Team members & social links  | `src/data/team.ts`                          |
| Sprint content               | `src/data/sprints.ts`                       |
| Any UI text (EN / SV / ZH)   | `src/i18n/translations.ts`                  |
| Theme colors (laser violet)  | `src/index.css` (CSS variables)             |
| Logo image                   | `src/assets/scanos-logo.png`                |

## Adding a New Language

1. Open `src/i18n/translations.ts`.
2. Add the new code to the `LANGUAGES` array.
3. Duplicate the `en` dictionary, translate the strings, and add it to `translations`.

That's it — the switcher in the navbar will pick it up automatically.

## Development

```bash
npm install
npm run dev
```
