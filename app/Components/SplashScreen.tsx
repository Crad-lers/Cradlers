"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-white text-[#28B7A6] z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.8, duration: 0.5 }}
    >
      <Image src="/logo.png" alt="Cradlers Logo" width={120} height={120} />
      <h1 className="text-3xl font-bold mt-4">Cradlers</h1>
      <p className="text-lg">Comfort & Care for Your Little One</p>

      {/* Loading animation */}
      <div className="mt-6 flex space-x-2">
        <span className="w-3 h-3 bg-[#28B7A6] rounded-full animate-bounce delay-75"></span>
        <span className="w-3 h-3 bg-[#28B7A6] rounded-full animate-bounce delay-150"></span>
        <span className="w-3 h-3 bg-[#28B7A6] rounded-full animate-bounce delay-300"></span>
      </div>
    </motion.div>
  );
}
