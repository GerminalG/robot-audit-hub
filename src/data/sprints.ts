/**
 * Sprint data.
 * Edit this file to add or update sprint content.
 * Each sprint has a goal, backlog items, and an actionable plan.
 */

export interface BacklogItem {
  title: string;
  estimation: number | null;
}

export interface Sprint {
  number: number;
  title: string;
  duration: string;
  goal: string;
  backlogItems: BacklogItem[];
  actionablePlan: string; // Markdown-like plain text for now
}

export const sprintIntro = `Each sprint follows a structured planning process with three key elements:

**The Sprint Goal** — The overarching objective explaining why the sprint is valuable.

**Selected Product Backlog Items** — The specific user stories, features, or fixes chosen to be completed during the sprint.

**An Actionable Plan** — The team's detailed plan for delivering the work, often broken down into smaller tasks.`;

export const sprints: Sprint[] = [
  {
    number: 1,
    title: "Sprint 1 Backlog",
    duration: "2.5 days work",
    goal: "The goal of this sprint is to have a good starting point for the program. The robot should be able to move along a defined path, as well as correctly identify 3/3 objects.",
    backlogItems: [
      { title: "Walk along line", estimation: 5 },
      { title: "Recognize an item", estimation: 9 },
      { title: "Start working on web app", estimation: null },
    ],
    actionablePlan: `Walk along line:
• Details to be added by the team.

Recognize an item:
• Configure Coral Dev Board (https://gweb-coral-full.uc.r.appspot.com/docs/dev-board-micro/get-started/)
• Train model
• Obtain training set: bottle, book, apple
• Design image recognition pipeline
• Model training

Web app — Backend:
• Launch frontend
• MQTT interface
• Reference: https://github.com/terdia/mqttui

Web app — Frontend:
• Prototype interface
• Implement interface`,
  },
  {
    number: 2,
    title: "Sprint 2 Backlog",
    duration: "TBD",
    goal: "Allow the robot to be controlled and its vision to be monitored remotely, and recognize the book object.",
    backlogItems: [
      { title: "(1.1) Control robot with app (2 people)", estimation: null },
      { title: "(2) Recognise a book (2 people)", estimation: null },
      { title: "(9) Live video display (1 person)", estimation: null },
      { title: "(3) Keep track of stock in inventory (1 person)", estimation: null },
      { title: "Create website (1 person)", estimation: null },
    ],
    actionablePlan: `(1.1) Control robot with app — 2 people:
• Button press → Firebase → backend → Raspberry Pi (→ Coral Dev Board)

(2) Recognise a book — 2 people:
• Collect more images (several books, background distractions)
• Model training

(9) Live video display — 1 person:
• Implement communication protocol across Coral Dev Board and Raspberry Pi
• Transmit live video across layers: Coral Dev → Raspberry Pi → backend → interface

(3) Keep track of stock in inventory — 1 person:
• Debug

Create website — 1 person.`,
  },
  {
    number: 3,
    title: "Sprint 3",
    duration: "TBD",
    goal: "Sprint 3 goal to be defined.",
    backlogItems: [
      { title: "Placeholder backlog item 1", estimation: null },
      { title: "Placeholder backlog item 2", estimation: null },
    ],
    actionablePlan: "Actionable plan to be added.",
  },
  {
    number: 4,
    title: "Sprint 4",
    duration: "TBD",
    goal: "Sprint 4 goal to be defined.",
    backlogItems: [
      { title: "Placeholder backlog item 1", estimation: null },
      { title: "Placeholder backlog item 2", estimation: null },
    ],
    actionablePlan: "Actionable plan to be added.",
  },
];
