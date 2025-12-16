'use client'
import React, { createContext, useState } from 'react';
export const CartContext = createContext(null)
const CartProvider = ({children}) => {
    const [cartItems, setCartItems] =useState([])
    const addToCart = (item)=>{
        setCartItems([item,...cartItems])
    }
    console.log(cartItems)
    const cartInfo={
        addToCart,
        cartItems
    }

    return (
        <CartContext value={cartInfo}>
            {children}
        </CartContext>
    );
};

export default CartProvider;