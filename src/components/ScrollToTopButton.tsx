"use client";

import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn, scrollToTop } from "@/lib/utils";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={cn(
        "fixed bottom-0 right-0 p-5 md:p-10",
        isVisible ? "scrollToTopButton visible" : "scrollToTopButton",
      )}
      onClick={scrollToTop}
    >
      <div className="rounded-full bg-blue-500/80 p-2">
        <ArrowUp size={30} className="text-white" />
      </div>
    </button>
  );
}
