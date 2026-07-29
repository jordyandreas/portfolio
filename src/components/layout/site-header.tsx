"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import {
  headerFloatingShellClassName,
  headerIdleClassName,
  headerIdleShellClassName,
  headerScrolledClassName,
} from "@/components/motion/interaction";
import { interactionTokens } from "@/components/motion/tokens";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;

    function updateScrolledState() {
      frameId = 0;
      setIsScrolled(window.scrollY > interactionTokens.scrollThresholdPx);
    }

    function handleScroll() {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrolledState);
    }

    updateScrolledState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-0 transition-[background-color,padding,box-shadow] duration-300",
        isScrolled ? headerScrolledClassName : headerIdleClassName,
      )}
    >
      <Container
        className={cn(isScrolled && "px-4 sm:px-5 lg:px-8 xl:px-10")}
      >
        <div
          className={cn(
            "transition-[border-radius,background-color,box-shadow,border-color,padding] duration-300",
            isScrolled
              ? cn(headerFloatingShellClassName, "px-3 sm:px-4")
              : headerIdleShellClassName,
          )}
        >
          <Navbar isFloating={isScrolled} />
        </div>
      </Container>
    </header>
  );
}
