import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder/ScreenshotPlaceholder";

import styles from "./StepCard.module.css";

type StepCardProps = {
  stepNumber: number;
  title: string;
  instruction: string;
};

export function StepCard({ stepNumber, title, instruction }: StepCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.stepNumber}>{stepNumber}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.instruction}>{instruction}</p>
      </div>
      <ScreenshotPlaceholder />
    </article>
  );
}
