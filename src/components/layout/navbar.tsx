"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { focusRingClassName } from "@/components/motion/interaction";
import { motionEase } from "@/components/motion/tokens";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

const contactCta = {
  label: "Get in Touch",
  href: "/contact",
} as const;

function getSectionId(href: string) {
  const [, hash] = href.split("#");
  return hash ?? null;
}

function isRouteHref(href: string) {
  return !href.includes("#");
}

type NavbarProps = {
  isFloating?: boolean;
};

export function Navbar({ isFloating = false }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuId = useId();
  const shouldReduceMotion = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sectionIds = navigationItems
      .map((item) => getSectionId(item.href))
      .filter((value): value is string => value !== null);

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        const nextActiveSection = visibleEntries[0]?.target.id;
        if (nextActiveSection) {
          setActiveSection(nextActiveSection);
        }
      },
      {
        rootMargin: "-30% 0px -52% 0px",
        threshold: [0.1, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    function syncHashSection() {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    }

    syncHashSection();
    window.addEventListener("hashchange", syncHashSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncHashSection);
    };
  }, [isHome]);

  function closeMenu() {
    setIsOpen(false);
  }

  function handleNavSelection(href: string) {
    const sectionId = getSectionId(href);
    if (sectionId && isHome) {
      setActiveSection(sectionId);
    }
    closeMenu();
  }

  function isItemActive(href: string) {
    if (href === "/") {
      return isHome && activeSection === "home";
    }

    if (isRouteHref(href)) {
      return pathname === href;
    }

    if (!isHome) {
      return false;
    }

    return getSectionId(href) === activeSection;
  }

  return (
    <motion.div
      className={cn("flex flex-col", isFloating ? "py-2" : "py-3")}
      initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.28,
        ease: motionEase,
      }}
    >
      <div className="flex min-h-11 items-center justify-between gap-3 md:gap-4">
        <Link
          href="/"
          className={cn(
            "inline-flex shrink-0 items-center rounded-md text-sm font-semibold tracking-tight text-foreground transition-[color,opacity] duration-200 hover:text-foreground/90",
            focusRingClassName,
          )}
          onClick={() => handleNavSelection("/#home")}
        >
          Jordy Andreas
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => {
              const active = isItemActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "location" : undefined}
                    className={cn(
                      "relative inline-flex items-center rounded-full px-3.5 py-2 text-sm transition-[color,opacity,font-weight] duration-200",
                      focusRingClassName,
                      active
                        ? "font-medium text-foreground"
                        : "bg-transparent font-normal text-muted-foreground hover:text-foreground",
                      shouldReduceMotion &&
                        active &&
                        "border border-foreground/15 bg-foreground/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
                    )}
                    onClick={() => handleNavSelection(item.href)}
                  >
                    {active && !shouldReduceMotion ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 z-0 rounded-full border border-foreground/15 bg-gradient-to-b from-foreground/[0.09] to-foreground/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_8px_20px_-14px_rgba(34,34,34,0.28)] backdrop-blur-xl dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_20px_-14px_rgba(0,0,0,0.45)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                          mass: 0.8,
                        }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm" className="group h-9 rounded-full px-4">
            <Link
              href={contactCta.href}
              onClick={() => handleNavSelection(contactCta.href)}
            >
              {contactCta.label}
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border border-transparent bg-transparent text-foreground transition-[background-color,border-color,color] duration-200 hover:border-border hover:bg-surface",
              focusRingClassName,
            )}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.nav
            id={menuId}
            aria-label="Primary"
            className="overflow-hidden md:hidden"
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -8 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0, y: 0 }
                : { opacity: 0, y: -6 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.18,
              ease: motionEase,
            }}
          >
            <div className="mt-3 rounded-2xl border border-border bg-surface p-2.5">
              <ul className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isItemActive(item.href) ? "location" : undefined}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-sm transition-[background-color,color,opacity] duration-200",
                        focusRingClassName,
                        isItemActive(item.href)
                          ? "border border-foreground/15 bg-gradient-to-b from-foreground/[0.1] to-foreground/[0.05] font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                          : "bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground",
                      )}
                      onClick={() => handleNavSelection(item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-2">
                <Button asChild size="sm" className="group h-9 w-full justify-center rounded-full">
                  <Link
                    href={contactCta.href}
                    onClick={() => handleNavSelection(contactCta.href)}
                  >
                    {contactCta.label}
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
