import { type LucideIcon } from "lucide-react";

import styles from "./ScreenshotSlot.module.css";

type ScreenshotSlotProps = {
  icon: LucideIcon;
  label?: string;
  note?: string;
  tall?: boolean;
};

export function ScreenshotSlot({
  icon: Icon,
  label = "Insert screenshot here",
  note = "Recommended 1200 x 700px",
  tall = false
}: ScreenshotSlotProps) {
  return (
    <div className={`${styles.slot} ${tall ? styles.tall : ""}`}>
      <Icon size={22} />
      <span>{label}</span>
      <small>{note}</small>
    </div>
  );
}
