import React from "react";
import { CircleDollarSign } from "lucide-react"; 

const CoinButton = () => {
  return (
    <button className="relative flex items-center gap-2 px-4 py-1.5 min-w-[100px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors font-poppins">
   
      <span className="absolute top-0 right- w-2 h-2 rounded-full bg-purple-600 animate-ping" />

      <span className="text-sm font-semibold text-gray-700 truncate">
        2,799
      </span>

      <span className="text-yellow-500">
        <CircleDollarSign className="w-4 h-4" />
      </span>
    </button>
  );
};

export default CoinButton;
