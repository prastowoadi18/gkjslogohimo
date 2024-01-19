import { Metadata } from "next";

import {
  BeritaTerbaru,
  Hero,
  Info,
  JadwalIbadah,
  TentangGereja,
} from "@/app/(user)/_components";

export function generateMetadata(): Metadata {
  return {
    title: "Home",
    alternates: {
      canonical: process.env.DOMAIN,
    },
  };
}

export default function Page() {
  return (
    <div className="">
      <Hero />
      <Info />
      <JadwalIbadah />
      <BeritaTerbaru />
      <TentangGereja />
    </div>
  );
}
