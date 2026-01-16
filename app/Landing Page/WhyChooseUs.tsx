import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

export const TrustBadges = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      title: "Free Shipping",
      desc: "On orders over $500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      title: "Official Warranty",
      desc: "100% Genuine Products",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      title: "Easy Returns",
      desc: "7 Days replacement",
    },
    {
      icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      title: "Secure Payment",
      desc: "SSL Encrypted Checkout",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Section - Modernized */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <CheckCircle2 className="w-3 h-3" /> NextItems Trust
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic">
            Why Shop With <span className="text-blue-500">NextItems?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-base leading-relaxed font-medium">
            We prioritize your experience with world-class service and a
            seamless shopping journey.
          </p>
        </div>

        {/* Features Grid - 1 Col on Mobile, with Horizontal Alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-row lg:flex-col items-center lg:items-start text-left gap-5 p-5 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-all duration-500 shadow-2xl"
            >
              {/* Icon - Adjusted size for mobile */}
              <div className="flex-shrink-0 p-4 rounded-2xl bg-blue-500/5 group-hover:bg-blue-500/10 transition-all duration-500 group-hover:scale-110">
                {f.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-white font-black text-sm md:text-xl uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed font-bold">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
