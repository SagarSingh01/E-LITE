import React, { useState } from 'react'
import { newContext } from '../Context/Context';
import { useContext } from 'react';

function Filter() {
    const categories = ["All", "Beauty & Personal Care", "Electronics & Gadgets", "Fashion & Apparel", "Home & Kitchen", "Health & Fitness"];
    const { category, setCategory } = useContext(newContext);

    return (
        <div className='lg:flex gap-4 hidden'>
            {
                categories.map((tab, i) => (
                    <div key={i}
                        onClick={() => setCategory(tab)}
                        className={`font-semibold cursor-pointer px-4 py-1 rounded-lg text-lg 
                    ${category === tab ? "bg-black border text-white" : "bg-white"}`
                        }>
                        {tab}
                    </div>
                ))
            }
        </div>
    )
}

export default Filter