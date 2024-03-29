"use client";

import { NAV_MENU } from "@/configs";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "./Image";

type NavMenu = (typeof NAV_MENU)[number];

interface NavItemProps {
  navMenu: NavMenu;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ navMenu, handleOpen, isAnyOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {navMenu.label}
          <ChevronDown
            className={cn("h-4 w-4 text-muted-foreground transition-all", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            { "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen },
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow dark:bg-background"
            aria-hidden="true"
          />
          <div className="relative mt-2 bg-white dark:bg-zinc-800">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {navMenu.featured.map((item) => (
                    <div
                      key={item.name}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 dark:bg-zinc-800">
                        <Image
                          src={item.imageSrc}
                          alt="product category image"
                          width={500}
                          height={500}
                          className="aspect-video rounded-lg object-cover object-center"
                          rounded="rounded-lg"
                        />
                      </div>

                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-gray-900 dark:text-white"
                        onClick={handleOpen}
                      >
                        <p className="line-clamp-1"> {item.name}</p>
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Lihat detail
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
