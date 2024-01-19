import Link from "next/link";

import { cn } from "@/lib/utils";

export interface LinkDetailType {
  title: string;
  href: string;
}

interface TitleSectionProps {
  title: string;
  desc: string;
  current_page: string;
  link: LinkDetailType[];
}

export const TitleSection = ({
  current_page,
  desc,
  link,
  title,
}: TitleSectionProps) => {
  return (
    <div className="">
      <div className="hidden space-x-2 text-base text-muted-foreground lg:flex">
        {link.map((e, idx) => (
          <div className="" key={e.title}>
            <Link href={e.href} className="hover:text-blue-500">
              {e.title}
            </Link>
            <span
              className={cn(
                {
                  hidden: idx + 1 === link.length,
                },
                "ml-2",
              )}
            >
              /
            </span>
          </div>
        ))}
        <p className="font-semibold">
          <span className="mr-2 font-normal">/</span>
          {current_page}
        </p>
      </div>
      <h1 className="mt-2 text-2xl font-semibold lg:mt-10 lg:text-xl">
        {title}
      </h1>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
};
