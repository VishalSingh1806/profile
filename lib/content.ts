import {
  Activity,
  Award,
  BarChart2,
  Bell,
  FileText,
  FolderSync,
  Globe,
  Home,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Package,
  Truck,
  Upload,
  UserCircle,
  Users
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" }
] as const;

export const aboutContent = {
  bio: [
    "I'm an AI Solution Architect who independently owns products end to end — from early problem discovery, client conversations, and stakeholder alignment to architecture, development, deployment, and iteration after launch.",
    "I design and build the intelligent systems the team runs on: document OCR pipelines, RAG chatbots, route optimization engines, compliance platforms, and internal tools. My work spans EPR compliance, logistics, document intelligence, education management, philanthropy, and consumer apps."
  ],
  techStack: [
    "Python", "FastAPI", "Next.js", "TypeScript",
    "Google Gemini", "RAG", "Docker", "MongoDB",
    "Redis", "Socket.IO", "PostgreSQL", ".NET"
  ]
};

export type RoleItem = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export type CapabilityItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type JourneyItem = {
  number: string;
  title: string;
  description: string;
  capturedItems: string[];
  icon: LucideIcon;
};

export type AutomationListItem = {
  number: string;
  title: string;
  description: string;
};

export type OutcomeItem = {
  title: string;
  description: string;
};

