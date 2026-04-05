import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina | Holographic Glasses",
  description:
    "Holographic glasses that bring digital experiences into your world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} h-full bg-[var(--background)]`}>
      <body className="min-h-full bg-[var(--background)] antialiased">
        {children}
      </body>
    </html>
  );
}
