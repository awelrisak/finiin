"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import Menubar from "@/components/marketing/menubar";
import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "types";
import { useActiveItem } from "@/hooks/use-active-item";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function Navbar({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const itemIds = items?.map((item) => item.title) || [];

  // const active = useActiveItem(itemIds);

  return (
    <div className="flex flex-1 items-center justify-between gap-6 md:gap-10 ">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo />
        {/*<Button
          variant="outline"
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          size="icon"
          aria-label="Toggle mobile menu"
        >
          {showMobileMenu ? (
            <Close className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>*/}
        <span className="font-bold inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",

                item.disabled && "cursor-not-allowed opacity-80",
                // {
                //   "text-foreground/60": active != item.title,
                // },
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      <div className="flex gap-4">
       <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50
            "
          >
            Contact
          </Link>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
       {/* <span className="font-bold">Menu</span>*/}
      </button>
      </div>
      {showMobileMenu && items && (
        <Menubar
          items={items}
          handleClose={() => setShowMobileMenu(!showMobileMenu)}
        >
          {children}
        </Menubar>
      )}
    </div>
  );
}
