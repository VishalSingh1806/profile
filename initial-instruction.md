ReCircle Product Hub
Version 1.0 | PM: Vishal Singh

Project Summary
Build a static, multi-page internal web portal called ReCircle Product Hub. Its sole purpose is to make every ReCircle-built tool known, understood, and accessible to all staff, management, and stakeholders. It is not a progress tracker or a tech showcase — it is a user-facing product directory that answers: what does this tool solve for me, how do I use it, and who do I contact for help.

Tech Stack
LayerTechnologyNotesFrameworkNext.js 14 (App Router)Static export only — output: 'export' in next.config.jsLanguageTypeScriptStrict mode onStylingCSS ModulesScoped per component, no CSS frameworkFontsGoogle Fonts via next/fontPlus Jakarta Sans (headings) + Inter (body)IconsLucide ReactLightweight, consistentImagesnext/imageStatic mode compatibleHostingGCP — Firebase Hosting or Cloud Storage + CDNStatic files only, no SSRDeploymentExisting ReCircle GitHub repo → GCP via Cloud BuildConnect to existing repo
Critical config:

next.config.js must have output: 'export' and images: { unoptimized: true }
No getServerSideProps anywhere — static only
No API routes


File & Folder Structure
/recircle-product-hub
├── app/
│   ├── layout.tsx              ← shared layout, navbar, fonts
│   ├── page.tsx                ← Overview / homepage
│   ├── climaone-v1/
│   │   └── page.tsx
│   ├── climaone-v2/
│   │   └── page.tsx
│   ├── ocr-epr/
│   │   └── page.tsx
│   ├── ocr-bizcard/
│   │   └── page.tsx
│   ├── route-optimizer/
│   │   └── page.tsx
│   ├── chatbot/
│   │   └── page.tsx
│   ├── drive-automation/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.module.css
│   ├── ToolCard/
│   │   ├── ToolCard.tsx
│   │   └── ToolCard.module.css
│   ├── StepCard/
│   │   ├── StepCard.tsx
│   │   └── StepCard.module.css
│   ├── ScreenshotPlaceholder/
│   │   ├── ScreenshotPlaceholder.tsx
│   │   └── ScreenshotPlaceholder.module.css
│   ├── ContactCard/
│   │   ├── ContactCard.tsx
│   │   └── ContactCard.module.css
│   └── Accordion/
│       ├── Accordion.tsx
│       └── Accordion.module.css
├── styles/
│   └── globals.css             ← global reset, CSS variables, typography
├── public/
│   └── screenshots/            ← empty folder, ready for real screenshots
├── next.config.js
├── tsconfig.json
└── package.json

Brand & Design System
Define all of the following as CSS variables in globals.css:
css--color-primary: #1D9E75;
--color-primary-dark: #0F6E56;
--color-primary-light: #E1F5EE;
--color-text-heading: #1a1a1a;
--color-text-body: #555555;
--color-text-muted: #888888;
--color-surface: #ffffff;
--color-surface-alt: #f7f7f5;
--color-border: #e0e0e0;
--font-heading: 'Plus Jakarta Sans', sans-serif;
--font-body: 'Inter', sans-serif;
--radius-card: 12px;
--radius-btn: 8px;
--shadow-card: 0 2px 12px rgba(0,0,0,0.06);
Typography scale:

H1: 40px / 500 weight / heading font
H2: 28px / 500 weight / heading font
H3: 20px / 500 weight / heading font
Body: 16px / 400 weight / body font / line-height 1.7
Small: 13px / 400 weight / muted color

Buttons:

Primary: green background #1D9E75, white text, border-radius: var(--radius-btn), 48px height, 24px horizontal padding
Secondary: white background, green border, green text
Hover state: #0F6E56 (darker green)
Minimum tap target: 44px height always

No dark mode. No animations heavier than transition: 0.15s ease on hover states.

Navbar — Shared Component

