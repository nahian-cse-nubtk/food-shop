import Link from 'next/link';
import React from 'react';

const FoodCard = ({food}) => {
    return (
          <div className=" rounded-2xl border shadow-md hover:shadow-lg transition">
      <img
        src={food.foodImg}
        alt={food.title}
        className="h-44 w-full object-cover rounded-t-2xl"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{food.title}</h2>

        <p className="text-sm text-gray-500">
          Category: {food.category}
        </p>

        <p className="text-lg font-bold text-green-600">
          ৳ {food.price}
        </p>

        <div className="flex gap-3 pt-2">
          <Link href={`/foods/${food.id}`} className="w-full rounded-xl border px-4 py-2 hover:bg-gray-100">
            View Details
          </Link>

          <button className="w-full rounded-xl bg-green-600 text-white px-4 py-2 hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    );
};

export default FoodCard;