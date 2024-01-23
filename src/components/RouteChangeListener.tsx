"use client";

import { scrollToTop } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteChangeListener({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return <main className="">{children}</main>;
}
