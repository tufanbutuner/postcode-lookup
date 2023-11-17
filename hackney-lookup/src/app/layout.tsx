import type { Metadata } from "next";

import Header from "@/components/Header";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Hackney Address Lookup",
  description: "Lookup addresses in Hackney by postcode.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
