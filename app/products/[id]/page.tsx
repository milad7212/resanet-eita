import products from "@/data/products.json";
import Image from "next/image";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div>محصول مورد نظر یافت نشد.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-500 mb-8">{product.price}</p>
          <p className="mb-8">
            توضیحات محصول در اینجا قرار می‌گیرد. این محصول یکی از بهترین
            محصولات ماست و با کیفیت بالا تولید شده است.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
