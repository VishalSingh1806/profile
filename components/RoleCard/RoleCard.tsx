import { type LucideIcon } from "lucide-react";

import styles from "./RoleCard.module.css";

type RoleCardProps = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export function RoleCard({ icon: Icon, name, description }: RoleCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.iconWrap}>
        <Icon size={18} />
      </span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
