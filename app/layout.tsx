import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Anek_Telugu as AnekTelugu } from "next/font/google";
import "./globals.css";
import cn from "classnames";

const anekTelugu = AnekTelugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Pether Essongue - Programmmer",
  description:
    "I develop websites and write programs using React Tailwinds and Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistMono.variable,
          GeistSans.variable,
          anekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
