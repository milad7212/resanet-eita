'use client';

import { useState } from 'react';
import products from "@/data/products.json";
import Image from "next/image";
import { useCart } from '@/app/contexts/CartContext';
import { useToast } from '@/app/contexts/ToastContext';

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>محصول مورد نظر یافت نشد.</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    });
    showToast(`${product.name} به سبد خرید اضافه شد.`, 'success');
  };

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
          <p className="text-2xl text-gray-500 mb-8">{product.price.toLocaleString()} تومان</p>
          <p className="mb-8">
            توضیحات محصول در اینجا قرار می‌گیرد. این محصول یکی از بهترین
            محصولات ماست و با کیفیت بالا تولید شده است.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 text-center border rounded-lg py-2"
            />
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
