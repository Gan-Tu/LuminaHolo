import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina | Spatial Glasses",
  description:
    "Holographic glasses that bring digital experiences into your world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[var(--background)]">
      <body className="min-h-full bg-[var(--background)] antialiased">
        {children}
      </body>
    </html>
  );
}
