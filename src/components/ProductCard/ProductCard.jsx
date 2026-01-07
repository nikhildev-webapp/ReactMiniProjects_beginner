import React from "react";

const ProductCard = ({ Image, title, description }) => {
  return (
      <>
    
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <img className="w-full" src={Image} alt="product_image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
