export default function ReviewCard({ review }) {
  return (
    <div className="w-full max-w-xl rounded-2xl border p-5 shadow-md hover:shadow-lg transition space-y-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={review.user}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">{review.user}</h3>
          <p className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500">
        {"★".repeat(review.rating)}
        <span className="text-gray-400 ml-1">
          ({review.rating})
        </span>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">
        {review.review}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>❤️ {review.likes.length} likes</span>
        <span>{review.email}</span>
      </div>
    </div>
  );
}