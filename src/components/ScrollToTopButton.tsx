"use client";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      aria-label="button-toTop"
      className={cn(
        "fixed bottom-0 right-0 rounded-full p-5",
        isVisible ? "scrollToTopButton visible" : "scrollToTopButton",
      )}
      onClick={scrollToTop}
    >
      <div className="rounded-full bg-white p-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-300 hover:-rotate-12 hover:scale-105">
        <ArrowUp size={30} className="text-blue-500" />
      </div>
    </button>
  );
}
