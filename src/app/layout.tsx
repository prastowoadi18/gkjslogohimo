import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { METADATA } from "@/configs";
import { ModalProvider } from "@/components/providers/modal-providers";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import { RouteChangeListener } from "@/components/RouteChangeListener";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GKJ Slogohimo Website",
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
    title: `${METADATA.openGraph.title}`,
    description: `${METADATA.description}`,
    images: `${METADATA.profile}`,
    url: `${METADATA.openGraph.url}`,
    siteName: `${METADATA.openGraph.siteName}`,
    locale: `${METADATA.openGraph.locale}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full !scroll-smooth" suppressHydrationWarning>
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <NextTopLoader
          color="#60a5fa"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #3b82f6,0 0 5px #60a5fa"
        />

        <RouteChangeListener
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <ModalProvider />
          <Toaster position="top-right" richColors />
          <ScrollToTopButton />
        </RouteChangeListener>
      </body>
    </html>
  );
}
