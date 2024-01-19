import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { Toaster } from "sonner";

import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { METADATA } from "@/configs";
import { ModalProvider } from "@/components/providers/modal-providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GKJ Slogohimo",
    template: "%s | GKJ Slogohimo",
  },
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || "",
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    title: `${METADATA.creator}`,
    description: METADATA.description,
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" style={{ scrollBehavior: "smooth" }}>
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="">
          <Navbar />
          {children}
          <Footer />
          <ModalProvider />
          <Toaster position="top-right" richColors />
        </main>
      </body>
    </html>
  );
}
