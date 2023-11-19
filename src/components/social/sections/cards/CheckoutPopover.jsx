import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import CardForRender from "./CardForRender";

const CheckoutPopover = () => {
  const [quantity, setQuantity] = useState(1);
  const product = {
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1594619272803-932ee1b5a0d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const price = product.price;
  const discount = 20;
  const promoDiscount = 10;
  const overallDiscount = discount + promoDiscount;
  const grandTotal = price * quantity - overallDiscount;

  return (
    <div className="flex justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <Popover className="relative">
        {({ open }) => (
          <>
            <nav className="bg-slate-100 w-screen text-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-24"
                        src="https://oyelabs.com/wp-content/uploads/2023/01/Group-80-1.svg"
                        alt="Your Logo"
                      />
                    </div>
                  </div>

                  <Popover.Button
                    type="button"
                    className={`
            ${open ? "text-white" : "text-white/90"}
            inline-flex items-center rounded-md px-3 py-2 text-base font-medium hover:text-white bg-indigo-500`}
                  >
                    <span>Checkout</span>
                  </Popover.Button>
                </div>
              </div>
            </nav>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-full left-1/2 z-10 -translate-x-1/2 transform w-screen max-w-sm sm:px-0 lg:max-w-xl">
                <div className="bg-white overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative gap-4 bg-white p-3 lg:grid-cols-2 justify-items-center ml-5 overflow-auto scrollbar-hide h-56 pb-2">
                    <CardForRender
                      product={product}
                      quantity={quantity}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                      onQuantityChange={handleQuantityChange}
                    />
                    <CardForRender
                      product={product}
                      quantity={quantity}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                      onQuantityChange={handleQuantityChange}
                    />
                  </div>

                  <div className=" bg-white mt-4 p-4 border-t border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span>Price</span>
                      <span>${price}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2">
                      <span>Discount</span>
                      <span>-${discount}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2">
                      <span>Promo Discount</span>
                      <span>-${promoDiscount}</span>{" "}
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2">
                      <span>Overall Discount</span>
                      <span>-${overallDiscount}</span>{" "}
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold mt-2">
                      <span>Grand Total</span>
                      <span>${grandTotal}</span>
                    </div>
                  </div>

                  <button className=" w-full mt-4 bg-indigo-500 text-white py-2 px-4  hover:bg-indigo-600 p-4">
                    Go to Checkout
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl items-center justify-center">
                <div className="bg-white overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative gap-4 bg-white p-3 lg:grid-cols-2 justify-items-center ml-5 overflow-auto scrollbar-hide h-56 pb-2">
                    <CardForRender
                      product={product}
                      quantity={quantity}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                      onQuantityChange={handleQuantityChange}
                    />
                    <CardForRender
                      product={product}
                      quantity={quantity}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                      onQuantityChange={handleQuantityChange}
                    />
                  </div>

                  <div className=" bg-white mt-4 p-4 border-t border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span>Price</span>
                      <span>${price}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2">
                      <span>Discount</span>
                      <span>-${discount}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2">
                      <span>Promo Discount</span>
                      <span>-${promoDiscount}</span>{" "}
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2">
                      <span>Overall Discount</span>
                      <span>-${overallDiscount}</span>{" "}
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold mt-2">
                      <span>Grand Total</span>
                      <span>${grandTotal}</span>
                    </div>
                  </div>

                  <button className=" w-full mt-4 bg-indigo-500 text-white py-2 px-4  hover:bg-indigo-600 p-4">
                    Go to Checkout
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default CheckoutPopover;
