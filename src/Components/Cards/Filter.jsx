import React, { useContext } from 'react'
import { newContext } from '../../Context/Context'

function Filter() {
    const categories = ['All', 'Beauty & Personal Care', 'Electronics & Gadgets', 'Fashion & Apparel', 'Home & Kitchen', 'Health & Fitness'];
    const { category, setCategory } = useContext(newContext);

    const handleCategory = (tab) => {
        setCategory(tab)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='hidden items-center gap-2 lg:flex px-2 pt-2 pb-1'>
            {categories.map((tab) => (
                <button
                    key={tab}
                    onClick={() => handleCategory(tab)}
                    className={`cursor-pointer border-b-2 px-4 py-2 text-md font-semibold transition-all duration-200 
                        ${tab === category
                            ? 'border-white text-white'
                            : 'border-transparent text-white/60 hover:border-white/40 hover:text-white'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default Filter;