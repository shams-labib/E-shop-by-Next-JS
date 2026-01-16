"use client";

import React from "react";
import {
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Gamepad2,
  Camera,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Smartphones",
    count: "120+ Products",
    icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
    color: "bg-blue-500/10",
    textColor: "text-blue-500",
  },
  {
    name: "Laptops",
    count: "85+ Products",
    icon: <Laptop className="w-6 h-6 md:w-8 md:h-8" />,
    color: "bg-purple-500/10",
    textColor: "text-purple-500",
  },
  {
    name: "Watches",
    count: "60+ Products",
    icon: <Watch className="w-6 h-6 md:w-8 md:h-8" />,
    color: "bg-emerald-500/10",
    textColor: "text-emerald-500",
  },
  {
    name: "Audio",
    count: "150+ Products",
    icon: <Headphones className="w-6 h-6 md:w-8 md:h-8" />,
    color: "bg-orange-500/10",
    textColor: "text-orange-500",
  },
  {
    name: "Gaming",
    count: "45+ Products",
    icon: <Gamepad2 className="w-6 h-6 md:w-8 md:h-8" />,
    color: "bg-red-500/10",
    textColor: "text-red-500",
  },
  {
    name: "Cameras",
    count: "30+ Products",
    icon: <Camera className="w-6 h-6 md:w-8 md:h-8" />,
    color: "bg-cyan-500/10",
    textColor: "text-cyan-500",
  },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header - Centered on Mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">
              Browse by <span className="text-blue-500">Category</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-md">
              Find the best electronic gear tailored to your needs.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-500 font-bold hover:underline transition-all">
            All Categories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid - 2 cols on mobile with less padding */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] border border-white/5 p-5 md:p-8 rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 hover:bg-blue-500/10 hover:-translate-y-2 cursor-pointer overflow-hidden shadow-2xl"
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500"></div>

              {/* Icon Container */}
              <div
                className={`p-3 md:p-5 rounded-2xl md:rounded-[1.5rem] ${cat.color} ${cat.textColor} mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-500 relative z-10`}
              >
                {cat.icon}
              </div>

              <h3 className="text-white font-bold text-sm md:text-base mb-1 relative z-10">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-[10px] md:text-xs font-medium relative z-10">
                {cat.count}
              </p>

              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-[2.5rem] pointer-events-none transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button - More Stylized */}
        <div className="mt-8 md:hidden flex justify-center">
          <button className="flex items-center gap-2 text-white bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-bold active:scale-95 transition-all">
            View All <ArrowRight className="w-4 h-4 text-blue-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
