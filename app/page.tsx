"use client";

import { useState } from "react";

export default function Home() {
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [sellerModalOpen, setSellerModalOpen] = useState(false);
  const [buyerModalOpen, setBuyerModalOpen] = useState(false);
  const [sellerScore, setSellerScore] = useState("");
  const [buyerScore, setBuyerScore] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-background pt-20 text-foreground">
      <div className="mb-8 flex flex-col items-center gap-2">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-comment text-4xl font-bold text-white">
          J
        </div>
        <p className="text-lg">Jules Verne</p>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setPriceModalOpen(true)}
          className="rounded-md bg-comment px-4 py-2 text-white"
        >
          استعلام قیمت
        </button>
        <button
          onClick={() => setSellerModalOpen(true)}
          className="rounded-md bg-comment px-4 py-2 text-white"
        >
          فروشنده امتیاز
        </button>
        <button
          onClick={() => setBuyerModalOpen(true)}
          className="rounded-md bg-comment px-4 py-2 text-white"
        >
          خریدار امتیاز
        </button>
      </div>
      {priceModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-background p-8 text-foreground">
            <p>قیمت: ۱,۰۰۰,۰۰۰ تومان</p>
            <button
              onClick={() => setPriceModalOpen(false)}
              className="mt-4 rounded-md bg-comment px-4 py-2 text-white"
            >
              بستن
            </button>
          </div>
        </div>
      )}
      {sellerModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-background p-8 text-foreground">
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
            <button
              onClick={() => setSellerModalOpen(false)}
              className="mt-4 rounded-md bg-comment px-4 py-2 text-white"
            >
              بستن
            </button>
          </div>
        </div>
      )}
      {buyerModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-background p-8 text-foreground">
            <label htmlFor="buyer-score">خریدار امتیاز</label>
            <input
              id="buyer-score"
              type="number"
              value={buyerScore}
              onChange={(e) => setBuyerScore(e.target.value)}
              className="rounded-md bg-current-line px-2 py-1 text-white"
            />
            <button
              onClick={() => {
                alert(`تعداد امتیاز خریدار: ${buyerScore}`);
                setBuyerModalOpen(false);
              }}
              className="mt-4 rounded-md bg-comment px-4 py-2 text-white"
            >
              تأیید
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
