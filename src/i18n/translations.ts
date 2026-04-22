/**
 * UI translations.
 * To add a new language:
 *  1. Add its code to `LANGUAGES` below.
 *  2. Add a matching object inside `translations` with the same keys.
 *
 * Keep keys flat and descriptive. Do not put project name / email here —
 * those live in src/data/project.ts.
 */

export const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "sv", label: "Svenska", short: "SV" },
  { code: "zh", label: "中文", short: "ZH" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export interface Dictionary {
  nav: { home: string; contact: string; zoom: string; toggleMenu: string };
  hero: { description: string };
  goal: {
    title: string;
    goalLabel: string;
    goalText: string;
    aimTitle: string;
    aimText: string;
  };
  mockupCaption: string;
  features: {
    title: string;
    subtitle: string;
    items: Record<string, { title: string; description: string }>;
  };
  team: { title: string; linksComingSoon: string };
  sprints: {
    title: string;
    intro: string;
    durationLabel: string;
    goalHeading: string;
    backlogHeading: string;
    planHeading: string;
    estimation: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardBody: string;
    socialPlaceholder: string;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      hint: string;
      errors: {
        nameRequired: string;
        nameTooLong: string;
        emailInvalid: string;
        emailTooLong: string;
        messageRequired: string;
        messageTooLong: string;
      };
    };
  };
  zoom: {
    title: string;
    join: string;
    placeholder: string;
    editHint: string;
  };
  footer: { rights: string };
}

const en: Dictionary = {
  nav: { home: "Home", contact: "Contact", zoom: "Zoom", toggleMenu: "Toggle menu" },
  hero: {
    description:
      "Scanos is a retail robotics and cloud monitoring project focused on after-hours store auditing. The system patrols a store autonomously, monitors inventory conditions, identifies misplaced products, detects security risks, and reports issues to a central web-based command center.",
  },
  goal: {
    title: 'The "Retail Inventory & Security" Auditor',
    goalLabel: "The Goal",
    goalText:
      "A robot that patrols a store after hours to check stock levels, find misplaced items, and detect intruders.",
    aimTitle: "Aim",
    aimText:
      "The project combines robotics, computer vision, IoT communication, and a cloud-connected web interface to help retail managers automate repetitive store checks and react faster to inventory or security problems.",
  },
  mockupCaption: "Vision: The Scanos Cloud Command Center",
  features: {
    title: "Features",
    subtitle: "Core capabilities of the Scanos system",
    items: {
      misplaced: {
        title: "Misplaced Item Finder",
        description:
          "Vision identifies an item in the wrong zone (for example, a toy found in the electronics zone) and flags it on the map.",
      },
      outOfStock: {
        title: "Out-of-Stock Alert",
        description:
          'The robot reads shelf tags using QR codes. If the space above a tag is empty, it sends an "Order More" MQTT message.',
      },
      itemRecognition: {
        title: "Item Recognition",
        description:
          "Computer vision identifies products on shelves in real time, enabling accurate stock checks and misplacement detection.",
      },
      cloud: {
        title: "Cloud Command Center",
        description:
          'A central web app where a manager can click a map and send commands such as "Go check Aisle 4" via IoT coordinates.',
      },
    },
  },
  team: { title: "Team Members", linksComingSoon: "Links coming soon" },
  sprints: {
    title: "Sprints",
    intro:
      "Each sprint follows a structured planning process with three key elements:\n\nThe Sprint Goal — the overarching objective explaining why the sprint is valuable.\n\nSelected Product Backlog Items — the specific user stories, features, or fixes chosen to be completed during the sprint.\n\nAn Actionable Plan — the team's detailed plan for delivering the work, often broken down into smaller tasks.",
    durationLabel: "Duration",
    goalHeading: "Sprint Goal",
    backlogHeading: "Selected Product Backlog Items",
    planHeading: "Actionable Plan",
    estimation: "est.",
  },
  contact: {
    title: "Contact Us",
    subtitle: "Have questions about Scanos? We'd love to hear from you.",
    cardTitle: "Get in Touch",
    cardBody: "Reach out to us via email for project inquiries, collaboration, or feedback.",
    socialPlaceholder: "Additional social and contact details will be added here.",
    form: {
      title: "Send us an email",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell us how we can help…",
      submit: "Send email",
      hint: "Submitting opens your email app with the message pre-filled — nothing is sent until you confirm.",
      errors: {
        nameRequired: "Please enter your name.",
        nameTooLong: "Name must be 100 characters or fewer.",
        emailInvalid: "Please enter a valid email address.",
        emailTooLong: "Email must be 255 characters or fewer.",
        messageRequired: "Please enter a message.",
        messageTooLong: "Message must be 1000 characters or fewer.",
      },
    },
  },
  zoom: {
    title: "Zoom",
    join: "Join Zoom Meeting",
    placeholder: "The Zoom link for Team Svanstein / Scanos will be added here later.",
    editHint: "Update src/data/project.ts to add the Zoom URL.",
  },
  footer: { rights: "All rights reserved." },
};

