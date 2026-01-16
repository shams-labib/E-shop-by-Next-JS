"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/50 pt-16 md:pt-24 pb-8 relative overflow-hidden">
      {/* Subtle Radial Gradient for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="space-y-6 text-center sm:text-left">
            <h2 className="text-3xl font-black text-white tracking-tighter italic">
              Next<span className="text-blue-500">Items</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0 font-medium">
              Ultimate destination for premium electronics. We redefine your
              tech lifestyle with 100% genuine gadgets.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "#" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Instagram className="w-4 h-4" />, href: "#" },
                { icon: <Youtube className="w-4 h-4" />, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-[11px] mb-8">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "All Products",
                "Featured Items",
                "Flash Sale",
                "New Arrivals",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-[11px] mb-8">
              Company
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "Help Center",
                "Privacy Policy",
                "Terms & Conditions",
                "Return Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center sm:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-[11px] mb-8">
              Contact
            </h3>
            <div className="space-y-5">
              <div className="flex items-start justify-center sm:justify-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-zinc-400">
                  Dhanmondi 32, Dhaka,
                  <br /> Bangladesh
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-zinc-400">+880 1234 567890</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-zinc-400">hello@nextitems.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} <span className="text-zinc-300">NextItems</span>.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6 md:gap-8 grayscale opacity-50 hover:opacity-100 transition-all duration-500">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="Paypal"
              className="h-3 md:h-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-5 md:h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-3 md:h-4"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
