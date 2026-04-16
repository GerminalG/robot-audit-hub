# InvenBo — Team Svanstein

A student project website for the InvenBo retail robotics and cloud monitoring system.

## Project Structure

```
src/
├── assets/              # Images and static assets
├── components/          # Reusable UI components
│   ├── Navbar.tsx       # Site navigation (all pages)
│   ├── Footer.tsx       # Site footer (all pages)
│   ├── SectionHeader.tsx
│   ├── TeamMemberCard.tsx
│   ├── SprintCard.tsx
│   ├── FeatureCard.tsx
│   └── SocialLinks.tsx
├── data/                # Editable content files
│   ├── project.ts       # Project name, descriptions, contact email, Zoom link
│   ├── team.ts          # Team member names, roles, social links
│   └── sprints.ts       # Sprint goals, backlogs, plans
├── pages/
│   ├── Home.tsx         # Landing page with all sections
│   ├── Contact.tsx      # Contact information
│   └── Zoom.tsx         # Zoom meeting link placeholder
└── App.tsx              # Router and layout
```

## How to Edit Content

- **Team Members**: Edit `src/data/team.ts`
- **Sprint Data**: Edit `src/data/sprints.ts`
- **Project Info / Contact / Zoom**: Edit `src/data/project.ts`

## Development

```bash
npm install
npm run dev
```
