import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { buttonVariants } from "./ui/button";

import NavItems from "./NavItems";

import Image from "./Image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/configs";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}

              <div className="ml-4 flex lg:ml-0">
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
              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems data={PRODUCT_CATEGORIES} />
              </div>
              <div className="ml-auto flex items-center">
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
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
