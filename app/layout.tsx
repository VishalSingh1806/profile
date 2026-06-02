import type { Metadata } from "next";

import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Vishal Singh - AI Solution Architect for Operational Systems",
  description:
    "AI Solution Architect building automation, document intelligence, and operational systems from discovery through deployment."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning id="top" className="bg-stone-100 text-stone-700 antialiased selection:bg-emerald-200 selection:text-emerald-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
