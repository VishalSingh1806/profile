import {
  BarChart2,
  Calendar,
  Clock,
  Map,
  MapPin,
  Navigation,
  TrendingDown,
  Upload,
  Users
} from "lucide-react";

import { AccentBar } from "@/components/AccentBar/AccentBar";
import { ContactCard } from "@/components/ContactCard/ContactCard";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { JourneyStep } from "@/components/JourneyStep/JourneyStep";
import { RoleCard } from "@/components/RoleCard/RoleCard";
import { contactDetails } from "@/lib/content";

import styles from "./page.module.css";

const roles = [
  {
    icon: MapPin,
    name: "Collections / Operations",
    description:
      "Plan daily pickup routes without manually ordering stops or estimating travel time"
  },
  {
    icon: Map,
    name: "Field supervisors",
    description:
      "Get a clear area-by-area breakdown of stops, durations, and the best day to run each route"
  },
  {
    icon: BarChart2,
    name: "Operations managers",
    description:
      "Review route summaries - customer count, distance, time savings - before dispatching the team"
  }
] as const;

const steps = [
  {
    number: "01",
    title: "Set up your pickup list as a CSV",
    description:
      "Your CSV must include three columns: S.No, Customer, and Address. You can optionally add Email, Phone Number, Pincode, and City to help with geocoding accuracy. Keep addresses as complete as possible - incomplete addresses may be skipped. Maximum file size is 10MB."
  },
  {
    number: "02",
    title: "Upload your file",
    description:
      "Upload your CSV through the web interface. The system geocodes every address - converting it into a map location - and stores your pickup list ready for optimisation. Note: each new upload replaces the previous dataset, so make sure your file is complete before uploading."
  },
  {
    number: "03",
    title: "Run the optimisation",
    description:
      "The system automatically clusters your stops by geographic area and optimises the stop order within each cluster. It also analyses traffic patterns across weekdays to recommend the best day to run each area route. Each optimised route handles up to 23 stops."
  },
  {
    number: "04",
    title: "Review the results",
    description:
      "For each area cluster, you'll see the number of customers, estimated route duration, total distance, time savings, and the recommended best day. All routes are saved to the system automatically."
  },
  {
    number: "05",
    title: "Send the route to your driver",
    description:
      "Each optimised route comes with a Google Maps link showing the full stop order. Share this link directly with your driver via WhatsApp or any messaging app. The driver opens it in Google Maps and follows the turn-by-turn directions."
  }
] as const;

const metrics = [
  {
    icon: Users,
    title: "Customer count",
    description: "Number of stops in this area cluster"
  },
  {
    icon: Clock,
    title: "Route duration",
    description: "Estimated time to complete the full route including travel"
  },
  {
    icon: Navigation,
    title: "Total distance",
    description: "Total kilometres for the optimised stop order"
  },
  {
    icon: TrendingDown,
    title: "Time savings",
    description: "Estimated time saved versus an unoptimised route"
  },
  {
    icon: Calendar,
    title: "Best day",
    description: "The weekday with the lightest traffic for this area based on Google Maps estimates"
  }
] as const;

const notes = [
  {
    title: "23 stops per route maximum",
    description:
      "Each optimised route supports up to 23 stops due to Google Maps limits. If your area has more, split it into two uploads or sub-areas."
  },
  {
    title: "Each upload replaces the last",
    description:
      "Uploading a new CSV clears your previous pickup list and plans. Make sure your file is complete and correct before uploading."
  },
  {
    title: "Complete addresses get better results",
    description:
      "The system geocodes addresses automatically. Incomplete or vague addresses may fail and get skipped. Always include pincode and city where possible."
  },
  {
    title: "Routes are currently India-focused",
    description:
      "The geocoding is optimised for India and Mumbai. If you are planning routes in a new city or region, contact the tech team to check if any configuration is needed."
  }
] as const;

export default function RouteOptimizerPage() {
  return (
    <main>
      <AccentBar />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Product 05 | Route Optimizer</p>
          <h1 className={styles.title}>
            Smarter collection routes. <span>Less time on the road.</span>
          </h1>
          <p>
            Upload your pickup list as a CSV, and the Route Optimizer clusters your stops by area,
            orders them efficiently, and tells you the best day to run each route - based on real
            traffic estimates. No manual planning. No guesswork.
          </p>
          <a className={styles.primaryButton} href="[INSERT URL]">
            Open Route Optimizer
          </a>
          <p className={styles.accessNote}>
            Available at route.recircle.in | Desktop | Upload a CSV to get started
          </p>
        </div>

        <div className={styles.browserFrame}>
          <div className={styles.browserTop}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <div className={styles.browserBody}>
            <div className={styles.mapField}>
              <span className={`${styles.mapNode} ${styles.nodeOne}`} />
              <span className={`${styles.mapNode} ${styles.nodeTwo}`} />
              <span className={`${styles.mapNode} ${styles.nodeThree}`} />
              <span className={`${styles.mapNode} ${styles.nodeFour}`} />
              <span className={`${styles.mapNode} ${styles.nodeFive}`} />
              <span className={`${styles.mapLine} ${styles.lineOne}`} />
              <span className={`${styles.mapLine} ${styles.lineTwo}`} />
              <span className={`${styles.mapLine} ${styles.lineThree}`} />
              <span className={`${styles.mapLine} ${styles.lineFour}`} />
            </div>
            <div className={styles.metricRow}>
              {[
                ["3 hr 20 min", "Route duration"],
                ["68 km", "Distance"],
                ["Tuesday", "Best day"]
              ].map(([value, label]) => (
                <div key={label} className={styles.metricTile}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Who is this for</p>
          <h2>Built for the collections team</h2>
        </div>
        <div className={styles.rolesGrid}>
          {roles.map((role) => (
            <RoleCard key={role.name} {...role} />
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
              capturedItems={[]}
              capturedLabel=""
              icon={Upload}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className={styles.outputSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>What you get</p>
          <h2>Everything you need to dispatch with confidence</h2>
        </div>
        <div className={styles.metricsGrid}>
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article key={metric.title} className={styles.metricInfoTile}>
                <div className={styles.metricHead}>
                  <Icon size={18} />
                  <h3 className={styles.metricTitle}>{metric.title}</h3>
                </div>
                <p className={styles.metricDescription}>{metric.description}</p>
              </article>
            );
          })}
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
