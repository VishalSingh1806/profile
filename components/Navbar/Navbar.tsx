"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navLinks } from "@/lib/content";

import styles from "./Navbar.module.css";

function normalizePath(pathname: string) {
  if (pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function Navbar() {
  const pathname = normalizePath(usePathname());
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isElevated, setIsElevated] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const node = sentinelRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsElevated(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <header className={`${styles.header} ${isElevated ? styles.elevated : ""}`}>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/">
            <span className={styles.badge}>Re</span>
            <span className={styles.brandText}>ReCircle Product Hub</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHelp = link.label === "Help";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.active : ""} ${
                    isHelp ? styles.helpLink : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}>
          <nav className={styles.mobileNav} aria-label="Mobile primary">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileLink} ${isActive ? styles.mobileActive : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