const sv: Dictionary = {
  nav: { home: "Hem", contact: "Kontakt", zoom: "Zoom", toggleMenu: "Växla meny" },
  hero: {
    description:
      "Scanos är ett robotik- och molnövervakningsprojekt för detaljhandeln med fokus på revision av butiker efter stängning. Systemet patrullerar butiken självständigt, övervakar lagerförhållanden, identifierar felplacerade varor, upptäcker säkerhetsrisker och rapporterar problem till ett centralt webbaserat kommandocenter.",
  },
  goal: {
    title: 'Granskaren för "Lager & Säkerhet" inom detaljhandeln',
    goalLabel: "Målet",
    goalText:
      "En robot som patrullerar en butik efter stängning för att kontrollera lagernivåer, hitta felplacerade varor och upptäcka inkräktare.",
    aimTitle: "Syfte",
    aimText:
      "Projektet kombinerar robotik, datorseende, IoT-kommunikation och ett molnanslutet webbgränssnitt för att hjälpa butikschefer att automatisera återkommande kontroller och reagera snabbare på lager- eller säkerhetsproblem.",
  },
  mockupCaption: "Vision: Scanos molnbaserade kommandocenter",
  features: {
    title: "Funktioner",
    subtitle: "Kärnfunktioner i Scanos-systemet",
    items: {
      misplaced: {
        title: "Hittare av felplacerade varor",
        description:
          "Datorseende identifierar en vara i fel zon (t.ex. en leksak i elektronikavdelningen) och markerar den på kartan.",
      },
      outOfStock: {
        title: "Slut-i-lager-varning",
        description:
          'Roboten läser hyllskyltar med QR-koder. Om utrymmet ovanför en skylt är tomt skickas ett "Beställ mer"-MQTT-meddelande.',
      },
      itemRecognition: {
        title: "Objektigenkänning",
        description:
          "Datorseende identifierar produkter på hyllorna i realtid, vilket möjliggör korrekta lagerkontroller och upptäckt av felplacerade varor.",
      },
      cloud: {
        title: "Molnbaserat kommandocenter",
        description:
          'En central webbapp där en chef kan klicka på en karta och skicka kommandon som "Kontrollera gång 4" via IoT-koordinater.',
      },
    },
  },
  team: { title: "Teammedlemmar", linksComingSoon: "Länkar kommer snart" },
  sprints: {
    title: "Sprintar",
    intro:
      "Varje sprint följer en strukturerad planeringsprocess med tre nyckeldelar:\n\nSprintmålet — det övergripande målet som förklarar varför sprinten är värdefull.\n\nValda backlog-objekt — de specifika användarberättelser, funktioner eller fixar som ska slutföras under sprinten.\n\nEn handlingsplan — teamets detaljerade plan för att leverera arbetet, ofta uppdelat i mindre uppgifter.",
    durationLabel: "Längd",
    goalHeading: "Sprintmål",
    backlogHeading: "Valda backlog-objekt",
    planHeading: "Handlingsplan",
    estimation: "uppskattn.",
  },
  contact: {
    title: "Kontakta oss",
    subtitle: "Har du frågor om Scanos? Vi hör gärna från dig.",
    cardTitle: "Hör av dig",
    cardBody: "Kontakta oss via e-post för projektförfrågningar, samarbete eller feedback.",
    socialPlaceholder: "Ytterligare sociala kanaler och kontaktuppgifter läggs till här.",
    form: {
      title: "Skicka ett e-postmeddelande",
      nameLabel: "Namn",
      namePlaceholder: "Ditt fullständiga namn",
      emailLabel: "E-post",
      emailPlaceholder: "du@exempel.se",
      messageLabel: "Meddelande",
      messagePlaceholder: "Berätta hur vi kan hjälpa till…",
      submit: "Skicka e-post",
      hint: "När du skickar öppnas ditt e-postprogram med meddelandet ifyllt — inget skickas förrän du bekräftar.",
      errors: {
        nameRequired: "Ange ditt namn.",
        nameTooLong: "Namnet får vara högst 100 tecken.",
        emailInvalid: "Ange en giltig e-postadress.",
        emailTooLong: "E-postadressen får vara högst 255 tecken.",
        messageRequired: "Skriv ett meddelande.",
        messageTooLong: "Meddelandet får vara högst 1000 tecken.",
      },
    },
  },
  zoom: {
    title: "Zoom",
    join: "Gå med i Zoom-möte",
    placeholder: "Zoom-länken för Team Svanstein / Scanos kommer att läggas till här senare.",
    editHint: "Uppdatera src/data/project.ts för att lägga till Zoom-URL:en.",
  },
  footer: { rights: "Alla rättigheter förbehållna." },
};

