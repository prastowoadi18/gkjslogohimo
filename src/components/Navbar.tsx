import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { buttonVariants } from "./ui/button";

import NavItems from "./NavItems";

import Image from "./Image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { UserButton, auth } from "@clerk/nextjs";
import { PRODUCT_CATEGORIES } from "@/configs";

const Navbar = () => {
  const { userId } = auth();
  const filterMenu = PRODUCT_CATEGORIES.filter((e) => e.label !== "Manage");
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              {/* TODO: Mobile nav */}

              <div className="flex ml-4 lg:ml-0">
                <Link href="/">
                  <Image
                    src="/assets/logo.png"
                    width={100}
                    height={100}
                    alt="logo-img"
                    className="w-12 h-12 hover:scale-105 transition-all duration-300"
                    rounded="rounded-full"
                  />
                </Link>
              </div>
              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems data={userId ? PRODUCT_CATEGORIES : filterMenu} />
              </div>
              <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <div className="flex">
                    <Link
                      href="https://www.facebook.com"
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                    >
                      <Facebook className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/komdagkjslogohimo/?hl=id"
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@GKJSLOGOHIMO"
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                    >
                      <Youtube className="w-5 h-5" />
                    </Link>
                  </div>
                  {userId ? (
                    <>
                      <span
                        className="w-px h-6 bg-gray-200"
                        aria-hidden="true"
                      />
                      <UserButton afterSignOutUrl="/" />
                    </>
                  ) : null}
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
