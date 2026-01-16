import ItemCard from "@/components/Itemcard";
import { fetchItems } from "../../lib/fetchItems";

export default async function ItemsPage() {
  const items = await fetchItems();

  if (!items.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">No items found 😢</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">All Items</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
