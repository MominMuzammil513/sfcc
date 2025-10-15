"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import NavLinks from "./nav-link";
import { ThemeSwitcher } from "../theme-switcher";
import { MenuBar } from "./menu-bar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-center space-x-9">
      <Logo />
      <MenuBar />
      <ThemeSwitcher />
    </nav>
  );
}
