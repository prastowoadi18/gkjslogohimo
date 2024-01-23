"use client";

import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import React, { useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "@/lib/utils";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });
  return (
    <motion.button
      className="fixed bottom-0 right-0 p-5 md:p-10"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <div className="rounded-full bg-blue-500/80 p-2">
        <ArrowUp size={30} className="text-white" />
      </div>
    </motion.button>
  );
}
