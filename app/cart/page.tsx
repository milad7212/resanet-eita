'use client';

import { useCart } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">سبد خرید شما</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">سبد خرید شما خالی است.</p>
          <Link href="/products" className="text-blue-500 hover:underline">
            به فروشگاه بروید
          </Link>
        </div>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="object-contain" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">{item.price.toLocaleString()} تومان</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border rounded"
                  />
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 pt-4 border-t">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">مجموع کل:</p>
              <p className="text-xl font-bold">{getCartTotal().toLocaleString()} تومان</p>
            </div>
            <div className="text-left mt-4">
                <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors">
                    تکمیل خرید
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
