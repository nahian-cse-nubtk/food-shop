import ReviewSkeleton from '@/Components/ReviewSkeleton/ReviewSkeleton';
import React from 'react';

const Loading = () => {
    return (
        <div className='grid grid-cols-3 gap-5 px-5 py-5'>
          {
            [...Array(12)].map((_,i)=><ReviewSkeleton key={i}></ReviewSkeleton>)
          }
        </div>
    );
};

export default Loading;