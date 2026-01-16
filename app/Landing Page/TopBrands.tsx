"use client";

import React from "react";
import { Award } from "lucide-react";

const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
  },
  {
    name: "Xiaomi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg",
  },
  {
    name: "Logitech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg",
  },
];

const TopBrands = () => {
  return (
    <section className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <Award className="w-3 h-3" /> Global Network
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic">
            Authorized <span className="text-blue-500">Partners</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-base leading-relaxed font-medium">
            100% genuine products with official manufacturer warranties from the
            world’s leading technology brands.
          </p>
        </div>

        {/* Brands Logo Grid - Optimized for Mobile & Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-6 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl"
            >
              {/* Logo with Dynamic Effects */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 md:h-10 w-full object-contain invert opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              />

              {/* Tooltip Label (Mobile Friendly) */}
              <div className="absolute inset-x-0 bottom-2 text-center opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-500">
                <span className="text-[8px] md:text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">
                  {brand.name}
                </span>
              </div>

              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line - Animated & Modern */}
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
            <p className="relative bg-black/40 border border-white/5 backdrop-blur-md px-6 py-2 rounded-full text-gray-500 text-[9px] md:text-xs font-black tracking-[0.2em] uppercase">
              Official Distributor of 50+ Global Brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
