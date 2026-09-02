import React, { useContext, useState } from 'react'
import useFetch from '../Hooks/useFetch'
import { FaStar } from 'react-icons/fa';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { newContext } from '../Context/Context';
import Loading from './Loading';
import Error from './Error';

function Card() {
    const { category, setCart, count, setCount, setCartItem } = useContext(newContext);
    const [data, loading, error] = useFetch(`https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json`);

    /* Filter Data */
    const filterProducts = category === "All" ? data : data?.filter((pro) => pro.category === category);
    function filter(n) {
        let product = data?.filter((pro) => pro.id === n);
        setCartItem(product);
    }

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-4'>
            {
                loading ? <Loading /> : error ? <Error /> :
                    filterProducts?.map((pro) => (
                        <div onClick={() => filter(pro.id)} key={pro.id} className='group w-full max-w-80 bg-white rounded-lg overflow-hidden py-3 shadow-lg border-gray-500 hover:-translate-y-1 transition-all duration-300'>
                            <div className='h-50 overflow-hidden'>
                                <img onClick={() => setCart(true)} className='w-full h-full lg:object-contain group-hover:scale-105 transition-all duration-300 cursor-pointer' src={pro.image} alt={pro.name} />
                            </div>
                            {/* NAME & PRICE*/}
                            <div className='flex justify-between p-4'>
                                <span className='mt-2 font-bold line-clamp-2 leading-5'>{pro.name}</span>
                                <span className='text-blue-600 font-bold flex items-center'><FaIndianRupeeSign />{pro.priceCents}</span>
                            </div>
                            {/* SUB CATEGORY */}
                            <div className='inline-block font-semibold rounded-full bg-gray-100 px-3 py-1 ml-4 text-xs'>{pro.subCategory}</div>
                            <div className='p-4 flex items-center gap-1'>
                                <FaStar className='text-yellow-500' />
                                <span className='font-semibold'>{pro.rating.stars}</span>
                                <span className='text-gray-500 font-medium'>({pro.rating.count})</span>
                            </div>
                            {/* ADD TO CART */}
                            <div onClick={() => setCount(count + 1)} className='text-center font-bold text-xs bg-blue-600 text-white py-2 mx-6 rounded-xl cursor-pointer transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98]'>ADD TO CART</div>
                        </div>
                    ))
            }
        </div>
    );
};

export default Card