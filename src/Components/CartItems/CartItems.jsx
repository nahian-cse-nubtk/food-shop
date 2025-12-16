'use client'
import React, { useContext } from 'react';
import { CartContext } from '@/Context/CartProvider/CartProvider';

const CartItems = () => {
    const {cartItems}=useContext(CartContext)
    return (
        <div>
            <div>{cartItems.length} items</div>

        </div>
    );
};

export default CartItems;