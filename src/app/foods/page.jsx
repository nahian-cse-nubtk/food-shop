import FoodCard from '@/Components/FoodCard/FoodCard';
import React from 'react';
const getFoods = async()=>{
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random')
    const data = await res.json()
    return data.foods || []
}

const page = async() => {
    const foods = await getFoods()
    return (
        <div className='py-5'>
            <h1 className='text-3xl font-blod '>All foods are here: {foods.length}</h1>
            <div className='grid grid-cols-3 gap-5 px-10'>
                {
                    foods.map(food=><FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default page;