import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const HorizontalProductCardDark = () => {
  const [quantity, setQuantity] = useState(1);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    setIsCounterVisible(true);
    // Add your logic for adding to cart here
  };

  return (
    <div className="flex items-center justify-center h-screen  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="flex max-w-lg overflow-hidden bg-gray-800 border border-gray-600 rounded-lg shadow-md">
        <div className="w-2/5 ">
          <a href="#">
            <img
              className="object-cover w-full h-full rounded-l-lg"
              src="https://images.unsplash.com/photo-1594619272803-932ee1b5a0d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product image"
            />
          </a>
        </div>
        <div className="w-2/3 p-6">
          <a href="#">
            <h5 className="text-lg font-semibold text-gray-300">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="flex items-center mt-2 mb-4">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-indigo-700 text-indigo-300 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
              5.0
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-300 ">$599</span>
            <button
              onClick={handleAddToCart}
              className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Add to cart
            </button>
          </div>

          {isCounterVisible && (
            <div className="items-center justify-center ml-1 mt-3 bg-slate-600 rounded-md w-24 p-1 transition-all ase-in-out delay-500">
              <div className="flex items-center">
                <button
                  onClick={decreaseQuantity}
                  className="text-xl text-gray-400 cursor-pointer focus:outline-none hover:scale-125 transition-all ease-in-out duration-300"
                >
                  <AiOutlineMinus />
                </button>
                <span className="text-xl font-bold text-gray-300 mx-4">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="text-xl text-gray-400 cursor-pointer focus:outline-none hover:scale-125 transition-all ease-in-out duration-300"
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCardDark;
