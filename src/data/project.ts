/**
 * Project-wide content and metadata.
 * Edit this file to update hero text, project descriptions, and contact info.
 *
 * NOTE: All user-facing text exists in two places:
 *  - This file: structural / single-source values (project name, email, links).
 *  - src/i18n/translations.ts: translated UI strings (labels, headings, body copy).
 * Keep names and identifiers here; keep translated copy in the translations file.
 */

export const project = {
  teamName: "Team Svanstein",
  projectName: "Scanos",
  tagline: "Retail Inventory & Security Auditor",

  contactEmail: "fcam@kth.se",

  zoomLink: "https://kth-se.zoom.us/j/67349834926" as string | null,

  year: new Date().getFullYear(),
};

/**
 * Feature list. Titles & descriptions are translated via i18n keys
 * (see src/i18n/translations.ts → features.items). The icon stays here
 * because it is presentation-only and language-agnostic.
 */
export const features = [
  { id: "misplaced", icon: "🔍" },
  { id: "outOfStock", icon: "📦" },
  { id: "intruder", icon: "🚨" },
  { id: "docking", icon: "🎯" },
  { id: "priceTag", icon: "🏷️" },
  { id: "environmental", icon: "🌡️" },
  { id: "cloud", icon: "☁️" },
] as const;
