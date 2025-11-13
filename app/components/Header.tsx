'use client';

import Link from "next/link";
import { useCart } from "@/app/contexts/CartContext";

export default function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0 z-50">
      <div className="text-2xl font-bold">
        <Link href="/">عالیس</Link>
      </div>
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors">خانه</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-300 transition-colors">محصولات</Link>
          </li>
          <li>
            <Link href="/cart" className="relative hover:text-gray-300 transition-colors">
              سبد خرید
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300 transition-colors">ورود</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
