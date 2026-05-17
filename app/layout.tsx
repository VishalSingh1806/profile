import type { Metadata } from "next";

import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Vishal Singh - AI Solutions Architect and End-to-End Product Builder",
  description:
    "AI Solutions Architect who owns products end to end, from planning and stakeholder discussions to architecture, development, deployment, and iteration."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className="bg-stone-100 text-stone-700 antialiased selection:bg-emerald-200 selection:text-emerald-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
