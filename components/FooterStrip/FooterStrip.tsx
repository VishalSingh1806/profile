import Link from "next/link";

import styles from "./FooterStrip.module.css";

export function FooterStrip() {
  return (
    <>
      <section className={styles.strip}>
        <div>
          <p className={styles.eyebrow}>RECIRCLE PRODUCT HUB</p>
          <h2 className={styles.title}>
            Can&apos;t find what you need? <span>Talk to us.</span>
          </h2>
        </div>
        <Link className={styles.button} href="/contact/">
          Go to Help & Contact
        </Link>
      </section>
      <div className={styles.bottomTag}>Built by ReCircle Tech | Recover. Recycle. Rethink.</div>
    </>
  );
}