const zh: Dictionary = {
  nav: { home: "首页", contact: "联系我们", zoom: "Zoom", toggleMenu: "切换菜单" },
  hero: {
    description:
      "Scanos 是一个面向零售业的机器人与云监控项目，专注于营业后门店审计。系统可自主巡店、监控库存状况、识别错放商品、检测安全风险，并将问题上报至基于网页的中央指挥中心。",
  },
  goal: {
    title: "“零售库存与安全”审计员",
    goalLabel: "目标",
    goalText: "一台在闭店后巡视门店的机器人，用于检查库存、发现错放商品并检测入侵者。",
    aimTitle: "宗旨",
    aimText:
      "本项目融合机器人技术、计算机视觉、物联网通信以及云端网页界面，帮助零售管理者自动化日常巡店并更快地应对库存或安全问题。",
  },
  mockupCaption: "愿景：Scanos 云端指挥中心",
  features: {
    title: "功能特性",
    subtitle: "Scanos 系统的核心能力",
    items: {
      misplaced: {
        title: "错放商品识别",
        description: "视觉系统识别出位于错误区域的商品（例如电子区中的玩具），并在地图上进行标记。",
      },
      outOfStock: {
        title: "缺货提醒",
        description: '机器人通过 QR 码读取货架标签。若标签上方为空，则发送 "Order More" MQTT 消息。',
      },
      itemRecognition: {
        title: "物品识别",
        description: "计算机视觉实时识别货架上的商品，实现精准的库存检查与错放检测。",
      },
      cloud: {
        title: "云端指挥中心",
        description: '中央网页应用，管理员可点击地图并通过 IoT 坐标发送指令，例如"去检查 4 号过道"。',
      },
    },
  },
  team: { title: "团队成员", linksComingSoon: "链接即将公布" },
  sprints: {
    title: "Sprint 计划",
    intro:
      "每个 Sprint 遵循结构化的计划流程，包含三个关键要素：\n\nSprint 目标 —— 解释本次 Sprint 价值的总体目标。\n\n所选产品待办事项 —— 在 Sprint 中要完成的具体用户故事、功能或修复。\n\n可执行计划 —— 团队交付工作的详细计划，通常拆分为更小的任务。",
    durationLabel: "周期",
    goalHeading: "Sprint 目标",
    backlogHeading: "所选产品待办事项",
    planHeading: "可执行计划",
    estimation: "预估",
  },
  contact: {
    title: "联系我们",
    subtitle: "对 Scanos 有任何疑问？欢迎与我们联系。",
    cardTitle: "保持联系",
    cardBody: "如有项目咨询、合作或反馈，请通过电子邮件与我们联系。",
    socialPlaceholder: "更多社交与联系方式将在此处添加。",
    form: {
      title: "给我们发送邮件",
      nameLabel: "姓名",
      namePlaceholder: "您的全名",
      emailLabel: "邮箱",
      emailPlaceholder: "you@example.com",
      messageLabel: "留言",
      messagePlaceholder: "请告诉我们如何能帮到您…",
      submit: "发送邮件",
      hint: "提交后将打开您的邮件应用并预填内容 —— 在您确认前不会发送任何邮件。",
      errors: {
        nameRequired: "请输入您的姓名。",
        nameTooLong: "姓名不能超过 100 个字符。",
        emailInvalid: "请输入有效的电子邮箱地址。",
        emailTooLong: "邮箱地址不能超过 255 个字符。",
        messageRequired: "请输入留言内容。",
        messageTooLong: "留言不能超过 1000 个字符。",
      },
    },
  },
  zoom: {
    title: "Zoom",
    join: "加入 Zoom 会议",
    placeholder: "Team Svanstein / Scanos 的 Zoom 链接稍后将在此处添加。",
    editHint: "请更新 src/data/project.ts 以添加 Zoom 链接。",
  },
  footer: { rights: "保留所有权利。" },
};

export const translations: Record<LanguageCode, Dictionary> = { en, sv, zh };
