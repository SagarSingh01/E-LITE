import { FaArrowLeft, FaStar, FaTruck, FaShieldAlt, FaUndo, FaHeart } from 'react-icons/fa'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom';
import Error from './Error';
import ProductDetailsLoading from './ProductDetailsLoading';
import useFetch from '../../Hooks/useFetch';
import { useContext } from 'react';
import { newContext } from '../../Context/Context';


function ProductDetails() {

  const navigate = useNavigate()

  const {count , setCount} = useContext(newContext)

  const { id } = useParams()

  const [data, loading, error] = useFetch(import.meta.env.VITE_PRODUCTS_API)

  const product = data?.find((pro) => String(pro.id) === String(id))

  if (loading) return <ProductDetailsLoading />

  if (error) return <Error />

  return (
    <section className='min-h-screen w-full bg-gray-300 text-gray-900'>
      {/* HEADER */}
      <header className='sticky top-0 z-30 border-b border-gray-200 bg-gray-200 backdrop-blur'>
        <div className='mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8'>
          <button
            onClick={() => navigate('/')}
            className='flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-md font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 active:scale-95'
          >
            <FaArrowLeft size={15} />
            Back
          </button>
          <span className='text-gray-300'>/</span>
          <span className='text-sm font-medium text-gray-500'>
            Product Details
          </span>
        </div>
      </header>

      {/* MAIN */}
      <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10'>
          {/* IMAGE SECTION */}
          <div className='space-y-4'>
            <div className='group relative flex h-87 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:h-112.5 lg:h-140'>
              <span className='absolute left-4 top-4 z-10 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-700'>
                ✓ In Stock
              </span>

              <button className='absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-xl text-gray-400 shadow-md transition-all duration-300 hover:bg-red-50 hover:text-red-500 active:scale-85'>
                <FaHeart />
              </button>

              <img
                className='h-full w-full cursor-pointer object-contain p-8 transition-transform duration-500 group-hover:scale-105'
                src={product?.image}
                alt={product?.name}
              />
            </div>
          </div>

          {/* PRODUCT INFORMATION */}
          <div className='flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8'>
            {/* CATEGORY */}
            <span className='w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600'>
              {product?.subCategory}
            </span>

            {/* PRODUCT NAME */}
            <h1 className='mt-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl'>
              {product?.name}
            </h1>

            {/* RATING */}
            <div className='mt-4 flex flex-wrap items-center gap-3'>
              <div className='flex items-center gap-1.5 rounded-lg bg-yellow-50 px-3 py-1.5'>
                <FaStar size={14} className='text-yellow-500' />
                <span className='text-sm font-bold text-gray-800'>
                  {product?.rating.stars}
                </span>
              </div>

              <span className='text-sm text-gray-500'>
                {product?.rating.count}
              </span>

              <span className='text-gray-300'>•</span>

              <span className='text-sm font-medium text-green-600'>
                95% Recommended
              </span>
            </div>

            {/* PRICE */}
            <div className='mt-6 rounded-xl bg-gray-50 p-4'>
              <div className='flex flex-wrap items-center gap-3'>
                <span className='flex items-center text-3xl font-extrabold text-blue-600'>
                  <FaIndianRupeeSign size={25} />
                  {(product?.priceCents * 77 / 100).toLocaleString('en-IN')}
                </span>

                <span className='text-base text-gray-400 line-through'>
                  ₹{product?.priceCents.toLocaleString('en-IN')}
                </span>

                <span className='rounded-md bg-green-100 px-2 py-1 text-xs font-bold text-green-700'>
                  23% OFF
                </span>
              </div>

              <p className='mt-1 text-xs text-gray-400'>
                Inclusive of all taxes
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className='mt-6'>
              <h2 className='text-base font-bold text-gray-900'>
                About this Product
              </h2>

              <p className='mt-2 text-sm leading-6 text-gray-500'>
                {product?.description}
              </p>
            </div>

            <div className='my-6 h-px bg-gray-200' />

            {/* QUANTITY */}
            <div>
              <h3 className='mb-3 text-sm font-bold text-gray-800'>
                Quantity
              </h3>

              <div className='flex w-fit items-center overflow-hidden rounded-xl border border-gray-300 bg-white'>
                <button className='flex h-10 w-11 cursor-pointer items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100'>
                  −
                </button>

                <span className='flex h-10 w-12 items-center justify-center border-x border-gray-300 text-sm font-bold'>
                  1
                </span>

                <button className='flex h-10 w-11 cursor-pointer items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100'>
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className='mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2'>
              <button
                onClick={() => setCount(count + 1)}
                className='cursor-pointer rounded-xl border-2 border-blue-600 bg-blue-600 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98]'>
                Add to Cart
              </button>

              <button className='cursor-pointer rounded-xl border-2 border-green-600 bg-green-600 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md active:scale-[0.98]'>
                Buy Now
              </button>
            </div>

            {/* DELIVERY */}
            <div className='mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3'>
              <div className='rounded-xl border border-gray-100 bg-gray-50 p-3 text-center'>
                <FaTruck className='mx-auto text-blue-600' size={20} />
                <p className='mt-2 text-xs font-bold text-gray-800'>
                  Free Delivery
                </p>
                <p className='mt-1 text-[11px] text-gray-400'>
                  Orders over ₹499
                </p>
              </div>

              <div className='rounded-xl border border-gray-100 bg-gray-50 p-3 text-center'>
                <FaUndo className='mx-auto text-blue-600' size={18} />
                <p className='mt-2 text-xs font-bold text-gray-800'>
                  Easy Returns
                </p>
                <p className='mt-1 text-[11px] text-gray-400'>
                  7 day replacement
                </p>
              </div>

              <div className='rounded-xl border border-gray-100 bg-gray-50 p-3 text-center'>
                <FaShieldAlt className='mx-auto text-blue-600' size={18} />
                <p className='mt-2 text-xs font-bold text-gray-800'>
                  Secure Payment
                </p>
                <p className='mt-1 text-[11px] text-gray-400'>
                  100% secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ProductDetails