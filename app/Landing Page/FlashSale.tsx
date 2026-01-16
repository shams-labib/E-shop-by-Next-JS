"use client";

import React, { useState, useEffect } from "react";
import { Zap, ShoppingCart, Flame } from "lucide-react";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: 59, seconds: 59, hours: prev.hours };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const saleProducts = [
    {
      id: 1,
      name: "MacBook Air M2",
      price: "$899",
      oldPrice: "$1199",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=400",
      sold: 85,
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "$999",
      oldPrice: "$1099",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400",
      sold: 45,
    },
    {
      id: 3,
      name: "Logitech G Pro",
      price: "$89",
      oldPrice: "$129",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400",
      sold: 92,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Subtle Yellow Aura */}
      <div className="absolute top-1/2 left-[-10%] w-72 h-72 bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              <Zap className="w-3.5 h-3.5 fill-yellow-500" /> Flash Sale Live
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-none">
              Limited Time <span className="text-yellow-500">Offers</span>
            </h2>
          </div>

          {/* Countdown Timer - Modernized */}
          <div className="flex items-center justify-center gap-2 md:gap-4 bg-white/[0.03] border border-white/10 p-2 md:p-3 rounded-[2rem] backdrop-blur-md px-6">
            <span className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest mr-2 hidden xs:block">
              Ends In
            </span>
            {[
              { label: "H", value: timeLeft.hours },
              { label: "M", value: timeLeft.minutes },
              { label: "S", value: timeLeft.seconds },
            ].map((unit, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-black text-white tabular-nums">
                    {unit.value < 10 ? `0${unit.value}` : unit.value}
                  </span>
                  <span className="text-[8px] text-yellow-500/50 font-black">
                    {unit.label}
                  </span>
                </div>
                {i < 2 && (
                  <span className="text-white/20 font-light text-xl mb-4">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Product Grid - Josh Mobile Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/[0.03] border border-white/5 rounded-[2rem] p-3 md:p-5 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Product Image Wrapper */}
              <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] md:text-xs font-black px-2 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                  <Flame className="w-3 h-3 fill-white" />
                  {Math.round(
                    100 -
                      (parseInt(product.price.slice(1)) /
                        parseInt(product.oldPrice.slice(1))) *
                        100
                  )}
                  % OFF
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-xs md:text-lg font-bold text-white group-hover:text-yellow-500 transition-colors line-clamp-1 uppercase tracking-tight">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-lg md:text-2xl font-black text-white tracking-tighter">
                    {product.price}
                  </span>
                  <span className="text-[10px] md:text-sm text-gray-600 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Modernized Progress Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[9px] md:text-[10px] font-black uppercase tracking-tighter">
                    <span className="text-gray-500">Stock Status</span>
                    <span className="text-yellow-500">
                      {product.sold}% Sold
                    </span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                      style={{ width: `${product.sold}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full mt-3 bg-white text-black hover:bg-yellow-500 font-black py-2.5 md:py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-[10px] md:text-sm uppercase tracking-widest">
                  <ShoppingCart className="w-3.5 h-3.5" /> Grab Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
