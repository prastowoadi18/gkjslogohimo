"use client";

import { scrollToTop } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function RouteChangeListener({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return <main className="">{children}</main>;
}
