'use client'

import { CartContext } from '@/Context/CartProvider/CartProvider';
import React, {  use, useState } from 'react';

const AddToCartButton = ({food}) => {
    const {addToCart} = use(CartContext)
    
    const [cart, setCart] = useState(false)
    const handleAddToCartButton =()=>{
        addToCart(food)
        setCart(true)
    }

    return (
            <button
            onClick={handleAddToCartButton}
            disabled={cart}
            className="w-full rounded-xl bg-green-600 text-white px-4 py-2 hover:bg-green-700">{cart?'Added':'Add to Cart'}</button>

    );
};

export default AddToCartButton;