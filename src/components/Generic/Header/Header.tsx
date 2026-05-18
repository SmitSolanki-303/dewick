"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const navItems = [
  { name: "Work", link: "#work" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="fixed top-0">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Brand Text - Left Side */}
        <a
          href="#"
          className="relative z-20 text-xl font-medium text-white font-display"
        >
          Dewick
        </a>

        {/* Navigation Items - Right Side */}
        <div className="relative z-20 flex items-center space-x-1">
          {navItems.map((item, idx) => (
            <a
              key={`nav-${idx}`}
              href={item.link}
              className="relative px-4 py-2 text-sm font-medium text-white transition-colors hover:text-white/80"
            >
              {item.name}
            </a>
          ))}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Brand Text */}
          <a
            href="#"
            className="relative z-20 text-xl font-medium text-white"
          >
            Vence
          </a>

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-2 text-left text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
