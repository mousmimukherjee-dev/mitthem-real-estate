"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/sheet";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/categories", label: "Categories" },
  { href: "/create-post", label: "Create post" },
];

const darkButton =
  "bg-foreground text-background hover:bg-foreground/90 rounded-xl";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(image:--localy-gradient)">
        <span className="h-3.5 w-3.5 rounded-full border-2 border-white" />
      </span>
      <span className="text-xl font-medium">Locally</span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "rounded-lg bg-accent px-4 py-2 text-accent-foreground"
                  : "rounded-lg px-4 py-2 text-muted-foreground"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/explore"
            aria-label="Search posts"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Search className="h-5 w-5" />
          </Link>

          
          <Link
            href="/login"
            className={cn(
              buttonVariants(),
              darkButton,
              "hidden px-5 sm:inline-flex",
            )}
          >
            Log in
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-72">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive(href) ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium",
                  isActive(href)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground",
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), darkButton, "mt-3 sm:hidden")}
            >
              Log in
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
