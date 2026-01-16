"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  Loader2,
  UserCheck,
  ShieldAlert,
  Sparkles,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Auto Login Logic for Demo
  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      document.cookie = "auth=true; path=/";
      router.push("/items");
    }, 1200);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      if (email === "admin@example.com" && password === "123456") {
        document.cookie = "auth=true; path=/";
        router.push("/items");
      } else {
        setError("Access Denied: Use Demo Login");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4 relative overflow-hidden font-sans">
      {/* Background Lighting Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>

      {/* Mesh Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-[420px] relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600/10 rounded-2xl mb-4 border border-blue-500/20">
            <Cpu className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-white tracking-tighter">
            Next<span className="text-blue-500">Items</span>
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-blue-500/30"></span>
            <p className="text-blue-500/60 text-[10px] uppercase font-bold tracking-[0.2em]">
              Secure Access Portal
            </p>
            <span className="h-[1px] w-8 bg-blue-500/30"></span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-xl text-xs font-bold text-center animate-shake">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black/40 border border-white/5 text-white pl-12 pr-4 py-4 rounded-2xl focus:border-blue-500/50 outline-none transition-all text-sm placeholder:text-gray-700 shadow-inner"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-black/40 border border-white/5 text-white pl-12 pr-4 py-4 rounded-2xl focus:border-blue-500/50 outline-none transition-all text-sm placeholder:text-gray-700 shadow-inner"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 rounded-2xl transition-all text-sm flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Authorize"
              )}
            </button>
          </form>

          {/* Divider with Glow */}
          <div className="relative flex items-center my-8">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="px-4 text-[10px] text-gray-600 uppercase font-black tracking-widest">
              Demo Access
            </span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* Demo Admin Button - The Star of the Show */}
          <button
            onClick={handleDemoLogin}
            disabled={isLoading}
            className="w-full relative group overflow-hidden bg-blue-600 text-white font-black py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-blue-500/50 active:scale-[0.98]"
          >
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>

            <div className="relative flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-200" />
              <span className="tracking-tight text-lg uppercase">
                Demo Admin Login
              </span>
            </div>
          </button>

          <p className="text-[10px] text-gray-600 text-center mt-6 font-bold tracking-tight">
            Bypassing auth for{" "}
            <span className="text-gray-400">Presentation Mode</span>
          </p>
        </div>

        {/* Footer Credit */}
        <p className="text-center text-gray-700 text-[10px] mt-10 font-medium uppercase tracking-[0.3em]">
          &copy; 2026 NextItems Global Systems
        </p>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
