import React from 'react'
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
    return (

        <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 h-44 w-full rounded-t-lg" src={product.thumbnail} />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </a>
                <div className="flex text-red-500  items-center mt-2.5 mb-5">
                    {/* rating */}
                    <Rating
                        emptySymbol={<AiOutlineStar size={25} />}
                        fullSymbol={<AiTwotoneStar size={25} />}
                        initialRating={product.rating}
                        readonly

                    />

                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product?.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <Link to={`/product/${product.id}`} state={product} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Product