import Link from "next/link";
import { Eye, ShoppingCart } from "lucide-react";

export default function ItemCard({ id, name, price, image, description }: any) {
  return (
    <div className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative h-48 bg-white/[0.05] overflow-hidden">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400"
          }
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">
          {name}
        </h3>
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 flex-grow">
          {description}
        </p>

        <div className="flex flex-col gap-3">
          <span className="text-xl font-black text-blue-500">
            ৳ {price.toLocaleString()}
          </span>

          {/* View Details Button */}
          <Link
            href={`/items/${id}`}
            className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 text-white py-2.5 rounded-xl text-sm font-bold transition-all"
          >
            <Eye className="w-4 h-4" /> View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
