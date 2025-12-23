"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-purple-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/logo.webp"
              alt="NyeAI Logo"
              width={40}
              height={40}
              className="drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all"
            />
            <span className="text-xl font-bold text-foreground">NyeAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-purple-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="px-6 py-2 bg-gradient-to-r from-purple-primary to-purple-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-purple-primary/30"
            >
              Take Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-gray border-t border-purple-primary/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-text-secondary hover:text-purple-primary transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="block px-6 py-2 bg-gradient-to-r from-purple-primary to-purple-accent text-white rounded-lg font-semibold text-center hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-purple-primary/30"
              onClick={() => setIsOpen(false)}
            >
              Take Assessment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
