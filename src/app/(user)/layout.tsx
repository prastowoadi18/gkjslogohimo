import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ModalProvider } from "@/components/providers/modal-providers";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GKJ Slogohimo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <ModalProvider />
      <div className="flex-1 flex-grow">{children}</div>
      <Footer />
    </main>
  );
}
