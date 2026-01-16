import { fetchItems } from "../../../lib/fetchItems";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RefreshCw,
  Star,
} from "lucide-react";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;
  const items = await fetchItems();
  const product = items.find((i: any) => String(i.id) === String(productId));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white p-6 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Product Not Found!
        </h1>
        <Link href="/" className="bg-blue-600 px-6 py-2 rounded-lg font-bold">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 md:py-20 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-500 mb-8 md:mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Product Image Container */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-4 md:p-8 shadow-2xl">
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full translate-y-1/2"></div>
            <img
              src={
                product.image ||
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000"
              }
              alt={product.name}
              className="w-full h-auto object-cover rounded-2xl relative z-10 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right: Product Info Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                <Star className="w-4 h-4 fill-blue-500" /> Premium Gadget
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight italic">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-blue-500">
                  ৳ {Number(product.price).toLocaleString()}
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase">
                  In Stock
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              {product.description ||
                "Top-tier electronic device with advanced features, official brand warranty, and sleek modern design for everyday professional use."}
            </p>

            {/* Quick Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-y border-white/5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  1 Year Warranty
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-blue-500" />
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Free Shipping
                </span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-blue-500" />
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  7 Days Return
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all active:scale-95 group">
                <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Add to Cart
              </button>
              <button className="px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/5 font-bold transition-all text-gray-300">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
