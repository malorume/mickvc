"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

type SidebarLink = {
  href: string;
  label: string;
};

const links: SidebarLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  // { href: "#", label: "######" },
  // { href: "#", label: "######" },
  // { href: "#", label: "######" },
];

export const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string): boolean => pathname === href;

  return (
    <div className="w-full sm:h-screen flex flex-col justify-between container">
      <div className="w-full flex flex-row justify-center items-center">
        <Logo />
      </div>
      <div className="">
        <ul className="flex flex-col gap-1 sm:p-4">
          {links.map((link, key) => (
            <li
              key={key}
              className={cn(
                "flex flex-row justify-start gap-14 items-center uppercase text-base",
                isActive(link.href)
                  ? "text-link-hover hover:text-link-hover"
                  : "text-link hover:text-link-hover"
              )}
            >
              <span className="w-4">{key + 1}</span>
              <Link href={link.href} className="w-full">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
