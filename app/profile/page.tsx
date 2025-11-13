'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Render a loading state or null while redirecting
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>در حال انتقال به صفحه ورود...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">پروفایل کاربری</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <p className="text-gray-700 text-lg">
            <span className="font-bold">نام:</span> {user?.name}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-lg">
            <span className="font-bold">ایمیل:</span> {user?.email}
          </p>
        </div>
        {/* Add more user details here in the future */}
      </div>
    </div>
  );
}