Sticky top, white background, box-shadow: 0 1px 0 var(--color-border) on scroll
Left: Green "Re" badge (40x40px, border-radius 10px) + "ReCircle Product Hub" in heading font
Right: Navigation links — Overview · ClimaOne V1 · ClimaOne V2 · OCR EPR · OCR Biz Card · Route Optimizer · Chatbot · Drive Automation · Help
Active link: color: var(--color-primary) with green underline
Mobile (below 768px): Hamburger icon (Lucide Menu icon). Opens full-screen overlay, links stacked vertically, 48px tap targets, close button top right
Hamburger toggle logic in vanilla TypeScript — no library needed


Overview Page (/)
Hero section:

Full-width green background #1D9E75
Large white H1: "Your tools. All in one place."
White subheading: "Everything the ReCircle team needs to work smarter — built in-house, ready to use."
No CTA button on hero — the cards below are the CTA

Tool cards grid:

8 cards total, one per tool
Grid: 4 columns desktop, 2 columns tablet (768px), 1 column mobile (480px)
Each ToolCard component takes props: icon, name, tagline, href, status
Card content:

Icon (Lucide icon, 28px, green)
Tool name (H3)
One-line tagline — the problem it solves, written for the user
"Learn more →" link in green
Status badge — "Live" (green) or "Coming Soon" (amber) — ClimaOne V2 is "Coming Soon", all others "Live"


No progress bars, no percentages, no tech details on cards

Tool card data:
ToolIcon (Lucide)TaglineStatusClimaOne V1BarChart2Track and manage EPR compliance in one placeLiveClimaOne V2GlobeFull material traceability built for BIS regulationsComing SoonOCR for EPRFileTextExtract data from compliance documents automaticallyLiveOCR for Business CardCreditCardSave contact details from business cards instantlyLiveRoute OptimizerMapPinPlan smarter collection routes for your field teamLiveChatbotMessageCircleGet instant answers to any EPR compliance questionLiveDrive AutomationFolderSyncAutomate file transfers — built for the HR teamLiveContact & HelpHelpCircleCan't find what you need? We're here to help—

Individual Tool Pages — Strict 4-Section Structure
Build a reusable page layout component that all tool pages use. Each section is a component.

Section 1 — Hero / Problem Statement

Green accent bar at very top (4px height, full width)
Tool name in H1
Bold problem headline in H2 — written from the user's pain point (see copy below)
2–3 sentence description in plain English — what it does for the user, not how it was built
"Open Tool →" button (primary green) — href="[INSERT TOOL URL]"
Below button, small muted text: "Works on Chrome, Firefox, Safari · Desktop & Mobile · [Access notes]"
ClimaOne V2 exception: Replace button with "Coming Soon — notify me when live" (secondary button, mailto placeholder)

Section 2 — Who is this for?

Section heading: "Is this tool for you?"
3 icon cards using Lucide icons — each card: icon + "This tool is for you if…" + one specific use case sentence
Green icon, white card, subtle border

Section 3 — How to use it

Section heading: "How to use it — step by step"
Each StepCard component: large green step number + bold step title + 1–2 line plain English instruction + ScreenshotPlaceholder component
ScreenshotPlaceholder: grey background #f0f0f0, dashed border #cccccc, centered text: "[INSERT SCREENSHOT — 1200 × 700px]", fixed height 360px on desktop, 200px on mobile
Minimum 4 steps per tool

Section 4 — Need Help?

Section heading: "Need help with this tool?"
ContactCard component: avatar initials circle (green) + [INSERT NAME] + [INSERT ROLE] + [INSERT EMAIL] + [INSERT PHONE]
Primary button: "Send an email" — mailto:[INSERT EMAIL]
Muted note below: "You can also reach us on WhatsApp or drop by the tech desk."


Tool-by-Tool Copy
ClimaOne V1

Problem headline: "Managing EPR compliance shouldn't mean juggling spreadsheets."
Description: ClimaOne V1 is ReCircle's compliance management platform. It lets your team track collection data, manage producer registrations, and stay on top of EPR obligations — all in one place.
Who it's for: EPR team · Collection partners · Compliance managers
Steps: Login → View compliance dashboard → Log collection data → Track producer registrations → Download compliance reports
Access notes: Login required · Contact tech team for credentials

ClimaOne V2

