'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import { useCart } from '@/app/contexts/CartContext';
import { useOrders } from '@/app/contexts/OrderContext';
import { useRouter } from 'next/navigation';
import { useToast } from '@/app/contexts/ToastContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { isAuthenticated } = useAuth();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const router = useRouter();
  const { showToast } = useToast();

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
    }
    // Redirect to products page if cart is empty
    if (cartItems.length === 0) {
        router.push('/products');
    }
  }, [isAuthenticated, cartItems, router]);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !phone) {
      showToast('لطفا آدرس و شماره تلفن را وارد کنید.', 'error');
      return;
    }

    const newOrder = {
      id: new Date().toISOString(),
      date: new Date().toLocaleDateString('fa-IR'),
      items: cartItems,
      total: getCartTotal(),
    };

    addOrder(newOrder);
    clearCart();
    showToast('سفارش شما با موفقیت ثبت شد!', 'success');
    router.push('/profile/orders');
  };

  if (!isAuthenticated || cartItems.length === 0) {
    return <div className="container mx-auto px-4 py-8 text-center"><p>در حال انتقال...</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">تسویه حساب</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">خلاصه سفارش</h2>
          <div className="divide-y divide-gray-300">
            {cartItems.map(item => (
              <div key={item.id} className="py-2 flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>{(item.price * item.quantity).toLocaleString()} تومان</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between font-bold text-lg">
            <span>مجموع کل:</span>
            <span>{getCartTotal().toLocaleString()} تومان</span>
          </div>
        </div>

        {/* Shipping Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">اطلاعات ارسال</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-bold mb-2">آدرس</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={3}
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">شماره تلفن</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ثبت نهایی سفارش
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
