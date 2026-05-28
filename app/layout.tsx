import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kim's A La Cart — Korean Street Food in Toronto",
  description:
    "A beloved Toronto food cart serving Korean street snacks — kimchi pancakes, fish cake soup, custard waffles, and red bean boongeopang at Yonge & Church.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono bg-paper text-ink">{children}</body>
    </html>
  );
}
