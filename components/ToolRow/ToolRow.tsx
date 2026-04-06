import Link from "next/link";

import styles from "./ToolRow.module.css";

type ToolRowProps = {
  number: string;
  name: string;
  tagline: string;
  status: string;
  statusTone: "live" | "comingSoon";
  href: string;
  ctaLabel: string;
  reversed?: boolean;
  visual: React.ReactNode;
  mailto?: boolean;
};

export function ToolRow({
  number,
  name,
  tagline,
  status,
  statusTone,
  href,
  ctaLabel,
  reversed = false,
  visual,
  mailto = false
}: ToolRowProps) {
  return (
    <article className={`${styles.row} ${reversed ? styles.reversed : ""}`}>
      <div className={styles.textCol}>
        <div className={styles.number}>{number}</div>
        <span className={`${styles.badge} ${statusTone === "comingSoon" ? styles.comingSoon : styles.live}`}>
          {status}
        </span>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.tagline}>{tagline}</p>
        {mailto ? (
          <a className={`${styles.cta} ${statusTone === "comingSoon" ? styles.ctaAmber : ""}`} href={href}>
            <span>{ctaLabel}</span>
            <span className={styles.arrow}>{">"}</span>
          </a>
        ) : (
          <Link className={styles.cta} href={href}>
            <span>{ctaLabel}</span>
            <span className={styles.arrow}>{">"}</span>
          </Link>
        )}
      </div>
      <div className={styles.visualCol}>{visual}</div>
    </article>
  );
}
