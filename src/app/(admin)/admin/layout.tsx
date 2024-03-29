import React from "react";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Admin",
  alternates: {
    canonical: `${process.env.DOMAIN}/admin`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
