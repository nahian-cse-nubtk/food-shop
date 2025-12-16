import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-3 gap-5 px-10'>
            {
                [...Array(12)].map((_,i)=><>
                <div key={i} className="w-80 rounded-2xl border p-4 shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="h-44 bg-gray-200 rounded-xl mb-4"></div>

      {/* Title Skeleton */}
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>

      {/* Category Skeleton */}
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

      {/* Button Skeletons */}
      <div className="flex gap-3">
        <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
        <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
      </div>
    </div>

                </>
            )}

        </div>
    );
};

export default loading;