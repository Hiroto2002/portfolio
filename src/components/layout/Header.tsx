
import { yellowRoundedGlass } from "@/variants/glassmorphism";
import Link from "next/link";
import React from "react";
import { GlassChildCardBox } from "../ui/GlassChildCardBox";

const NAV_LIST = [
  {
    title: "ホーム",
    href: "/",
  },
  {
    title: "作品",
    href: "/products",
  },
];
export const Header = () => {
  return (
    <GlassChildCardBox rounded>
    <header
      className="w-full mx-auto flex items-center font-semibold "
    >
      {NAV_LIST.map((navItem) => (
        <Link
          key={navItem.title}
          href={navItem.href}
          className="mx-4"
          style={{ textShadow: "0 2px 4px rgba(71,97,206,.36)" ,color: "#fff"}}
        >
          <p>{navItem.title}</p>
        </Link>
      ))}
    </header>
    </GlassChildCardBox>
  );
};
