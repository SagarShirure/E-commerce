import React from 'react'


const HomeSectionCard = ({ productData }) => {
  return (
    <div className="flex flex-col justify-between rounded-lg shadow-lg mx-5 border-black ">
      <div className=" h-40 w-40 ">
        <img
          className="object-cover  object-top w-full h-full"
          src={productData.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{productData.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{productData.title}</p>
      </div>
    </div>
  );
};


export default HomeSectionCard