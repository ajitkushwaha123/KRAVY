const categories = [
  { name: "Explore", icon: "🔥", badge: "50%" },
  { name: "All", icon: "🥪" },
  { name: "Pizza", icon: "🍕" },
  { name: "Burger", icon: "🍔" },
  { name: "Cake", icon: "🍰" },
];

export default function CategoryTabs() {
  return (
    <div className="flex items-center overflow-x-auto px-4 py-2 space-x-4">
      {categories.map((cat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="text-xl">
            {cat.icon}{" "}
            {cat.badge && (
              <span className="text-xs text-red-600 font-bold ml-1">
                FLAT {cat.badge} OFF
              </span>
            )}
          </div>
          <span className="text-xs font-medium text-gray-700 mt-1">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
}
