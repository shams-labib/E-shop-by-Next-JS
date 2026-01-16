import Link from "next/link";

interface ItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ItemCard = ({ id, name, description, price, image }: ItemProps) => {
  return (
    <Link href={`/items/${id}`}>
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="h-40 bg-gray-200 rounded mb-3 overflow-hidden">
          <img src="" alt={name} className="w-full h-full object-cover" />
        </div>

        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <p className="mt-2 font-bold text-blue-600">৳ {price}</p>
      </div>
    </Link>
  );
};

export default ItemCard;
