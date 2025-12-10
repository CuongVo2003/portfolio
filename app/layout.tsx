import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Võ Chí Cường - Frontend Developer",
  description:
    "Portfolio của Võ Chí Cường - Frontend Developer với kinh nghiệm về Next.js, React, Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
