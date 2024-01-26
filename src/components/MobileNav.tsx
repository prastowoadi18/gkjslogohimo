"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

import Link from "next/link";
import Image from "./Image";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { ModeToggle } from "./DarkModeToggle";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

type NavMenuType = {
  label: string;
  value: string;
  featured: Array<featured>;
};

type featured = {
  name: string;
  href: string;
  imageSrc: string | null;
};

interface MobileNavProps {
  navmenu: NavMenuType[];
}

const MobileNav = ({ navmenu }: MobileNavProps) => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setIsOpen(false));

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        aria-label="menu-button"
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-white lg:hidden"
      >
        <Menu className="h-7 w-7" aria-hidden="true" />
      </button>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-white dark:bg-opacity-25" />
      </div>

      <div className="fixed inset-0 z-40 flex overflow-y-scroll overscroll-y-none">
        <div className="w-4/5">
          <div
            className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white/90 pb-12 shadow-xl backdrop-blur-md dark:bg-background"
            ref={navRef}
          >
            <div className="flex items-center justify-between px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-black dark:text-white"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => setTheme("light")}
                >
                  <Sun />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => setTheme("dark")}
                >
                  <Moon />
                </Button>
              </div>
            </div>

            <div className="mt-2">
              <ul>
                {navmenu.map((item) => (
                  <li key={item.label} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="border-b border-gray-400">
                      <div className="-mb-px flex">
                        <p className="flex-1 whitespace-nowrap border-b-2 border-transparent py-4 text-lg font-medium text-gray-900 dark:text-white">
                          {item.label}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                      {item.featured.map((item) => (
                        <div
                          key={item.name}
                          className="group relative text-base"
                        >
                          <div className="relative h-3/4 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 dark:bg-background">
                            <Image
                              width={400}
                              height={300}
                              src={item.imageSrc!}
                              alt={`img-${item.name}`}
                              className="object-cover object-center"
                            />
                          </div>
                          <Link
                            href={item.href}
                            className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
