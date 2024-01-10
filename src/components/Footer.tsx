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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5">
            <div className="">
              <div className="flex space-x-5 items-center -mt-1">
                <Image
                  src="/assets/logo.png"
                  width={100}
                  height={100}
                  alt="logo-img"
                  className="w-12 h-12"
                  rounded="rounded-full"
                />
                <h1 className="text-lg font-semibold">GKJ Slogohimo</h1>
              </div>
              <div className="mt-5 lg:mt-10">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="w-5 h-5" />
                  <p className="text-base text-muted-foreground">
                    gkjslogohimo@gmail.com
                  </p>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-5 h-5" />
                  <p className="text-base text-muted-foreground">
                    Gaton, Kabupaten Wonogiri
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneCall className="w-5 h-5" />
                  <p className="text-base text-muted-foreground">
                    082777321999
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="py-3 -mt-1">
                <h1 className="text-lg font-semibold">Tautan</h1>
              </div>
              <div className="mt-5 lg:mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Link
                      href="/#berita_terbaru"
                      className="text-base text-muted-foreground mb-3 hover:text-blue-500 transition-all duration-300"
                    >
                      Berita Terbaru
                    </Link>
                    <Link
                      href="/tentang/majelis"
                      className="text-base text-muted-foreground mb-3 hover:text-blue-500 transition-all duration-300"
                    >
                      Majelis
                    </Link>
                    <Link
                      href="/berita"
                      className="text-base text-muted-foreground hover:text-blue-500 transition-all duration-300"
                    >
                      Berita
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/tentang/sejarah"
                      className="text-base text-muted-foreground mb-3 hover:text-blue-500 transition-all duration-300"
                    >
                      Sejarah Lengkap
                    </Link>
                    <Link
                      href="/tentang/pepanthan"
                      className="text-base text-muted-foreground hover:text-blue-500 transition-all duration-300"
                    >
                      Pepantahan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-3 -mt-1">
                <h1 className="text-lg font-semibold">Social Media</h1>
              </div>
              <div className="mt-5 lg:mt-10">
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "xs",
                    })}
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/komdagkjslogohimo/?hl=id"
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "xs",
                    })}
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@GKJSLOGOHIMO"
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "xs",
                    })}
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
      <MaxWidthWrapper className="pt-5 pb-10">
        <h1 className="font-semibold text-sm text-muted-foreground">
          Dibuat oleh GKJ Slogohimo 2023
        </h1>
      </MaxWidthWrapper>
    </>
  );
};

export default Footer;
