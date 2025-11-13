import products from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">محصولات ما</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain h-48 w-full mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-500">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
