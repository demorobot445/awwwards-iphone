"use client";
import { Mulish } from "next/font/google";
import "./globals.css";
import ViewCanvas from "@/components/ViewCanvas";
import Header from "@/components/Header";
import { createContext, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const mulish = Mulish({
  subsets: ["cyrillic"],
});

// app/layout.js

export const LayoutRefContext = createContext({
  tl: null as React.RefObject<GSAPTimeline | null> | null,
  goToLabel: (label: string, extra?: number) => {},
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tl = useRef<GSAPTimeline>(null);

  const goToLabel: (label: string, extra?: number) => void = (
    label,
    extra = 0
  ) => {
    const st = tl.current?.scrollTrigger;

    if (!st) return;

    const y = st.labelToScroll(label);
    gsap.to(window, { duration: 1, scrollTo: y + extra });
  };

  return (
    <html className="overflow-x-hidden" lang="en">
      <body className={`${mulish.className} antialiased `}>
        <LayoutRefContext.Provider value={{ tl, goToLabel }}>
          <ViewCanvas />
          <Header />
          {children}
        </LayoutRefContext.Provider>
      </body>
    </html>
  );
}
