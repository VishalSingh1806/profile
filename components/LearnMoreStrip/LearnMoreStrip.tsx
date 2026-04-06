import styles from "./LearnMoreStrip.module.css";

type LearnMoreStripProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export function LearnMoreStrip({
  eyebrow,
  title,
  highlight,
  body,
  ctaLabel,
  ctaHref
}: LearnMoreStripProps) {
  return (
    <section className={styles.strip}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>
          {title}
          <span>{highlight}</span>
        </h2>
        <p className={styles.body}>{body}</p>
      </div>
      <a className={styles.button} href={ctaHref} target="_blank" rel="noreferrer">
        {ctaLabel}
      </a>
    </section>
  );
}
