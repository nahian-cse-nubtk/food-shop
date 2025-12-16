'use client'
import ReviewCard from '@/Components/ReviewCard/ReviewCard';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const Page = () => {
    const [reviews, setReviews] =useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        fetch(' https://taxi-kitchen-api.vercel.app/api/v1/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data.reviews)
            setLoading(false)
        })
    },[])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl font-bold my-5'>Total Reviews: {reviews.length}</h1>
            <div className='grid grid-cols-3 gap-5 px-5 py-5'>
                {
                    reviews.map(review=><ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>

        </div>
    );
};

export default Page;