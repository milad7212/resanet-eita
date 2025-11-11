import { motion } from "framer-motion";

export default function Sidebar({ setSidebarOpen }) {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 z-20 h-full w-64 bg-black bg-opacity-50 backdrop-blur-lg"
    >
      <div className="flex justify-end p-4">
        <button className="text-white" onClick={() => setSidebarOpen(false)}>
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
      </div>
    </motion.aside>
  );
}
