"use client";

import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sellerScore, setSellerScore] = useState("");
  const [buyerScore, setBuyerScore] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-md bg-purple px-4 py-2 text-white"
        >
          استعلام قیمت
        </button>
        <div className="flex flex-col gap-2">
          <label htmlFor="seller-score">فروشنده امتیاز</label>
          <div className="flex items-center gap-2">
            <input
              id="seller-score"
              type="number"
              value={sellerScore}
              onChange={(e) => setSellerScore(e.target.value)}
              className="rounded-md bg-current-line px-2 py-1 text-white"
            />
            <span>ده ماهه</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="buyer-score">خریدار امتیاز</label>
          <input
            id="buyer-score"
            type="number"
            value={buyerScore}
            onChange={(e) => setBuyerScore(e.target.value)}
            className="rounded-md bg-current-line px-2 py-1 text-white"
          />
          <button
            onClick={() => alert(`تعداد امتیاز خریدار: ${buyerScore}`)}
            className="rounded-md bg-purple px-4 py-2 text-white"
          >
            تأیید
          </button>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-background p-8 text-foreground">
            <p>قیمت: ۱,۰۰۰,۰۰۰ تومان</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 rounded-md bg-purple px-4 py-2 text-white"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
