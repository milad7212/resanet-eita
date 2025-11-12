"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";

export default function Home() {
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [sellerModalOpen, setSellerModalOpen] = useState(false);
  const [buyerModalOpen, setBuyerModalOpen] = useState(false);
  const [sellerScore, setSellerScore] = useState("");
  const [buyerScore, setBuyerScore] = useState("");

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-start pt-28">
        <div className="mb-8 flex flex-col items-center gap-2">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-comment text-4xl font-bold text-white shadow-lg">
            J
          </div>
          <p className="text-lg">Jules Verne</p>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setPriceModalOpen(true)}
            className="rounded-md bg-comment px-4 py-2 text-white shadow-lg"
          >
            استعلام قیمت
          </button>
          <button
            onClick={() => setSellerModalOpen(true)}
            className="rounded-md bg-comment px-4 py-2 text-white shadow-lg"
          >
            فروشنده امتیاز
          </button>
          <button
            onClick={() => setBuyerModalOpen(true)}
            className="rounded-md bg-comment px-4 py-2 text-white shadow-lg"
          >
            خریدار امتیاز
          </button>
        </div>
        <AnimatePresence>
          {priceModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="relative rounded-md bg-background p-8 text-foreground">
                <button
                  onClick={() => setPriceModalOpen(false)}
                  className="absolute top-2 left-2 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <p className="text-right">
                  قیمت هر میلیون امتیاز ۱۰ ماه{" "}
                  <span className="text-green">۱۶۲</span> هزار تومان هست.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {sellerModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="flex w-80 flex-col gap-4 rounded-md bg-background p-8 text-foreground">
                <p className="text-right">
                  اینجانب آمادگی فروش امتیاز به تعداد زیر هستم:
                </p>
                <div className="flex items-center gap-2">
                  <input
                    id="seller-score"
                    type="number"
                    value={sellerScore}
                    onChange={(e) => setSellerScore(e.target.value)}
                    className="w-full rounded-md bg-current-line px-2 py-1 text-white"
                  />
                  <span>ده ماهه</span>
                </div>
                <button
                  onClick={() => setSellerModalOpen(false)}
                  className="mt-4 rounded-md bg-comment px-4 py-2 text-white shadow-lg"
                >
                  تأیید
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {buyerModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="flex w-80 flex-col gap-4 rounded-md bg-background p-8 text-foreground">
                <p className="text-right">
                  اینجانب آمادگی خرید امتیاز به تعداد زیر هستم:
                </p>
                <input
                  id="buyer-score"
                  type="number"
                  value={buyerScore}
                  onChange={(e) => setBuyerScore(e.target.value)}
                  className="w-full rounded-md bg-current-line px-2 py-1 text-white"
                />
                <button
                  onClick={() => {
                    alert(`تعداد امتیاز خریدار: ${buyerScore}`);
                    setBuyerModalOpen(false);
                  }}
                  className="mt-4 rounded-md bg-comment px-4 py-2 text-white shadow-lg"
                >
                  تأیید
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
