import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { buttonVariants } from "./ui/button";

import NavItems from "./NavItems";

import Image from "./Image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { NAV_MENU } from "@/configs";

import prisma from "@/lib/prisma";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./DarkModeToggle";

export default async function Navbar() {
  const berita = await prisma.berita.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  const newNavMenu = NAV_MENU.map((e) => {
    return {
      ...e,
      featured:
        e.value === "berita"
          ? berita.map((e) => {
              return {
                name: e.title,
                href: `/berita/${e.slug}`,
                imageSrc: e.imageUrl,
              };
            })
          : e.featured,
    };
  });

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white dark:bg-background">
      <header className="relative bg-white dark:bg-background">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="hidden lg:block">
                <Link href="/">
                  <Image
                    src="/assets/logo.png"
                    width={100}
                    height={100}
                    alt="logo-img"
                    className="h-12 w-12 transition-all duration-300 hover:scale-105"
                    rounded="rounded-full"
                  />
                </Link>
              </div>
              <div className="relative w-full lg:hidden">
                <div className="flex w-full justify-center">
                  <Link href="/">
                    <Image
                      src="/assets/logo.png"
                      width={100}
                      height={100}
                      alt="logo-img"
                      className="h-12 w-12 transition-all duration-300 hover:scale-105"
                      rounded="rounded-full"
                    />
                  </Link>
                </div>
                <div className="absolute left-1 top-3">
                  <MobileNav navmenu={newNavMenu} />
                </div>
              </div>

              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems data={newNavMenu} />
              </div>
              <div className="hidden lg:ml-auto lg:flex lg:items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <div className="flex">
                    <Link
                      href="https://www.facebook.com"
                      target="_blank"
                      aria-label="Facebook"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/komdagkjslogohimo/?hl=id"
                      target="_blank"
                      aria-label="Instagram"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@GKJSLOGOHIMO"
                      target="_blank"
                      aria-label="Youtube"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                    >
                      <Youtube className="h-5 w-5" />
                    </Link>
                  </div>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
