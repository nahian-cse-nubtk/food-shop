import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between p-5 items-center bg-amber-100'>
            <div>
                <h1 className='text-2xl font-bold'>Food Shop</h1>
            </div>
            <div className='flex gap-3'>
                <Link href='/'>Home</Link>
                <Link href='/foods'>Food</Link>
                <Link href='/reviews'>Reviews</Link>
            </div>

        </div>
    );
};

export default Navbar;