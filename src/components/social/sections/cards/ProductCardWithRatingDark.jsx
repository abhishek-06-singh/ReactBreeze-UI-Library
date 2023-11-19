import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import SuccessModal from "./SuccessModalDark";

const ProductCardWithRatingDark = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const product = {
    img: "https://images.unsplash.com/photo-1594619272803-932ee1b5a0d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    rating: 5.0,
    price: 599,
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    const newItem = {
      title: product.title,
      quantity: quantity,
      price: product.price * quantity,
    };

    setCart([...cart, newItem]);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="w-full max-w-sm bg-slate-900  rounded-lg shadow relative">
        <a href="#">
          <img className="rounded-t-lg" src={product.img} alt="product image" />
        </a>
        <div className="px-5 pb-5 mt-4">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-100">
              {product.title}
            </h5>
          </a>
          <div className="flex items-center justify-between mt-2.5 mb-2">
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
              <span className="bg-indigo-300 text-indigo-100 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                {product.rating}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold text-gray-100">{`$${product.price}`}</span>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="text-xl text-gray-50 cursor-pointer focus:outline-none hover:scale-125 transition-all ease-in-out duration-300"
              >
                <AiOutlineMinus />
              </button>
              <span className="text-xl font-bold text-gray-50 mx-4">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="text-xl text-gray-50 cursor-pointer focus:outline-none hover:scale-125 transition-all ease-in-out duration-300"
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="flex items-end justify-end mt-1">
            <button
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-1/3"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {showSuccessModal && <SuccessModal onClose={closeSuccessModal} />}
    </div>
  );
};

export default ProductCardWithRatingDark;
