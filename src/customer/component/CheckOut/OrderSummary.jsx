import React from 'react'
import AddressCard from './AddressCard'
import { Button } from '@mui/material'
import CartItems from '../Cart/CartItems'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard/>
        </div>
        <div>
        <div className='lg:grid grid-cols-3 relative '>
            <div className=' col-span-2'>
                {[1,1,1,1].map((item)=> <CartItems/>)}
            {/* <CartItems/> */}
            </div>
        
       
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-2'>
            <div className='border'>
                <p className='uppercase font-bold opacity-50 pb-4'>Price Details</p>
                <hr/>
            </div>
            <div className='space-y-3 font-semibold mb-10'>
                <div className='flex justify-between  pt-3 text-black'>
                    <span>
                        Price
                    </span>
                    <span>
                        2000
                    </span>
                </div>
                <div className='flex justify-between  pt-3 text-black'>
                    <span>
                        Discount
                    </span>
                    <span className='text-green-600'>
                        1000
                    </span>
                </div>
                <div className='flex justify-between  pt-3 text-black'>
                    <span>
                        Deleviry
                    </span>
                    <span className='text-green-600'>
                        free
                    </span>
                </div>
                <div className='flex justify-between  pt-3 text-black'>
                    <span>
                        Total Amount
                    </span>
                    <span className='text-green-600'>
                        1000
                    </span>
                </div>

            </div>
            <Button variant="contained" className='w-full mt-5'>
                Checkout
            </Button>
            
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default OrderSummary