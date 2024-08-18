import { Grid } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import OrderCard from './OrderCard'

const ordeStatus=[
    {label:"on the way", value:"on_the_way"},
    {label:"delivered", value:"delivered"},
    {label:"Cancelled", value:"Cancelled"},
    {label:"Returned", value:"Returned"},
]

const Order = () => {
  return (
    <div className='lg:px-10 px-5'>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'>Filter</h1>
                    <div className='space-y-4 mt-10'>
                        <h1 className='font-bold '>Order Status</h1>
                       {ordeStatus.map((item)=>(
                            <div className='flex items-center'>
                            <input defaultValue={ordeStatus[0].value} type="checkbox" className='h-4 w-4 border-gray-500 text-indigo-500 focus-ring-indigo-500'></input>
                            <label htmlFor={item.value} className='ml-3 block text-sm font-medium text-gray-700'>
                                {item.label}
                            </label>
                        </div>
                       ))

                       }
                    </div>
                </div>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-5'>
                    {[1,1,1,1].map((item)=>(
                        <OrderCard/>
                    ))}
                </div>
                
                </Grid>
        </Grid>
    </div>
  )
}

export default Order