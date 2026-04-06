import styles from "./ScreenshotPlaceholder.module.css";

type ScreenshotPlaceholderProps = {
  label?: string;
};

export function ScreenshotPlaceholder({
  label = "[INSERT SCREENSHOT - 1200 x 700px]"
}: ScreenshotPlaceholderProps) {
  return (
    <div className={styles.placeholder} aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
