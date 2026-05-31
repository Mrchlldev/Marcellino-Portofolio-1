"use client";

import AOS from "aos";
import { useEffect } from "react";

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: false, offset: 80 });
  }, []);
  return <>{children}</>;
}
