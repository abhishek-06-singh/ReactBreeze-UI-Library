import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import CardForRender from "./CardForRender";

const CheckoutPopover2 = () => {
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

  // Example logic for calculating discounts based on quantity (replace with your actual logic)
  const price = product.price;
  const discount = 20; // Replace with your actual discount logic
  const promoDiscount = 10; // Replace with your actual promo discount logic
  const overallDiscount = discount + promoDiscount;
  const grandTotal = price * quantity - overallDiscount;

  return (
    <div className="flex justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                    ${open ? "text-white" : "text-white/90"}
                    group inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <span>Checkout</span>
              <div
                className={`${open ? "text-orange-300" : "text-orange-300/70"}
                      ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                aria-hidden="true"
              >
                --
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="flex items-center justify-center w-screen h-96 ">
                {/* Left Section (Cards) */}
                <div className="flex flex-col items-left justify-center w-screen h-full pl-10 bg-white">
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

                {/* Right Section (Details) */}
                <div className="flex flex-col items-center justify-center  h-full bg-white">
                  <div className="bg-white mt-4 p-4 border-t border-gray-200">
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

                    <button className="w-full mt-4 bg-indigo-500 text-white py-2 px-4 hover:bg-indigo-600 p-4">
                      Go to Checkout
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default CheckoutPopover2;
