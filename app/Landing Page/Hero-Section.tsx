"use client";

import React from "react";
import {
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      {/* Background Glow Effect - Adjusted for better mobile view */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 blur-[100px] rounded-full -mr-20 -mt-20 opacity-50 md:opacity-100"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-6 md:space-y-8 z-10 text-center lg:text-left">
            {/* New Arrival Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              New Arrival: Sony WH-1000XM5
            </div>

            {/* Main Heading - Responsive Size */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] md:leading-tight italic tracking-tighter">
              Experience the <span className="text-blue-500">Future</span> of
              Sound.
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-base md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Discover the latest in high-end electronics. We bring the future
              to your doorstep.
            </p>

            {/* Buttons - Improved for Mobile (Stack on small, side-by-side on very small) */}
            <div className="flex flex-col xs:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2">
              <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 md:px-8 py-3.5 md:py-4 rounded-2xl font-black text-sm md:text-base transition-all active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Shop Now <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-7 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-base transition-all active:scale-95">
                View Deals <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Micro Stats - Simplified for Mobile Scroll */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-8 md:pt-10 border-t border-white/5">
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-1 md:gap-2 text-gray-400">
                <Truck className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
                  Free Delivery
                </span>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-1 md:gap-2 text-gray-400 border-x border-white/5 md:border-none px-2 md:px-0">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
                  1y Warranty
                </span>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-1 md:gap-2 text-gray-400">
                <Headphones className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Product Image Overlay */}
          <div className="relative flex justify-center items-center mt-10 lg:mt-0">
            {/* Circle Background Decoration */}
            <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full animate-pulse blur-3xl"></div>

            {/* Main Image */}
            <div className="relative z-10 transition-transform duration-700 hover:rotate-2 group">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600"
                alt="Featured Product"
                className="rounded-[2.5rem] shadow-2xl border border-white/10 w-[280px] sm:w-[350px] md:w-full max-w-[500px] object-cover"
              />

              {/* Mobile Price Tag (Replaced floating tag with a more responsive one) */}
              <div className="absolute -bottom-4 -right-4 bg-white/[0.08] backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl">
                <p className="text-blue-500 text-lg md:text-2xl font-black tracking-tighter">
                  $299.00
                </p>
                <p className="text-[8px] md:text-xs text-gray-400 font-bold uppercase tracking-tighter">
                  Starting Price
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
