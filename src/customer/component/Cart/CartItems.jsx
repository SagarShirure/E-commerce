import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";

const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-lg">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[10rem]">
          <img
            className="w-full h-full object-cover object-left-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/g/w/x/32-36087-0628-levi-s-original-imaget8jchky5tgs-bb.jpeg?q=70"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <h3 className="text-lg font-medium text-gray-900">
            511 Men Slim Mid Rise Blue Jeans
          </h3>
          <p className="text-sm mt-2 text-gray-900">Size L, White</p>
          <p className="text-sm mt-2 text-gray-900">Peter Englend</p>
          <div className="flex items-center space-x-2 pt-6">
            <p className="font-semibold">1000</p>
            <p className="line-through text-sm text to-black">2000 </p>
            <p className=" text-green-500 font-semibold">50% off</p>
          </div>
        </div>
        
      </div>
      <div className="lg:flex items-center lg: space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton sx={{bgcolor:"white", color:"blue"}}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3 </span>
            <IconButton sx={{bgcolor:"white", color:"blue"}}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <IconButton sx={{bgcolor:"white", color:"blue"}}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
    </div>
  );
};

export default CartItems;
