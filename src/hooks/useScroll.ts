import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function useScrollToTop() {
  const location = usePathname();
  console.log("location", location);
  // useLayoutEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, [location.key]);
}
