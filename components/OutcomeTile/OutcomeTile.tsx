import styles from "./OutcomeTile.module.css";

type OutcomeTileProps = {
  title: string;
  description: string;
};

export function OutcomeTile({ title, description }: OutcomeTileProps) {
  return (
    <article className={styles.tile}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
