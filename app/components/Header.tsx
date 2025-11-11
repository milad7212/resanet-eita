"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 flex h-20 items-center justify-between bg-background p-4 shadow-md">
        <div className="flex items-center gap-4">
          <button className="text-white" onClick={() => setSidebarOpen(true)}>
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-white">رسانت</h1>
        </div>
      </header>
      <AnimatePresence>
        {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
      </AnimatePresence>
    </>
  );
}
