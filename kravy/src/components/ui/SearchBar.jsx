import { Search, Mic } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-[100%] flex items-center bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
      <Search className="w-5 h-5 text-green-600 mr-2" />
      <input
        type="text"
        placeholder="Search for restaurants or delicious dishes"
        className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-500"
      />

      <button className="ml-2 border-l pl-2 border-gray-300 text-green-600 hover:text-green-700 transition">
        <Mic className="w-5 h-5" />
      </button>
    </div>
  );
}
