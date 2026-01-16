export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const res = await fetch("http://localhost:5000/items", {
      cache: "no-store",
      next: { revalidate: 0 }, // force fresh fetch
    });

    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
  } catch (err) {
    console.error("Fetch items error:", err);
    return [];
  }
};

export const fetchItemById = async (id: string): Promise<Item | null> => {
  try {
    const res = await fetch(`http://localhost:5000/items/${id}`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Fetch single item error:", err);
    return null;
  }
};