export type BaseToolPage = {
  name: string;
  href: string;
  productEyebrow: string;
  heroTitle: {
    before: string;
    highlight?: string;
    after?: string;
  };
  subheading: string;
  primaryAction: {
    label: string;
    href: string;
    tone: "primary" | "ghostAmber";
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  statusBadge?: {
    label: string;
    tone: "live" | "comingSoon";
  };
  accessNote: string;
  rolesEyebrow: string;
  rolesTitle: string;
  roles: RoleItem[];
  helpTitle: string;
};

export const overviewTools = [
  {
    number: "01",
    name: "ClimaOne V1",
    tagline:
      "End-to-end EPR compliance platform I designed and built to manage the full lifecycle — from purchase order creation to certificate issuance — across every partner, facility, and vehicle in the network.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://admin.climaone.in/login/index.html",
    ctaLabel: "View project",
    mockup: "v1" as const
  },
  {
    number: "02",
    name: "ClimaOne V2",
    tagline:
      "Material traceability platform I owned from workflow design to implementation for BIS-aligned operations. Every gram tracked across 7 physical touchpoints with full chain-of-custody evidence.",
    status: "In Progress",
    statusTone: "inDev" as const,
    href: "https://v2.climaone.in/login",
    ctaLabel: "View project",
    mockup: "v2" as const
  },
  {
    number: "03",
    name: "OCR for EPR",
    tagline:
      "Document intelligence workflow I designed and built for EPR teams: upload compliance documents and get structured data instantly through an async pipeline powered by Redis, Socket.IO, and Gemini Vision.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://github.com/VishalSingh1806/OCR",
    ctaLabel: "View project",
    mockup: "ocrEpr" as const
  },
  {
    number: "04",
    name: "OCR for Business Cards",
    tagline:
      "Business-card OCR system I built end to end for contact capture and outreach workflows. Batch-process up to 300 cards at once with Gemini extracting clean, export-ready contact data.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://github.com/VishalSingh1806/Businesses-card-ocr",
    ctaLabel: "View project",
    mockup: "ocrBiz" as const
  },
  {
    number: "05",
    name: "Route Optimizer",
    tagline:
      "Route planning tool I built for field operations after understanding team workflows and dispatch constraints. FastAPI backend with GCS integration for efficient area-based pickup planning.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://github.com/VishalSingh1806/best-route",
    ctaLabel: "View project",
    mockup: "route" as const
  },
  {
    number: "06",
    name: "EPR Chatbot",
    tagline:
      "RAG chatbot I designed and shipped to turn complex EPR regulations and internal policies into instant, cited answers for customers and internal teams.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://recircle.in/epr/",
    ctaLabel: "View project",
    mockup: "chat" as const
  },
  {
    number: "07",
    name: "Marathi Startup Chatbot",
    tagline:
      "Marathi-first RAG chatbot I built to deliver startup guidance, funding support, and business-development answers to Maharashtra's entrepreneurs in their own language.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://github.com/VishalSingh1806/Marathi-ChatBot",
    ctaLabel: "View project",
    mockup: "marathi" as const
  },
  {
    number: "08",
    name: "Drive Automation",
    tagline:
      "Internal automation tool I built to eliminate repetitive admin work by auditing and transferring Google Drive ownership in a single flow.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://github.com/VishalSingh1806/backup-automation",
    ctaLabel: "View project",
    mockup: "drive" as const
  },
  {
    number: "09",
    name: "FootLooseNoMore",
    tagline:
      "Consumer matchmaking PWA I designed and developed end to end with multi-step profile matching, OTP auth, real-time updates, and curated admin review flows.",
    status: "In Development",
    statusTone: "inDev" as const,
    href: "https://footloosenomore.com/",
    ctaLabel: "View project",
    mockup: "fnm" as const
  },
  {
    number: "10",
    name: "REO 360",
    tagline:
      "Institution management platform I built for operational teams handling fee collection, payment validation, student records, and Excel-based bulk workflows.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://reo360.in/#/",
    ctaLabel: "View project",
    mockup: "reo" as const
  },
  {
    number: "11",
    name: "Accelerate Indian Philanthropy",
    tagline:
      "Public-facing nonprofit platform I designed and developed with a giving portal, member directory, careers section, and FAQ on Next.js with a headless Express API.",
    status: "Live",
    statusTone: "live" as const,
    href: "https://www.indianphilanthropy.org/",
    ctaLabel: "View project",
    mockup: "aip" as const
  }
];

const placeholderRoles: RoleItem[] = [
  { icon: Users, name: "[INSERT ROLE]", description: "[INSERT ROLE DESCRIPTION]" },
  { icon: Activity, name: "[INSERT ROLE]", description: "[INSERT ROLE DESCRIPTION]" },
  { icon: LayoutDashboard, name: "[INSERT ROLE]", description: "[INSERT ROLE DESCRIPTION]" },
  { icon: FileText, name: "[INSERT ROLE]", description: "[INSERT ROLE DESCRIPTION]" }
];

const placeholderSteps: JourneyItem[] = [
  {
    number: "01",
    title: "[INSERT STEP TITLE]",
    description: "[INSERT STEP DESCRIPTION]",
    capturedItems: ["[INSERT CAPTURED DATA]", "[INSERT CAPTURED DATA]"],
    icon: Upload
  },
  {
    number: "02",
    title: "[INSERT STEP TITLE]",
    description: "[INSERT STEP DESCRIPTION]",
    capturedItems: ["[INSERT CAPTURED DATA]", "[INSERT CAPTURED DATA]"],
    icon: FileText
  },
  {
    number: "03",
    title: "[INSERT STEP TITLE]",
    description: "[INSERT STEP DESCRIPTION]",
    capturedItems: ["[INSERT CAPTURED DATA]", "[INSERT CAPTURED DATA]"],
    icon: Activity
  },
  {
    number: "04",
    title: "[INSERT STEP TITLE]",
    description: "[INSERT STEP DESCRIPTION]",
    capturedItems: ["[INSERT CAPTURED DATA]", "[INSERT CAPTURED DATA]"],
    icon: Bell
  }
];

export const contactDetails = {
  name: "[INSERT NAME]",
  role: "[INSERT ROLE]",
  email: "[INSERT EMAIL]",
  phone: "[INSERT PHONE]"
};

export const climaOneV1Page: BaseToolPage & {
  capabilities: CapabilityItem[];
  learnMore: {
    eyebrow: string;
    title: string;
    highlight: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
} = {
  name: "ClimaOne V1",
  href: "/climaone-v1/",
  productEyebrow: "Product 01 | ClimaOne V1",
  heroTitle: {
    before: "Your EPR compliance, ",
    highlight: "end to end.",
    after: " In one platform."
  },
  subheading:
    "ClimaOne V1 manages the full plastic recovery lifecycle - from purchase order creation to certificate issuance - across every partner, facility, and vehicle in your network.",
  primaryAction: {
    label: "Open ClimaOne V1",
    href: "https://admin.climaone.in/login/index.html",
    tone: "primary"
  },
  secondaryAction: {
    label: "Learn more about ClimaOne",
    href: "https://admin.climaone.in/login/index.html"
  },
  accessNote:
    "Available on desktop and mobile | Login with password or OTP | Contact tech team for access",
  rolesEyebrow: "Who is this for",
  rolesTitle: "Built for every role in your network",
  roles: [
    {
      icon: LayoutDashboard,
      name: "Brand / Producer",
      description: "Track EPR obligations, purchase orders, and compliance certificates"
    },
    {
      icon: Truck,
      name: "Collection Partner",
      description: "Manage assigned POs, vehicle dispatch, and material recovery tracking"
    },
    {
      icon: UserCircle,
      name: "Admin",
      description: "Oversee the entire network - partners, approvals, reports, and master data"
    },
    {
      icon: Activity,
      name: "Operations",
      description: "Monitor vehicle movement, dispatch status, and ground-level activity"
    },
    {
      icon: Home,
      name: "PWP / Processor",
      description: "Track credits issued, certificate status, and material received at facility"
    }
  ],
  capabilities: [
    {
      number: "01",
      title: "Role-based dashboard",
      description:
        "Log in and see exactly what matters to your role - PO status, certificate progress, vehicle movement, partner counts, and material recovery - all at a glance.",
      icon: LayoutDashboard
    },
    {
      number: "02",
      title: "Purchase order lifecycle",
      description:
        "Create, allocate, accept, and close purchase orders across your entire partner network. Every PO is tracked from creation to fulfilment with a full audit trail.",
      icon: FileText
    },
    {
      number: "03",
      title: "Vehicle & dispatch tracking",
      description:
        "Track every vehicle in real time - driver details, e-way bills, dispatch and receipt dates, geo-tagged images, and weightbridge slips all tied to a single trip.",
      icon: Truck
    },
    {
      number: "04",
      title: "Certificates & compliance",
      description:
        "Issue, track, and query EPR certificates end to end. Raise queries, resolve disputes, and maintain a clean compliance record - all within the platform.",
      icon: Award
    },
    {
      number: "05",
      title: "Reports & data",
      description:
        "Generate monthly material movement reports, state-wise breakdowns, and PO dispatch summaries - automatically compiled and delivered to your inbox.",
      icon: BarChart2
    },
    {
      number: "06",
      title: "Notifications & alerts",
      description:
        "Never miss a critical update. ClimaOne sends SMS, email, and push notifications for PO alerts, approvals, and status changes across all user types.",
      icon: Bell
    }
  ],
  learnMore: {
    eyebrow: "Want to go deeper?",
    title: "The full ClimaOne product page has ",
    highlight: "everything.",
    body:
      "Features, onboarding steps, portal walkthroughs, and more - all on the official ClimaOne page.",
    ctaLabel: "Explore ClimaOne",
    ctaHref: "https://admin.climaone.in/login/index.html"
  },
  helpTitle: "Can't access it? We're here."
};

export const climaOneV2Page: BaseToolPage & {
  problemTiles: OutcomeItem[];
  journeyIntro: string;
  journey: JourneyItem[];
  automation: AutomationListItem[];
  outcomes: OutcomeItem[];
  dashboardNote: string;
  learnMore: {
    eyebrow: string;
    title: string;
    highlight: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
} = {
  name: "ClimaOne V2",
  href: "/climaone-v2/",
  productEyebrow: "Product 02 | ClimaOne V2",
  heroTitle: {
    before: "From collection to converter. Every gram. ",
    highlight: "Fully traceable."
  },
  subheading:
    "Before this, material moved. But nobody could prove where it came from, what happened to it, or whether the evidence would hold up. ClimaOne V2 changes that - end to end, across every partner, plant, and processor in your network.",
  primaryAction: {
    label: "Notify me when live",
    href: "mailto:[INSERT EMAIL]",
    tone: "ghostAmber"
  },
  statusBadge: {
    label: "Coming Soon",
    tone: "comingSoon"
  },
  accessNote: "Full deployment in progress | Contact the tech team to get early access",
  rolesEyebrow: "Who is this for",
  rolesTitle: "Four roles. One connected platform.",
  roles: [
    {
      icon: Truck,
      name: "Collection Partner",
      description: "Accept POs, load vehicles, upload documents, and track dispatch and approval status"
    },
    {
      icon: Home,
      name: "Plant Operator",
      description: "Validate arrivals, run QC, manage production batches, bag output, and dispatch to converters"
    },
    {
      icon: Package,
      name: "Converter",
      description: "Receive dispatches, record QC, and trace every bag back to its source collection partner"
    },
    {
      icon: LayoutDashboard,
      name: "Admin / Ops",
      description: "Monitor the full network - exceptions, pending actions, KPIs, and compliance outputs"
    }
  ],
  problemTiles: [
    {
      title: "No chain of custody",
      description:
        "Material changed hands across CPs, plants, and converters with no unified record"
    },
    {
      title: "Evidence gaps",
      description: "Documents, weights, and photos lived in WhatsApp, email, and spreadsheets"
    },
    {
      title: "Unverifiable compliance",
      description:
        "When asked to prove material provenance, the answer was manual, slow, and incomplete"
    }
  ],
  journeyIntro:
    "Every unit of material that enters this platform is tracked across 7 physical touchpoints - with documents, GPS evidence, weights, and QC records attached at each one.",
  journey: [
    {
      number: "01",
      title: "Collection partner loads a vehicle",
      description:
        "A collection partner receives a purchase order, accepts it, and creates a vehicle load - entering vehicle details, driver information, planned weight, and uploading all shipment documents.",
      capturedItems: [
        "Vehicle identity",
        "Driver details",
        "Planned and gross weight",
        "PO linkage",
        "Invoice / e-way bill / LR / baslip documents",
        "Dispatch timestamp"
      ],
      icon: Truck
    },
    {
      number: "02",
      title: "Vehicle is dispatched and synced",
      description:
        "Once dispatched, the vehicle load is automatically synced to the plant and admin services - no manual handoff, no phone calls. The plant knows it is coming before it arrives.",
      capturedItems: [
        "Dispatch status",
        "Auto-sync to plant and admin",
        "Real-time visibility for all parties"
      ],
      icon: Activity
    },
    {
      number: "03",
      title: "Vehicle arrives at the plant",
      description:
        "The plant operator marks the vehicle as arrived, uploads a GPS-tagged photo as proof of arrival, and validates all incoming documents. If any document fails validation, an admin flag is automatically created.",
      capturedItems: [
        "GPS arrival photo",
        "Document validation (invoice / e-way bill / LR / baslip)",
        "Arrival timestamp",
        "Auto-created admin flag on document failure"
      ],
      icon: Upload
    },
    {
      number: "04",
      title: "Goods received and quality checked",
      description:
        "The system auto-creates a GRN at plant arrival. The plant operator then runs quality control - logging QC parameters and results against the received material before it enters production.",
      capturedItems: [
        "Auto-generated GRN number",
        "Received weight",
        "QC parameters and result",
        "GRN-level source linkage"
      ],
      icon: FileText
    },
    {
      number: "05",
      title: "Material enters production",
      description:
        "Material from one or more GRNs is fed into a production batch. The platform tracks exactly which GRNs contributed to which batch - down to the timeslot level - so the source of every output is always known.",
      capturedItems: [
        "Batch number",
        "GRN-level consumption",
        "Timeslot-level feeding records",
        "Processing lag"
      ],
      icon: Activity
    },
    {
      number: "06",
      title: "Output is bagged and stored",
      description:
        "Processed output is bagged and assigned individual bag numbers. Each bag carries its weight, grade, storage location, and the exact source GRN composition - including which collection partners contributed to it.",
      capturedItems: [
        "Bag number",
        "Bag weight",
        "Grade",
        "Source GRN composition",
        "Contributing collection partners",
        "Storage location"
      ],
      icon: Package
    },
    {
      number: "07",
      title: "Converter receives and traces back",
      description:
        "The converter records receipt, accepted and rejected quantities, QC results, and receipt evidence. From this single screen, they can trace any dispatch all the way back - through bags, batches, GRNs, and original collection partners - with contribution percentages.",
      capturedItems: [
        "Receipt number",
        "Accepted / rejected quantity",
        "Converter QC result",
        "Full backward traceability to source CP",
        "Bag and batch composition"
      ],
      icon: Globe
    }
  ],
  automation: [
    {
      number: "01",
      title: "Vehicle sync",
      description:
        "When a CP dispatches a vehicle, it is automatically synced to plant and admin - no manual notification needed"
    },
    {
      number: "02",
      title: "Sales order sync",
      description:
        "When a plant creates a sales order, it is automatically synced to admin and converter services"
    },
    {
      number: "03",
      title: "GRN auto-creation",
      description:
        "When a vehicle arrives at the plant and passes document checks, a GRN is created automatically"
    },
    {
      number: "04",
      title: "Exception flagging",
      description:
        "When a document validation fails, an admin flag is created instantly - nothing slips through silently"
    },
    {
      number: "05",
      title: "Daily reminder emails",
      description:
        "The system sends scheduled daily action-reminder emails to plant teams - open items never go unnoticed"
    }
  ],
  outcomes: [
    {
      title: "CPs stop chasing status",
      description:
        "Collection partners no longer call the plant to check whether their vehicle was accepted. They see it live."
    },
    {
      title: "Plants stop building packets by hand",
      description:
        "GRNs, QC records, and production summaries are structured in the system - not assembled from WhatsApp and email"
    },
    {
      title: "Converters can validate provenance instantly",
      description:
        "Any dispatch can be traced back to its source in seconds - no back-and-forth, no spreadsheet reconciliation"
    },
    {
      title: "Admin can answer in minutes, not days",
      description:
        '"Where did this material come from, what happened to it, is the evidence complete?" - answered from one screen'
    }
  ],
  dashboardNote:
    "The producer compliance dashboard gives brands a clear view of verified material collected, processed, and available for compliance reporting.",
  learnMore: {
    eyebrow: "Want to explore more?",
    title: "The full ClimaOne V2 product page is ",
    highlight: "live.",
    body: "See the platform in action, explore features, and get in touch with the team.",
    ctaLabel: "Explore ClimaOne V2",
    ctaHref: "https://v2.climaone.in/login"
  },
  helpTitle: "Questions about ClimaOne V2?"
};

export const placeholderToolPages = {
  "ocr-epr": {
    name: "OCR for EPR",
    href: "/ocr-epr/",
    productEyebrow: "[INSERT PRODUCT INDEX] | OCR for EPR",
    heroTitle: {
      before: "[INSERT HERO TITLE START] ",
      highlight: "[INSERT HERO HIGHLIGHT]",
      after: " [INSERT HERO TITLE END]"
    },
    subheading: "[INSERT HERO SUBHEADING]",
    primaryAction: {
      label: "Open OCR for EPR",
      href: "https://github.com/VishalSingh1806/OCR",
      tone: "primary" as const
    },
    secondaryAction: {
      label: "[INSERT LEARN MORE LINK LABEL]",
      href: "[INSERT LEARN MORE URL]"
    },
    accessNote: "[INSERT ACCESS NOTE]",
    rolesEyebrow: "Who is this for",
    rolesTitle: "[INSERT ROLE SECTION TITLE]",
    roles: placeholderRoles,
    steps: placeholderSteps,
    learnMore: {
      eyebrow: "[INSERT LEARN MORE EYEBROW]",
      title: "[INSERT LEARN MORE TITLE] ",
      highlight: "[INSERT HIGHLIGHT]",
      body: "[INSERT LEARN MORE BODY]",
      ctaLabel: "[INSERT CTA LABEL]",
      ctaHref: "[INSERT CTA URL]"
    },
    helpTitle: "[INSERT HELP TITLE]"
  },
  "ocr-bizcard": {
    name: "OCR for Business Card",
    href: "/ocr-bizcard/",
    productEyebrow: "[INSERT PRODUCT INDEX] | OCR for Business Card",
    heroTitle: {
      before: "[INSERT HERO TITLE START] ",
      highlight: "[INSERT HERO HIGHLIGHT]",
      after: " [INSERT HERO TITLE END]"
    },
    subheading: "[INSERT HERO SUBHEADING]",
    primaryAction: {
      label: "Open OCR for Business Card",
      href: "https://github.com/VishalSingh1806/Businesses-card-ocr",
      tone: "primary" as const
    },
    accessNote: "[INSERT ACCESS NOTE]",
    rolesEyebrow: "Who is this for",
    rolesTitle: "[INSERT ROLE SECTION TITLE]",
    roles: placeholderRoles,
    steps: placeholderSteps,
    learnMore: {
      eyebrow: "[INSERT LEARN MORE EYEBROW]",
      title: "[INSERT LEARN MORE TITLE] ",
      highlight: "[INSERT HIGHLIGHT]",
      body: "[INSERT LEARN MORE BODY]",
      ctaLabel: "[INSERT CTA LABEL]",
      ctaHref: "[INSERT CTA URL]"
    },
    helpTitle: "[INSERT HELP TITLE]"
  },
  "route-optimizer": {
    name: "Route Optimizer",
    href: "/route-optimizer/",
    productEyebrow: "[INSERT PRODUCT INDEX] | Route Optimizer",
    heroTitle: {
      before: "[INSERT HERO TITLE START] ",
      highlight: "[INSERT HERO HIGHLIGHT]",
      after: " [INSERT HERO TITLE END]"
    },
    subheading: "[INSERT HERO SUBHEADING]",
    primaryAction: {
      label: "Open Route Optimizer",
      href: "https://github.com/VishalSingh1806/best-route",
      tone: "primary" as const
    },
    accessNote: "[INSERT ACCESS NOTE]",
    rolesEyebrow: "Who is this for",
    rolesTitle: "[INSERT ROLE SECTION TITLE]",
    roles: placeholderRoles,
    steps: placeholderSteps,
    learnMore: {
      eyebrow: "[INSERT LEARN MORE EYEBROW]",
      title: "[INSERT LEARN MORE TITLE] ",
      highlight: "[INSERT HIGHLIGHT]",
      body: "[INSERT LEARN MORE BODY]",
      ctaLabel: "[INSERT CTA LABEL]",
      ctaHref: "[INSERT CTA URL]"
    },
    helpTitle: "[INSERT HELP TITLE]"
  },
  chatbot: {
    name: "Chatbot",
    href: "/chatbot/",
    productEyebrow: "[INSERT PRODUCT INDEX] | Chatbot",
    heroTitle: {
      before: "[INSERT HERO TITLE START] ",
      highlight: "[INSERT HERO HIGHLIGHT]",
      after: " [INSERT HERO TITLE END]"
    },
    subheading: "[INSERT HERO SUBHEADING]",
    primaryAction: {
      label: "Open Chatbot",
      href: "https://recircle.in/epr/",
      tone: "primary" as const
    },
    accessNote: "[INSERT ACCESS NOTE]",
    rolesEyebrow: "Who is this for",
    rolesTitle: "[INSERT ROLE SECTION TITLE]",
    roles: placeholderRoles,
    steps: placeholderSteps,
    learnMore: {
      eyebrow: "[INSERT LEARN MORE EYEBROW]",
      title: "[INSERT LEARN MORE TITLE] ",
      highlight: "[INSERT HIGHLIGHT]",
      body: "[INSERT LEARN MORE BODY]",
      ctaLabel: "[INSERT CTA LABEL]",
      ctaHref: "[INSERT CTA URL]"
    },
    helpTitle: "[INSERT HELP TITLE]"
  },
  "drive-automation": {
    name: "Drive Automation",
    href: "/drive-automation/",
    productEyebrow: "[INSERT PRODUCT INDEX] | Drive Automation",
    heroTitle: {
      before: "[INSERT HERO TITLE START] ",
      highlight: "[INSERT HERO HIGHLIGHT]",
      after: " [INSERT HERO TITLE END]"
    },
    subheading: "[INSERT HERO SUBHEADING]",
    primaryAction: {
      label: "Open Drive Automation",
      href: "https://github.com/VishalSingh1806/backup-automation",
      tone: "primary" as const
    },
    accessNote: "[INSERT ACCESS NOTE]",
    rolesEyebrow: "Who is this for",
    rolesTitle: "[INSERT ROLE SECTION TITLE]",
    roles: placeholderRoles,
    steps: placeholderSteps,
    learnMore: {
      eyebrow: "[INSERT LEARN MORE EYEBROW]",
      title: "[INSERT LEARN MORE TITLE] ",
      highlight: "[INSERT HIGHLIGHT]",
      body: "[INSERT LEARN MORE BODY]",
      ctaLabel: "[INSERT CTA LABEL]",
      ctaHref: "[INSERT CTA URL]"
    },
    helpTitle: "[INSERT HELP TITLE]"
  }
} as const;

export const toolNames = [
  "ClimaOne V1",
  "ClimaOne V2",
  "OCR for EPR",
  "OCR for Business Card",
  "Route Optimizer",
  "Chatbot",
  "Drive Automation"
];

export const faqItems = [
  { question: "How do I get access to a tool?", answer: "[INSERT ANSWER]" },
  { question: "I found a bug - who do I report it to?", answer: "[INSERT ANSWER]" },
  { question: "Can I request a new feature or improvement?", answer: "[INSERT ANSWER]" },
  { question: "Is my data secure when using these tools?", answer: "[INSERT ANSWER]" },
  { question: "How do I get trained on a tool?", answer: "[INSERT ANSWER]" }
];
