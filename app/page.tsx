import Categories from "./Landing Page/Categories";
import FeaturedItems from "./Landing Page/FeaturedItems";
import FlashSale from "./Landing Page/FlashSale";
import Hero from "./Landing Page/Hero-Section";
import NewArrivals from "./Landing Page/NewArrivals";
import NewsLetter from "./Landing Page/NewsLetter";
import TopBrands from "./Landing Page/TopBrands";
import { TrustBadges } from "./Landing Page/WhyChooseUs";

export default function HomePage() {
  return (
    // Josh Dark Gradient Background
    <main className="relative min-h-screen bg-[#030303] text-white selection:bg-blue-500/30">
      {/* Dynamic Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <section className="md:mt-20 mt-30">
          <Hero />
        </section>
        <section>
          <FeaturedItems />
        </section>
        <section id="category">
          <Categories />
        </section>
        <section id="flashsale">
          <FlashSale />
        </section>
        <section id="new-arrivle">
          <NewArrivals />
        </section>
        <section id="trust">
          <TrustBadges />
        </section>
        <TopBrands />
        <NewsLetter />
      </div>

      {/* Grid Pattern Overlay (Optional for extra "Josh") */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </main>
  );
}
