import Link from "next/link";

import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { ToolRow } from "@/components/ToolRow/ToolRow";
import { overviewTools } from "@/lib/content";

import styles from "./page.module.css";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.browserFrame}>
      <div className={styles.browserTop}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
      </div>
      <div className={styles.browserBody}>{children}</div>
    </div>
  );
}

function OverviewMockup({ type }: { type: (typeof overviewTools)[number]["mockup"] }) {
  if (type === "v1") {
    return (
      <BrowserFrame>
        <div className={styles.statsGrid}>
          {[
            ["142", "Active POs"],
            ["38", "Certificates"],
            ["94%", "Fulfilment"]
          ].map(([value, label]) => (
            <div key={label} className={styles.statTile}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className={styles.statusList}>
          {[
            [styles.greenStatus, "Issued"],
            [styles.amberStatus, "In progress"],
            [styles.grayStatus, "Pending"],
            [styles.greenStatus, "Issued"]
          ].map(([tone, label], index) => (
            <div key={`${label}-${index}`} className={styles.statusRow}>
              <span className={`${styles.statusDot} ${tone}`} />
              <div className={styles.statusLines}>
                <span className={styles.lineLong} />
                <span className={styles.lineShort} />
              </div>
              <span className={styles.miniBadge}>{label}</span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "v2") {
    return (
      <BrowserFrame>
        <div className={styles.statsGrid}>
          {[
            ["12", "Pending vehicle actions"],
            ["09", "Pending QC"],
            ["24", "Open PO weight"]
          ].map(([value, label]) => (
            <div key={label} className={`${styles.statTile} ${styles.warmTile}`}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className={styles.statusList}>
          {[
            [styles.amberStatus, "Pending"],
            [styles.amberStatus, "In progress"],
            [styles.greenStatus, "Approved"]
          ].map(([tone, label], index) => (
            <div key={`${label}-${index}`} className={styles.statusRow}>
              <span className={`${styles.statusDot} ${tone}`} />
              <div className={styles.statusLines}>
                <span className={styles.lineLong} />
                <span className={styles.lineShort} />
              </div>
              <span className={styles.miniBadge}>{label}</span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "ocrEpr") {
    return (
      <BrowserFrame>
        <div className={styles.uploadBox}>
          <span className={styles.uploadIcon}>+</span>
          <span className={styles.uploadLabel}>Upload document</span>
        </div>
        <div className={styles.extractRows}>
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className={styles.extractRow}>
              <span className={styles.extractLabel} />
              <span className={styles.extractValue} />
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "ocrBiz") {
    return (
      <BrowserFrame>
        <div className={styles.bizCard}>
          <span className={styles.bizBrand} />
          <span className={styles.bizLineLong} />
          <span className={styles.bizLineShort} />
        </div>
        <div className={styles.extractRows}>
          {[0, 1, 2].map((item) => (
            <div key={item} className={styles.extractRow}>
              <span className={styles.extractLabel} />
              <span className={styles.extractValue} />
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "route") {
    return (
      <BrowserFrame>
        <div className={styles.mapField}>
          <span className={`${styles.mapNode} ${styles.nodeOne}`} />
          <span className={`${styles.mapNode} ${styles.nodeTwo}`} />
          <span className={`${styles.mapNode} ${styles.nodeThree}`} />
          <span className={`${styles.mapNode} ${styles.nodeFour}`} />
          <span className={`${styles.mapLine} ${styles.lineOne}`} />
          <span className={`${styles.mapLine} ${styles.lineTwo}`} />
          <span className={`${styles.mapLine} ${styles.lineThree}`} />
        </div>
      </BrowserFrame>
    );
  }

  if (type === "chat") {
    return (
      <BrowserFrame>
        <div className={`${styles.chatBubble} ${styles.botBubble}`} />
        <div className={`${styles.chatBubble} ${styles.userBubble}`} />
        <div className={`${styles.chatBubble} ${styles.botBubble} ${styles.shortBubble}`} />
      </BrowserFrame>
    );
  }

  return (
    <BrowserFrame>
      <div className={styles.folderFlow}>
        <div className={styles.folder} />
        <span className={styles.autoLabel}>auto</span>
        <div className={styles.folder} />
      </div>
    </BrowserFrame>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>RECIRCLE PRODUCT HUB</p>
          <h1 className={styles.heroTitle}>
            Your tools. <span>All in one</span> place.
          </h1>
          <p className={styles.heroBody}>
            Everything the ReCircle team needs to work smarter - built in-house, ready to use. Pick
            a tool below and get started.
          </p>
          <div className={styles.scrollCue}>
            <span className={styles.scrollLine} />
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      <section className={styles.rows}>
        {overviewTools.map((tool, index) => (
          <ToolRow
            key={tool.number}
            number={tool.number}
            name={tool.name}
            tagline={tool.tagline}
            status={tool.status}
            statusTone={tool.statusTone}
            href={tool.href}
            ctaLabel={tool.ctaLabel}
            reversed={index % 2 === 1}
            visual={<OverviewMockup type={tool.mockup} />}
            mailto={tool.mailto}
          />
        ))}
      </section>

      <FooterStrip />
    </main>
  );
}
