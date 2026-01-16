"use client";
import React from "react";
import { Star, Eye, ShoppingCart, Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Sony PS5 Controller",
    price: "$69",
    rating: 4.8,
    image: "https://i.ibb.co.com/FLYQxZWJ/dualsense-1-500x500.jpg",
  },
  {
    id: 2,
    name: "Apple Watch Series 9",
    price: "$399",
    rating: 4.9,
    image: "https://i.ibb.co.com/KpHqx7qf/Apple-Watch-Series-9-Starlight.jpg",
  },
  {
    id: 3,
    name: "AirPods Max",
    price: "$549",
    rating: 4.7,
    image:
      "https://i.ibb.co.com/dJbM4krp/airpods-max-usb-c-midnight-mww43za-a.jpg",
  },
  {
    id: 4,
    name: "Dell XPS 13 Laptop",
    price: "$1299",
    rating: 4.6,
    image: "https://i.ibb.co.com/wN8s8844/xps-13-7390-front-500x500.png",
  },
];

const NewArrivals = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 md:mb-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Sparkles className="w-3 h-3 fill-blue-500" /> Just In Now
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">
              New <span className="text-blue-500">Arrivals</span>
            </h2>
          </div>
          <button className="text-xs md:text-sm text-gray-400 font-bold hover:text-white transition-all underline decoration-blue-500/50 underline-offset-8 decoration-2">
            Explore All
          </button>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="group relative bg-white/[0.03] border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Rating Badge - Top Left */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
                  <Star className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                  <span className="text-[10px] font-bold text-white">
                    {p.rating}
                  </span>
                </div>

                {/* Mobile Quick Action (Visible on Hover/Touch) */}
                <div className="absolute bottom-3 right-3 flex flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2.5 bg-white text-black rounded-xl shadow-xl hover:bg-blue-600 hover:text-white transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 bg-black/60 backdrop-blur-md text-white rounded-xl border border-white/10 hover:bg-white hover:text-black transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-6 space-y-2">
                <h3 className="text-white font-bold text-sm md:text-base leading-tight group-hover:text-blue-500 transition-colors line-clamp-1">
                  {p.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-blue-500 font-black text-lg md:text-xl tracking-tighter">
                    {p.price}
                  </p>
                  <div className="h-[1px] flex-grow mx-3 bg-white/5 hidden xs:block"></div>
                  <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest hidden xs:block">
                    Stock
                  </span>
                </div>
              </div>

              {/* Hover Glow Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/20 rounded-[2rem] pointer-events-none transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
