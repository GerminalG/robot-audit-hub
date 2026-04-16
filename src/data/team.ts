/**
 * Team member data.
 * Edit this file to update names, roles, and social links.
 * Use null for links that are not yet available.
 */

export interface TeamMember {
  name: string;
  role: string;
  image: string | null; // path to profile image, null = placeholder
  linkedin: string | null;
  github: string | null;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Manas Ahuja",
    role: "Developer",
    image: null,
    linkedin: null,
    github: null,
  },
  {
    name: "Sara Elena Bruj",
    role: "Developer",
    image: null,
    linkedin: null,
    github: null,
  },
  {
    name: "Francesco Camporeale",
    role: "Product Owner",
    image: null,
    linkedin: null,
    github: null,
  },
  {
    name: "Yuhui Gan",
    role: "Developer",
    image: null,
    linkedin: "https://www.linkedin.com/in/yuhui-gan/",
    github: "https://github.com/GerminalG",
  },
  {
    name: "Astrid Hodgkinson Leonard",
    role: "Scrum Master",
    image: null,
    linkedin: null,
    github: null,
  },
  {
    name: "Dylan Horn Kreiner",
    role: "Developer",
    image: null,
    linkedin: null,
    github: null,
  },
  {
    name: "Anirudh Tiwari",
    role: "Developer",
    image: null,
    linkedin: null,
    github: null,
  },
];
