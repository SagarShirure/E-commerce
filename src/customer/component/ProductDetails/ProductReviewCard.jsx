import { Avatar, Grid, Rating, Box } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div >
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56,bgcolor:"black"}}>
                        R
                    </Avatar>
                </Box>
            </Grid>

        <Grid item xs={9}>
            <div>
                <div>
                    <p className='font-semibold'>Raam</p>
                    <p>April 5, 2023 </p>
                </div>
            </div>

            <Rating value={4.5} name='rating' readOnly precision={0.5}/>
            <p>Got the delivery on time. Product quality is too good. size also fits perfect.</p>
        </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard;