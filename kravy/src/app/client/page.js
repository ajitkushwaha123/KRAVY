import React from "react";
import CategoryTabs from "@/components/ui/CategoryTabs";
import CoinButton from "@/components/ui/CoinButton";
import LocationHeader from "@/components/ui/LocationHeader";
import SearchBar from "@/components/ui/SearchBar";
import VegToggle from "@/components/ui/VegToggle";
import { Bell, ShoppingCart } from "lucide-react";

const Page = () => {
  return (
    <div className="w-full font-poppins bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto flex justify-between items-center px-4 pt-3 gap-2">
        <LocationHeader />

        <div className="hidden md:flex flex-1 mx-6">
          <SearchBar />
        </div>

        <div className="flex items-center gap-3">
          <button className="relative text-gray-600 dark:text-gray-300 hover:text-primary transition">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </button>

          <button className="relative text-gray-600 dark:text-gray-300 hover:text-primary transition">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-green-500 rounded-full w-4 h-4 text-[10px] text-white flex items-center justify-center">
              2
            </span>
          </button>

          <CoinButton />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 border-b border-gray-200">
        <SearchBar />
        <VegToggle />
      </div>
    </div>
  );
};

export default Page;
