import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minecraft Server Finder",
  description: "Gotta find them all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Minecraft Server Finder
        </title>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
