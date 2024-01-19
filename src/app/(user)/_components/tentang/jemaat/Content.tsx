import React, { useMemo } from "react";

import { TENTANG_GEREJA } from "@/configs";

export default function Content() {
  const renderMain = useMemo(() => {
    return (
      <div className="pb-20 pt-10">
        <div className="flex flex-col gap-5">
          {TENTANG_GEREJA.jemaat.map((e) => (
            <div className="" key={e.id}>
              <h1 className="text-lg font-semibold">{`${e.id} ${e.title}`}</h1>
              <p className="w-full px-5 text-justify text-base text-muted-foreground md:px-0 lg:w-1/2">
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }, []);
  return renderMain;
}
