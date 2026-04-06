import { type LucideIcon } from "lucide-react";

import { ScreenshotSlot } from "@/components/ScreenshotSlot/ScreenshotSlot";

import styles from "./CapabilityBlock.module.css";

type CapabilityBlockProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function CapabilityBlock({
  number,
  title,
  description,
  icon
}: CapabilityBlockProps) {
  return (
    <article className={styles.block}>
      <p className={styles.number}>{number}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ScreenshotSlot icon={icon} />
    </article>
  );
}
