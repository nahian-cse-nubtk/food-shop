import React from 'react';
const getSingleFood = async(id)=>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
    const data = await res.json()
    return data.details
}
const page = async({params}) => {
    const {id} = await params

    const details = await getSingleFood(id)
    console.log(details)
    if(!details){
        return <p className='font-bold text 3xl my-10 text-center'>Food not found</p>
    }
    return (
        <div className="max-w-3xl mx-auto my-5 rounded-2xl border shadow-md hover:shadow-lg transition">
      {/* Image */}
      <img
        src={details.foodImg}
        alt={details.title}
        className="h-64 w-full object-cover rounded-t-2xl"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">{details.title}</h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>🍽 Category: {details.category}</span>
          <span>🌍 Area: {details.area}</span>
          <span>🆔 ID: {details.id}</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-semibold text-green-600">
          ৳ {details.price}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <a
            href={details.video}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-red-600 text-white px-6 py-3 hover:bg-red-700"
          >
            ▶ Watch Recipe
          </a>

          <button className="rounded-xl border px-6 py-3 hover:bg-gray-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    );
};

export default page;