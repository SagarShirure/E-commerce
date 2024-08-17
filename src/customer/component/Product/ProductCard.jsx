import React from 'react'
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='w-full h-full object-cover object-left-top' 
            src={product.imageUrl} alt="" />
        </div>
        <div className='textPart bg-white p-3'>
            <div>
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            <p className='mt-2 text-sm text-gray-900'>{product.title}</p>
            </div>
            <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{product.discountedPrice}</p>
              <p className='line-through text-sm text to-black'>{product.price} </p>
              <p className=' text-green-500 font-semibold'>{product.discountPersent}% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard