"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(
    NAV_ITEMS.map((item) => item.href.slice(1)),
    80
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full",
        "border-b border-border/50 bg-background/80 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          KnD
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  activeId === item.href.slice(1)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-5xl px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                    activeId === item.href.slice(1)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
