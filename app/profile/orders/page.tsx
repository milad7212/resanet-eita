'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import { useOrders } from '@/app/contexts/OrderContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OrderHistoryPage() {
  const { isAuthenticated } = useAuth();
  const { orders } = useOrders();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div className="container mx-auto px-4 py-8 text-center"><p>در حال انتقال به صفحه ورود...</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">تاریخچه سفارشات</h1>
      {orders.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">شما تاکنون هیچ سفارشی ثبت نکرده‌اید.</p>
          <Link href="/products" className="text-blue-500 hover:underline">
            مشاهده محصولات
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <div>
                  <p className="font-bold">شماره سفارش: <span className="font-normal">{order.id}</span></p>
                  <p className="font-bold">تاریخ: <span className="font-normal">{order.date}</span></p>
                </div>
                <p className="font-bold text-lg">مجموع: {order.total.toLocaleString()} تومان</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">اقلام سفارش:</h3>
                <ul className="list-disc list-inside">
                  {order.items.map(item => (
                    <li key={item.id}>
                      {item.name} (تعداد: {item.quantity}) - {item.price.toLocaleString()} تومان
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
