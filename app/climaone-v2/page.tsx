import { LayoutDashboard } from "lucide-react";

import { AutomationItem } from "@/components/AutomationItem/AutomationItem";
import { AccentBar } from "@/components/AccentBar/AccentBar";
import { ContactCard } from "@/components/ContactCard/ContactCard";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { JourneyStep } from "@/components/JourneyStep/JourneyStep";
import { LearnMoreStrip } from "@/components/LearnMoreStrip/LearnMoreStrip";
import { OutcomeTile } from "@/components/OutcomeTile/OutcomeTile";
import { RoleCard } from "@/components/RoleCard/RoleCard";
import { ScreenshotSlot } from "@/components/ScreenshotSlot/ScreenshotSlot";
import { climaOneV2Page, contactDetails } from "@/lib/content";

import styles from "./page.module.css";

export default function ClimaOneV2Page() {
  return (
    <main>
      <AccentBar />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>{climaOneV2Page.productEyebrow}</p>
          <h1 className={styles.heroTitle}>
            {climaOneV2Page.heroTitle.before}
            <span>{climaOneV2Page.heroTitle.highlight}</span>
          </h1>
          <p>{climaOneV2Page.subheading}</p>
          <a className={styles.ghostAmber} href={climaOneV2Page.primaryAction.href}>
            {climaOneV2Page.primaryAction.label}
          </a>
          <span className={styles.statusPill}>{climaOneV2Page.statusBadge?.label}</span>
          <p className={styles.accessNote}>{climaOneV2Page.accessNote}</p>
        </div>

        <div className={styles.browserFrame}>
          <div className={styles.browserTop}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <div className={styles.mockupBody}>
            <div className={styles.heroStats}>
              {[
                ["12", "Pending vehicle actions"],
                ["07", "Pending QC"],
                ["18", "Raw material stock"],
                ["05", "Finished goods ready"],
                ["24", "Open PO weight"]
              ].map(([value, label]) => (
                <div key={label} className={styles.heroTile}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className={styles.heroRows}>
              {[
                [styles.rowAmber, "Pending"],
                [styles.rowAmber, "In progress"],
                [styles.rowGreen, "Approved"]
              ].map(([tone, label], index) => (
                <div key={`${label}-${index}`} className={styles.heroRow}>
                  <span className={`${styles.rowDot} ${tone}`} />
                  <div className={styles.rowLines}>
                    <span className={styles.lineLong} />
                    <span className={styles.lineShort} />
                  </div>
                  <span className={styles.miniBadge}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <p className={styles.quote}>
          Material was moving. But proving where it came from, who touched it, and whether the
          evidence was complete - that took days. Now it takes minutes.
        </p>
        <div className={styles.problemGrid}>
          {climaOneV2Page.problemTiles.map((tile) => (
            <article key={tile.title} className={styles.problemTile}>
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How it works</p>
          <h2>7 steps. Every one tracked.</h2>
          <p className={styles.journeyIntro}>{climaOneV2Page.journeyIntro}</p>
        </div>
        <div className={styles.journeyList}>
          {climaOneV2Page.journey.map((step, index) => (
            <JourneyStep key={step.number} {...step} reversed={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>{climaOneV2Page.rolesEyebrow}</p>
          <h2>{climaOneV2Page.rolesTitle}</h2>
        </div>
        <div className={styles.rolesGrid}>
          {climaOneV2Page.roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.automationSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Built-in automation</p>
          <h2>Five things that happen without anyone touching them</h2>
        </div>
        <div className={styles.automationList}>
          {climaOneV2Page.automation.map((item) => (
            <AutomationItem key={item.number} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.outcomeSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>The outcome</p>
          <h2>What changes when this is fully live</h2>
        </div>
        <div className={styles.outcomeGrid}>
          {climaOneV2Page.outcomes.map((item) => (
            <OutcomeTile key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.dashboardSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Compliance</p>
          <h2>Everything a producer needs to see</h2>
        </div>
        <div className={styles.dashboardVisual}>
          <ScreenshotSlot
            icon={LayoutDashboard}
            label="Insert compliance dashboard screenshot"
            note="Recommended 1440 x 900px"
            tall
          />
          <p className={styles.dashboardNote}>{climaOneV2Page.dashboardNote}</p>
        </div>
      </section>

      <LearnMoreStrip {...climaOneV2Page.learnMore} />

      <section className={styles.helpSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Need help</p>
          <h2>{climaOneV2Page.helpTitle}</h2>
        </div>
        <ContactCard {...contactDetails} />
      </section>

      <FooterStrip />
    </main>
  );
}
