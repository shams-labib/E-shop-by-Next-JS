"use client";

import React from "react";
import { Mail, Send, BellRing, ShieldCheck } from "lucide-react";

const NewsLetter = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-600/20 via-blue-900/10 to-transparent border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Background Decorative Glows - Optimized for Mobile */}
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/20 blur-[80px] md:blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 md:w-80 h-48 md:h-80 bg-indigo-500/10 blur-[60px] md:blur-[100px] rounded-full -ml-20 -mb-20 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left Side: Content */}
            <div className="space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                <BellRing className="w-3.5 h-3.5 animate-bounce" /> Stay Ahead
              </div>

              <h2 className="text-3xl md:text-6xl font-black text-white leading-[1.1] md:leading-tight italic tracking-tighter">
                Get the <span className="text-blue-500">Latest Tech</span>{" "}
                <br className="hidden md:block" /> Deals Fast.
              </h2>

              <p className="text-gray-400 text-sm md:text-xl font-medium max-w-md mx-auto lg:mx-0">
                Subscribe to get{" "}
                <span className="text-white font-black underline decoration-blue-500 underline-offset-4">
                  10% OFF
                </span>{" "}
                on your first order. Genuine tech, zero spam.
              </p>
            </div>

            {/* Right Side: Input Box */}
            <div className="flex flex-col gap-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative flex flex-col gap-3 group"
              >
                <div className="relative flex-grow">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
                  <input
                    type="email"
                    placeholder="yourname@email.com"
                    className="w-full pl-14 pr-5 py-4 md:py-5 rounded-2xl md:rounded-[1.5rem] bg-black/40 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all font-medium"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 md:py-5 rounded-2xl md:rounded-[1.5rem] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
                >
                  Join Exclusive Club <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-[9px] md:text-[11px] font-bold uppercase tracking-tighter opacity-60">
                <ShieldCheck className="w-3 h-3 text-blue-500" /> Secure
                Subscription • No Spam Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
