import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    "Order Placed",
    "Order Confirmed",
    "Order Shipped",
    "Order Delivered",
]

const OrderTracker = ({activestep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activestep} alternativeLabel>
            {
                steps.map((item)=>(
                    <Step key={item} sx={{cursor:"pointer" ,color:"#9155FD"}}>
                        <StepLabel>{item}</StepLabel>
                    </Step>
                    
                ))
            }
            </Stepper>
    </div>
  )
}

export default OrderTracker