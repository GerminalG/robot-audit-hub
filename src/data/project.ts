/**
 * Project-wide content and metadata.
 * Edit this file to update hero text, project descriptions, and contact info.
 */

export const project = {
  teamName: "Team Svanstein",
  projectName: "InvenBo",
  tagline: "Retail Inventory & Security Auditor",

  heroDescription:
    "InvenBo is a retail robotics and cloud monitoring project focused on after-hours store auditing. The system is designed to patrol a store autonomously, monitor inventory conditions, identify misplaced products, detect security risks, and report issues to a central web-based command center.",

  goalTitle: 'The "Retail Inventory & Security" Auditor',
  goalText:
    "A robot that patrols a store after hours to check stock levels, find misplaced items, and detect intruders.",

  aimText:
    "The project combines robotics, computer vision, IoT communication, and a cloud-connected web interface to help retail managers automate repetitive store checks and react faster to inventory or security problems.",

  contactEmail: "fcam@kth.se",

  // TODO: Replace with actual Zoom link when available
  zoomLink: null as string | null,

  year: new Date().getFullYear(),
};

export const features = [
  {
    title: "Misplaced Item Finder",
    description:
      "Vision identifies an item in the wrong zone (for example, a toy found in the electronics zone) and flags it on the map.",
    icon: "🔍",
  },
  {
    title: "Out-of-Stock Alert",
    description:
      "The robot reads shelf tags using QR codes. If the space above a tag is empty, it sends an "Order More" MQTT message.",
    icon: "📦",
  },
  {
    title: "Intruder Detection",
    description:
      "If the camera detects human motion or a face after 9:00 PM, it flashes LEDs and records a 5-second log to the cloud.",
    icon: "🚨",
  },
  {
    title: "Precision Endcap Docking",
    description:
      "Uses ArUco markers to align precisely with a charging dock hidden under a shelf.",
    icon: "🎯",
  },
  {
    title: "Price Tag Validator",
    description:
      "Compares the shelf price read by vision with the price in the cloud database and flags discrepancies.",
    icon: "🏷️",
  },
  {
    title: "Environmental Audit",
    description:
      "Measures light levels and temperature in the frozen food section to ensure refrigerators have not failed.",
    icon: "🌡️",
  },
  {
    title: "Cloud Command Center",
    description:
      'A central web app where a manager can click a map and send commands such as "Go check Aisle 4" via IoT coordinates.',
    icon: "☁️",
  },
];
