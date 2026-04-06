import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import styles from "./ToolCard.module.css";

type ToolCardProps = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  href: string;
  status: "Live" | "Coming Soon" | "Support";
};

export function ToolCard({
  icon: Icon,
  name,
  tagline,
  href,
  status
}: ToolCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.iconWrap}>
          <Icon size={28} />
        </span>
        <span
          className={`${styles.status} ${
            status === "Coming Soon"
              ? styles.comingSoon
              : status === "Support"
                ? styles.support
                : styles.live
          }`}
        >
          {status}
        </span>
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.tagline}>{tagline}</p>
      <Link className={styles.link} href={href}>
        Learn more {">"}
      </Link>
    </article>
  );
}
