import React from "react";
import { FaBolt } from "react-icons/fa";

const DiscountBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-2 sm:py-3 shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
        <FaBolt className="text-yellow-300" />
        <p>
          🚀 <span className="font-semibold">Limited Time Offer!</span> Get{" "}
          <span className="text-yellow-300 font-bold">50% OFF</span> on all coding courses! 🔥
        </p>
      </div>
    </div>
  );
};

export default DiscountBar;
