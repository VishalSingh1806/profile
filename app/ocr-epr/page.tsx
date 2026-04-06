import { FileCheck, FolderOpen, Truck, Upload } from "lucide-react";

import { AccentBar } from "@/components/AccentBar/AccentBar";
import { ContactCard } from "@/components/ContactCard/ContactCard";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { JourneyStep } from "@/components/JourneyStep/JourneyStep";
import { RoleCard } from "@/components/RoleCard/RoleCard";
import { contactDetails } from "@/lib/content";

import styles from "./page.module.css";

const roles = [
  {
    icon: FileCheck,
    name: "EPR / Compliance team",
    description:
      "Process shipment document packs and extract transaction data for EPR reporting"
  },
  {
    icon: Truck,
    name: "Logistics / Operations",
    description:
      "Turn vehicle dispatch documents into structured records without manual data entry"
  },
  {
    icon: FolderOpen,
    name: "Anyone handling dispatch docs",
    description:
      "If you receive folders of mixed shipment documents and need the data in a spreadsheet - this is for you"
  }
] as const;

const extractTiles = [
  {
    title: "Weighbridge",
    fields: "Date | Vehicle No | Weighbridge Name | Net Weight (Tons)"
  },
  {
    title: "Tax Invoice",
    fields: "Vehicle Number | Date | Invoice No | Material Name | Net Weight (Tons)"
  },
  {
    title: "E-Way Bill",
    fields:
      "Generated Date | Bill No | Net Weight | Valid Upto | From State | To State | Plastic Categorisation"
  },
  {
    title: "LR Copy",
    fields:
      "Vehicle Number | Date | LR No | Transporter Name | Net Weight | Consignee | Consignor | From/To State"
  },
  {
    title: "Delivery Challan",
    fields:
      "Vehicle Number | Date | Challan No | Transporter Name | Net Weight | Consignee | Consignor | From/To State"
  },
  {
    title: "RC Document",
    fields:
      "Registration Number | Date of Registration | Chassis Number | Engine Number"
  }
] as const;

const steps = [
  {
    number: "01",
    title: "Organise your documents into folders",
    description:
      "Each subfolder represents one transaction. Place the shipment documents for that transaction - weighbridge slips, invoice, e-way bill, LR copy - inside one subfolder. Root-level files must be PDFs. Images (PNG, JPG, JPEG) are supported inside subfolders. Maximum 150 folders per upload. Maximum 50MB per file. PDFs over 50 pages are not supported."
  },
  {
    number: "02",
    title: "Upload the entire folder at once",
    description:
      "Click Upload Folder and select your parent folder. The system accepts the whole folder in one go - no need to upload files one by one. Progress streams live to your screen as each document is processed."
  },
  {
    number: "03",
    title: "The system identifies each document and extracts the data",
    description:
      "For every document, the system first identifies what type it is - Weighbridge, Tax Invoice, E-Way Bill, LR Copy, Delivery Challan, or RC. It then extracts the specific fields for that document type. Weighbridge slips are automatically paired into loading and unloading. If a document cannot be classified, it is flagged as Unrecognised."
  },
  {
    number: "04",
    title: "Review the results on screen",
    description:
      "All extracted fields appear live in your browser as processing completes. You can review each document's data, and edit any field directly in the interface if a value looks incorrect. Note: inline edits are reflected in CSV and PDF exports but not in the server Excel export."
  },
  {
    number: "05",
    title: "Export your structured data",
    description:
      "Download your results in three formats - Excel (server-generated), CSV (client-generated), or PDF. Each transaction subfolder becomes one structured row in the export. Your session data is available for 3 minutes of inactivity before it auto-clears - export before closing the tab."
  }
] as const;

const notes = [
  {
    title: "Upload folders, not files",
    description:
      "The tool is designed for folder upload. Each subfolder = one transaction. Root-level loose files must be PDFs."
  },
  {
    title: "Session clears after 3 minutes",
    description:
      "Extracted data is held in your session for 3 minutes of inactivity. Always export before closing your tab."
  },
  {
    title: "Edits stay in the browser",
    description:
      "If you correct a field in the UI, that correction shows in CSV and PDF exports - but not in the server Excel download. Use CSV or PDF if you have made corrections."
  },
  {
    title: "Unrecognised documents are flagged",
    description:
      'If the system cannot identify a document type, it will show "Image Category not Recognised." Check the scan quality and retry.'
  }
] as const;

export default function OcrEprPage() {
  return (
    <main>
      <AccentBar />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Product 03 | OCR for EPR</p>
          <h1 className={styles.title}>
            Your shipment documents. Structured. <span>In seconds.</span>
          </h1>
          <p>
            Upload an entire folder of shipment documents - invoices, e-way bills, weighbridge
            slips, LR copies - and the system classifies, extracts, and groups them into a clean
            transaction row automatically. No manual typing. No spreadsheet reconciliation.
          </p>
          <a className={styles.primaryButton} href="[INSERT URL]">
            Open OCR for EPR
          </a>
          <p className={styles.accessNote}>
            Works on Chrome and Edge | Desktop only | Upload folders, not individual files
          </p>
        </div>

        <div className={styles.browserFrame}>
          <div className={styles.browserTop}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <div className={styles.browserBody}>
            <div className={styles.uploadArea}>
              <span className={styles.uploadIcon}>+</span>
              <span className={styles.uploadLabel}>Upload folder here</span>
            </div>
            <div className={styles.greenRows}>
              {["Weighbridge", "Tax Invoice", "E-Way Bill"].map((label) => (
                <div key={label} className={styles.greenRow}>
                  <span className={styles.rowLabel}>{label}</span>
                  <div className={styles.rowValue}>
                    <span className={styles.lineLong} />
                    <span className={styles.lineShort} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Who is this for</p>
          <h2>Built for teams processing shipment paperwork</h2>
        </div>
        <div className={styles.grid3}>
          {roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.extractSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>What gets extracted</p>
          <h2>Six document types. Every key field. Automatically.</h2>
          <p className={styles.subtext}>
            The system automatically identifies which type of document it is looking at - you
            don&apos;t need to label anything. It then extracts the specific fields relevant to that
            document type.
          </p>
        </div>
        <div className={styles.grid3}>
          {extractTiles.map((tile) => (
            <article key={tile.title} className={styles.extractTile}>
              <h3>{tile.title}</h3>
              <p className={styles.fieldList}>{tile.fields}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How to use it</p>
          <h2>Step by step</h2>
        </div>
        <div className={styles.stepsList}>
          {steps.map((step, index) => (
            <JourneyStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              capturedLabel=""
              capturedItems={[]}
              icon={Upload}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className={styles.notesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Good to know</p>
          <h2>A few things before you start</h2>
        </div>
        <div className={styles.notesGrid}>
          {notes.map((note) => (
            <article key={note.title} className={styles.noteTile}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.helpSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Need help</p>
          <h2>Having trouble? We&apos;re here.</h2>
        </div>
        <ContactCard {...contactDetails} />
      </section>

      <FooterStrip />
    </main>
  );
}
