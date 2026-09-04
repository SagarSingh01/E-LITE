import React, { useContext } from 'react'
import useFetch from '../Hooks/useFetch'
import { newContext } from '../Context/Context'
import Loading from './Loading'
import Error from './Error'
import { Link } from 'react-router-dom'

function Card() {
    const { category, setCart, setCartItem } = useContext(newContext);
    const [data, loading, error] = useFetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')

    const filterProducts = category === 'All' ? data : data?.filter((pro) => pro.category === category);

    const handleProduct = (id) => {
        const product = data?.filter((pro) => pro.id === id);
        setCartItem(product);
        setCart(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <div className='mt-4 grid gap-6 justify-items-center place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                filterProducts?.map((pro) => (
                    <Link
                        key={pro.id}
                        className='w-full max-w-80'
                        to={`product/${pro.id}`}
                    >
                        <div
                            onClick={(e) => {
                                handleProduct(pro.id);
                            }}
                            className='group w-full max-w-80 cursor-pointer overflow-hidden rounded-lg bg-white py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                        >
                            <div className='h-90 overflow-hidden'>
                                <img
                                    className='h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105'
                                    src={pro.image}
                                    alt={pro.name}
                                />
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Card