// app/items/page.tsx
import ItemCard from "@/components/Itemcard";
import { fetchItems } from "../../lib/fetchItems";

export default async function AllItemsPage() {
  const items = await fetchItems();

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-10">
          Our Entire <span className="text-blue-500">Collection</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item: any) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
