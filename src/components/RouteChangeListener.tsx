"use client";

import { scrollToTop } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function RouteChangeListener({
  children,
  ...props
}: ThemeProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <NextThemesProvider {...props}>
      <main className="">{children}</main>
    </NextThemesProvider>
  );
}
