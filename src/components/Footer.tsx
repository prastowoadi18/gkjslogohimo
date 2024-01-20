import MaxWidthWrapper from "./MaxWidthWrapper";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "./Image";

const Footer = () => {
  return (
    <>
      <footer className="border-y border-gray-200">
        <MaxWidthWrapper className="py-10">
          <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-4">
            <div className="">
              <div className="-mt-1 flex items-center space-x-5">
                <Image
                  src="/assets/logo.png"
                  width={100}
                  height={100}
                  alt="logo-img"
                  className="h-12 w-12"
                  rounded="rounded-full"
                />
                <h1 className="text-lg font-semibold">GKJ Slogohimo</h1>
              </div>
              <div className="mt-5 lg:mt-10">
                <a
                  href="mailto:gkjslogohimo@gmail.com, gkjslogohimo@gmail.com?subject=Tanya GKJ Slogohimo"
                  className="group mb-3 flex items-center space-x-3 transition-all duration-300 hover:text-blue-500"
                >
                  <Mail className="h-5 w-5" />
                  <p className="text-base text-muted-foreground group-hover:text-blue-500 group-hover:transition-all group-hover:duration-300">
                    gkjslogohimo@gmail.com
                  </p>
                </a>
                <a
                  href="https://maps.app.goo.gl/pS7CVBFQ4VD8iyeu9"
                  target="_blank"
                  aria-label="Alamat GKJ Slogohimo"
                  className="group mb-3 flex items-center space-x-3 transition-all duration-300 hover:text-blue-500"
                >
                  <MapPin className="h-5 w-5" />
                  <p className="text-base text-muted-foreground group-hover:text-blue-500 group-hover:transition-all group-hover:duration-300">
                    Gaton, Kabupaten Wonogiri
                  </p>
                </a>
                <div className="flex items-center space-x-3">
                  <PhoneCall className="h-5 w-5" />
                  <p className="text-base text-muted-foreground">
                    082777321999
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="-mt-1 py-3">
                <h1 className="text-lg font-semibold">Tautan</h1>
              </div>
              <div className="mt-5 lg:mt-10">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="flex flex-col">
                    <Link
                      href="/#berita_terbaru"
                      className="mb-3 text-base text-muted-foreground transition-all duration-300 hover:text-blue-500"
                    >
                      Berita Terbaru
                    </Link>
                    <Link
                      href="/tentang/majelis"
                      className="mb-3 text-base text-muted-foreground transition-all duration-300 hover:text-blue-500"
                    >
                      Majelis
                    </Link>
                    <Link
                      href="/berita"
                      className="text-base text-muted-foreground transition-all duration-300 hover:text-blue-500"
                    >
                      Berita
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/tentang/sejarah"
                      className="mb-3 text-base text-muted-foreground transition-all duration-300 hover:text-blue-500"
                    >
                      Sejarah Lengkap
                    </Link>
                    <Link
                      href="/tentang/gereja"
                      className="mb-3 text-base text-muted-foreground transition-all duration-300 hover:text-blue-500"
                    >
                      Gereja
                    </Link>
                    <Link
                      href="/tentang/pendeta"
                      className="text-base text-muted-foreground transition-all duration-300 hover:text-blue-500"
                    >
                      Profile Pendeta
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="-mt-1 py-3">
                <h1 className="text-lg font-semibold">Social Media</h1>
              </div>
              <div className="mt-5 lg:mt-10">
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    aria-label="Facebook"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "xs",
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
                      size: "xs",
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
                      size: "xs",
                    })}
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
      <MaxWidthWrapper className="pb-10 pt-5">
        <h1 className="text-sm font-semibold text-muted-foreground">
          Dibuat oleh GKJ Slogohimo 2023
        </h1>
      </MaxWidthWrapper>
    </>
  );
};

export default Footer;
