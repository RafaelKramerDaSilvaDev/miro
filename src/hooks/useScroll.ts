import { useRef } from "react";

type ScrollOptions = {
  behavior?: "auto" | "smooth";
  block?: "start" | "center" | "end" | "nearest";
};

export const useScroll = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = (
    options: ScrollOptions = { behavior: "smooth", block: "start" }
  ) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView(options);
    }
  };

  const scrollToPosition = (
    top: number,
    behavior: "auto" | "smooth" = "smooth"
  ) => {
    window.scrollTo({
      top,
      behavior,
    });
  };

  return { elementRef, scrollToElement, scrollToPosition };
};
