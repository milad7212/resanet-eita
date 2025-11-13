'use client';

import products from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/contexts/CartContext";
import { useToast } from "@/app/contexts/ToastContext";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); // Prevent navigation
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // Add one item by default
      image: product.image,
    });
    showToast(`${product.name} به سبد خرید اضافه شد.`, 'success');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">محصولات ما</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex flex-col items-center justify-between"
          >
            <Link href={`/products/${product.id}`} className="flex flex-col items-center w-full">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain h-48 w-full mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{product.name}</h2>
              <p className="text-lg text-gray-500 mt-2">{product.price.toLocaleString()} تومان</p>
            </Link>
            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors w-full"
            >
              افزودن به سبد
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
