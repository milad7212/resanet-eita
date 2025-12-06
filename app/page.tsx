import products from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProducts = products.slice(0, 2);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          به فروشگاه اینترنتی عالیس خوش آمدید
        </h1>
        <p className="text-lg text-gray-600">
          نوشیدنی‌های گوارا و باکیفیت
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-8">محصولات ویژه</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
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
    </main>
  );
}
