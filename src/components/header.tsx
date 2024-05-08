"use client";

import Link from "next/link";
import React from "react";
import Logo from "./logo";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const routes = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "All Events",
      path: "/events/all",
    },
  ];
  const ActivePathName = usePathname();

  return (
    <header className="flex justify-between items-center  px-5 sm:px-12 border-b border-white/10 h-16">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-4 text-sm h-full ">
          {routes.map((route) => (
            <li
              key={route.id}
              className={clsx(
                "hover:text-white transition relative flex items-center h-full",
                {
                  "text-white": route.path === ActivePathName,
                  "text-white/50": route.path !== ActivePathName,
                }
              )}
            >
              <Link href={route.path}>{route.title}</Link>

              {ActivePathName === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="w-full h-1 bg-accent absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