Problem headline: "Full material traceability — from collection to compliance report."
Description: ClimaOne V2 is the next generation of our compliance platform, rebuilt from the ground up to meet BIS regulations. It brings end-to-end visibility across every material touchpoint.
Status: Coming Soon — all 4 sections visible but "Open Tool" replaced with notify button

OCR for EPR

Problem headline: "Stop entering compliance document data by hand."
Description: Upload any EPR document — certificates, invoices, producer forms — and the OCR tool extracts all the key data automatically. No more manual typing, no more errors.
Who it's for: EPR team · Compliance officers · Anyone handling producer documents
Steps: Open the tool → Upload document → Select document type → Review extracted fields → Export or copy data

OCR for Business Card

Problem headline: "Never manually type a contact from a business card again."
Description: Take a photo or upload a scan of any business card and the tool instantly reads the name, number, email, and company. Save it directly to your contacts in seconds.
Who it's for: All staff · Sales team · Anyone who collects contacts at events
Steps: Open the tool → Upload or photograph business card → Review extracted contact details → Save or export contact

Route Optimizer

Problem headline: "Plan smarter collection routes in seconds, not hours."
Description: Enter your pickup locations for the day and the Route Optimizer automatically builds the most efficient route for each vehicle — factoring in traffic and load capacity. Less time on the road, more collections done.
Who it's for: Collections team · Field supervisors · Operations managers
Steps: Open the tool → Import today's pickup list → Set vehicle count and capacity → Run optimisation → Review and dispatch routes

Chatbot

Problem headline: "Get instant answers to any EPR compliance question."
Description: The ReCircle Chatbot is trained on EPR regulations, BIS rules, and ReCircle's own policies. Ask it anything — filing deadlines, registration steps, rule clarifications — and get a clear answer in seconds.
Who it's for: All staff · Producers · Anyone with EPR compliance questions
Steps: Open the chatbot → Type your question in plain language → Read the answer → Ask follow-up questions if needed → Flag incorrect answers with thumbs down

Drive Automation

Problem headline: "No more manual file transfers between team members."
Description: Drive Automation handles file migration between users automatically — no manual downloading, renaming, or re-uploading. Built specifically for the HR team to save hours of admin work every week.
Who it's for: HR team only
Steps: Open the tool → Select source user/folder → Select destination user/folder → Confirm file list → Run transfer → Verify completion


Contact & Help Page (/contact)

H1: "We're here to help."
Intro: "Have a question about any of the tools? Can't access something? Want to suggest a new feature? Reach out — we're happy to help."
General contact card: [INSERT NAME] · [INSERT ROLE] · [INSERT EMAIL] · [INSERT PHONE]
Tool contacts table: Two columns — Tool Name | Point of Contact. All rows: [INSERT NAME] + [INSERT EMAIL]
FAQ accordion (5 items, expand/collapse in vanilla TypeScript):

How do I get access to a tool?
I found a bug — who do I report it to?
Can I request a new feature or improvement?
Is my data secure when using these tools?
How do I get trained on a tool?


All FAQ answers: [INSERT ANSWER] placeholder


What Codex Must NOT Do

No lorem ipsum — all copy from this brief must be used as-is
No SSR — static export only, no getServerSideProps
No CSS frameworks — no Tailwind, no Bootstrap, no Chakra UI
No external JS libraries beyond Lucide React
No dark mode
No progress bars, status percentages, or completion indicators anywhere
No combining tool pages — one .html file per tool after export
Do not skip the ScreenshotPlaceholder component — every step needs one


Deliverables Checklist for Codex

 Next.js 14 project initialised with TypeScript and App Router
 next.config.js with output: 'export'
 globals.css with full CSS variable system
 Shared layout.tsx with Navbar component
 All 9 pages built
 All shared components built: Navbar, ToolCard, StepCard, ScreenshotPlaceholder, ContactCard, Accordion
 Mobile hamburger menu working
 Responsive grid on Overview page
 Coming Soon state on ClimaOne V2
 All placeholder text clearly marked [INSERT ...]
 public/screenshots/ folder present and empty
 README.md with setup instructions and GCP deployment steps
 Runs clean on next build with zero errors