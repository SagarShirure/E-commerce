import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/account/order/${5}`);
    }
  return (
    <div onClick={handleClick} className='mt-10 p-5 shadow-lg shadow-black hover:shadow-2xl'  >
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img src='https://rukminim1.flixcart.com/image/612/612/xif0q/sari/6/t/z/free-sequined-embroidered-saree-granthva-fab-unstitched-original-imaggsq6b4y2adwk.jpeg?q=70' 
                    className='w-[5rem] h-[5rem]  object-cover object-left-top' alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className='font-semibold'>Saree</p>
                        <p className='text-sm opacity-50'>Color: Red</p>
                        <p className='text-sm opacity-50'>Quantity: 1</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>2000</p>
                </Grid>
            <Grid item xs={4}>
                {true &&
                <div>
                    <p>
                    <AdjustIcon sx={{color:"green"}}/>
                    <span>
                    Delivered on March 03
                    </span></p>
                    <p className='text-xs'>
                        
                            Item is Delivered
                        
                    </p>
                    </div>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard