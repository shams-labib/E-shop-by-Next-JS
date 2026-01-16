"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  User,
  Zap,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "All Products", href: "/items" },
    { name: "Categories", href: "/#category" },
    { name: "Flash Sale", href: "/#flashsale" },
    { name: "New Arrivals", href: "/#new-arrivle" },
    { name: "Trust", href: "/#trust" },
  ];

  return (
    // z-[999] use kora hoyeche jate Hero section er upor thake
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 pointer-events-none ${
        scrolled ? "py-2 md:py-4" : "py-4 md:py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div
          className={`relative px-4 md:px-8 rounded-[1.5rem] md:rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-blue-500/30 py-1"
              : "shadow-none py-2"
          }`}
        >
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <Zap className="w-5 h-5 text-white relative z-10 group-hover:scale-125 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black text-white leading-none tracking-tighter italic">
                  Next<span className="text-blue-500">Items</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-gray-500 font-bold hidden md:block">
                  Premium Tech
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-gray-400 hover:text-white text-[11px] font-black uppercase tracking-widest transition-all rounded-full hover:bg-white/5 active:scale-95 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Tools */}
            <div className="flex items-center gap-1 md:gap-3 shrink-0">
              <button className="hidden sm:flex p-2.5 text-gray-400 hover:text-blue-500 hover:bg-blue-500/5 rounded-full transition-all">
                <Search className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              <Link
                href="/login"
                className="hidden sm:flex p-2.5 text-gray-400 hover:text-blue-500 hover:bg-blue-500/5 rounded-full transition-all"
              >
                <User className="h-4 w-4 md:h-5 md:w-5" />
              </Link>

              {/* Cart Button */}
              <button className="group relative p-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-[10px] text-white font-black h-4 w-4 flex items-center justify-center rounded-full border-2 border-[#0a0a0a]">
                  2
                </span>
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 text-gray-400 hover:text-white bg-white/5 rounded-xl border border-white/10"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden absolute top-20 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500 origin-top ${
            isOpen
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-lg font-black text-gray-400 hover:text-blue-500 uppercase tracking-tighter"
              >
                {link.name}
                <Sparkles className="w-4 h-4 text-blue-500/50" />
              </Link>
            ))}
            <div className="pt-6 mt-2 border-t border-white/10">
              <Link
                href="/login"
                className="flex w-full items-center justify-center bg-blue-600 text-white font-black py-4 rounded-2xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] uppercase tracking-widest text-xs"
              >
                Login to Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
