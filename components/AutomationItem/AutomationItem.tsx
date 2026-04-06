import styles from "./AutomationItem.module.css";

type AutomationItemProps = {
  number: string;
  title: string;
  description: string;
};

export function AutomationItem({ number, title, description }: AutomationItemProps) {
  return (
    <article className={styles.item}>
      <div className={styles.number}>{number}</div>
      <div className={styles.copy}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
