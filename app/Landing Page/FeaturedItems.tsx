import ItemCard from "@/components/Itemcard";
import { fetchItems } from "../../lib/fetchItems";
import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";

export default async function FeaturedItems() {
  const items = await fetchItems();

  if (!items || items.length === 0) return null;

  return (
    <section className="py-12 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with View All Link - Optimized for Mobile */}
        <div className="flex flex-row justify-between items-end mb-8 md:mb-12 border-b border-white/5 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              <LayoutGrid className="w-3 h-3 md:w-4 md:h-4" /> Top Collections
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight">
              Featured{" "}
              <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4">
                Products
              </span>
            </h2>
          </div>

          <Link
            href="/items"
            className="group flex items-center gap-1.5 text-blue-500 font-bold text-xs md:text-sm hover:text-blue-400 transition-all pb-1"
          >
            <span className="hidden xs:inline">View All</span>
            <span className="xs:hidden">More</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {items.slice(0, 4).map((item: any) => (
            <div key={item.id} className="transition-all duration-300">
              <ItemCard {...item} />
            </div>
          ))}
        </div>

        {/* Mobile-only Bottom View All Button (Optional but josh) */}
        <div className="mt-8 md:hidden">
          <Link
            href="/items"
            className="w-full flex items-center justify-center py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-sm font-bold text-gray-400"
          >
            Explore Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
