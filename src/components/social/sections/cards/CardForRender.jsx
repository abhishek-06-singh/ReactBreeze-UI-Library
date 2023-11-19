import React from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillEdit,
  AiOutlineDelete,
} from "react-icons/ai";

const CardForRender = ({
  product,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  onQuantityChange,
}) => {
  const handleIncreaseQuantity = () => {
    increaseQuantity();
    onQuantityChange(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity();
    onQuantityChange(quantity - 1);
  };
  return (
    <div className="flex max-w-lg overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md mb-2">
      <div className="w-2/5">
        <a href="#">
          <img
            className="object-cover w-36 h-full rounded-l-lg"
            src={product.image}
            alt={product.name}
          />
        </a>
      </div>
      <div className="pt-2 pb-2 pr-3 pl-1">
        <a href="#">
          <h5 className="text-md font-semibold text-gray-900">
            {product.name}
          </h5>
        </a>

        <div className="flex items-center justify-between mt-2">
          <span className=" font-bold text-green-500 text-xl">
            ${product.price}
          </span>
          <div className="flex items-center bg-indigo-100 rounded-lg p-1">
            <button
              onClick={handleDecreaseQuantity}
              className="text-md text-gray-500 cursor-pointer focus:outline-none hover:scale-125 transition-all ease-in-out duration-300"
            >
              <AiOutlineMinus />
            </button>
            <span className="text-md font-bold text-gray-900 mx-4">
              {quantity}
            </span>
            <button
              onClick={handleIncreaseQuantity}
              className="text-md text-gray-500 cursor-pointer focus:outline-none hover:scale-125 transition-all ease-in-out duration-300"
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-center">
          <div className="flex items-center text-center">
            <button className="mr-2 flex items-center text-center bg-indigo-500 text-white hover:bg-indigo-600 p-2 rounded-xl focus:outline-none w-24">
              <AiFillEdit className="mr-3 ml-2" />
              Edit
            </button>
          </div>
          <div className="flex items-center text-center">
            <button className="flex items-center bg-red-200 text-black hover:bg-red-300 p-2 rounded-xl focus:outline-none w-24">
              <AiOutlineDelete className="mr-2 ml-1" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForRender;
