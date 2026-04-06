"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import styles from "./Accordion.module.css";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={18}
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
              />
            </button>
            {isOpen ? <p className={styles.panel}>{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
