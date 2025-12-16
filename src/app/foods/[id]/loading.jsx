export default function FoodDetailsSkeleton() {
  return (
    <div className="max-w-3xl mx-auto rounded-2xl border p-6 shadow-sm animate-pulse space-y-6">
      {/* Image */}
      <div className="h-64 bg-gray-200 rounded-xl"></div>

      {/* Title */}
      <div className="h-6 bg-gray-200 rounded w-2/3"></div>

      {/* Meta info */}
      <div className="flex gap-4">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>

      {/* Price */}
      <div className="h-6 bg-gray-200 rounded w-32"></div>

      {/* Button */}
      <div className="h-12 bg-gray-200 rounded-xl w-40"></div>
    </div>
  );
}
