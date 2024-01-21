import { format } from "date-fns";
import { id } from "date-fns/locale";

import { TENTANG_GEREJA } from "@/configs";

export default function Content() {
  return (
    <div className="px-3">
      <h1 className="text-lg font-semibold">{TENTANG_GEREJA.title}</h1>
      <h2 className="text-base text-muted-foreground">
        {format(new Date(TENTANG_GEREJA.created_date), "iiii, dd MMMM yyyy", {
          locale: id,
        })}
      </h2>
      <p className="mt-5 text-justify text-base text-muted-foreground">
        {TENTANG_GEREJA.sejarah_gereja}
      </p>
    </div>
  );
}
