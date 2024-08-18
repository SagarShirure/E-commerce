import React from "react";
import AddressCard from "../CheckOut/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
// import { StarIcon } from "@heroicons/react/16/solid";
import { StarBorder } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <div className="lg:px-20 px-5 ">
      <div className="lg:px-20 px-5 border w-full shadow-md">
        <h1 className="font-bold text-xl py-5">Order Details</h1>
        <AddressCard />
      </div>
      <div className="lg:px-20 px-5 py-10 border w-full shadow-md">
        <OrderTracker activestep={2} />
      </div>
      <div className="lg:px-20 px-5 py-10 border w-full shadow-md space-y-5">
        {
            [1,1,1,1].map((item)=>(
                <Grid container spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }} className="border shadow-md">
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/sari/6/t/z/free-sequined-embroidered-saree-granthva-fab-unstitched-original-imaggsq6b4y2adwk.jpeg?q=70"
                className="w-[5rem] h-[5rem]  object-cover object-left-top"
                alt=""
              />
              <div className="ml-5 space-y-2">
                <p className="font-semibold">Saree</p>
                <p className="text-sm ">Color: Black</p>
                <p className="text-sm ">Quantity: 1</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={4}>
          <div className="flex items-center py-10">
            <Box>
             <StarBorder/> <span>
                 Reviews and ratings
                 </span>
                
            </Box>
             
                
                
              </div>
           
          </Grid>
        </Grid>
            ))
        }
      </div>
    </div>
  );
};

export default OrderDetails;
