import { fetchItemById } from "../../../lib/fetchItems";

interface Props {
  params: { id: string };
}

const ItemDetailsPage = async ({ params }: Props) => {
  const item = await fetchItemById(params.id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Item not found 😢</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 h-80 bg-gray-200 rounded overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
          <p className="text-gray-700 mb-6">{item.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ৳ {item.price}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
