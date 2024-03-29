import React, { useState } from "react";
import { CrossSvgIconWhite } from "../../../subcomponent/PreviewCode/svg";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 20,
      size: "200 ml",
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: 30,
      size: "9 | 8 | 7",
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      price: 31,
      size: "Large",
      quantity: 1,
      image:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    },
  ]);

  const calculateTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };
  const [promoCode, setPromoCode] = useState("");
  const calculateTaxEstimate = () => {
    //  tax calculation logic here
    // For example, tax is 10% of the subtotal
    const taxRate = 0.1;
    return calculateTotal() * taxRate;
  };

  const calculateOrderTotal = () => {
    // order total calculation logic here
    // This can include subtotal, shipping, tax, and any other applicable fees or discounts
    return calculateTotal() + calculateTaxEstimate();
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const applyPromoCode = () => {
    // Implement promo code logic here
    // You can update the state or perform other actions based on the entered promo code
  };

  return (
    <div className="flex h-screen overflow-y-auto bg-white">
      {/* Left side - Products */}
      <div className="w-3/5 m-6 mb-10">
        <h2 className="text-4xl mb-8 ml-8 mt-8 font-bold">Products</h2>
        <div className="bg-slate-400 w-5/5 mb-10 h-0.5 rounded-xl ml-8"></div>

        {cart.map((product) => (
          <>
            <div
              key={product.id}
              className="flex items-start mb-4 rounded-2xl p-2 ml-8"
            >
              <div className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="object-cover w-40 h-44 mb-2"
                />
              </div>
              <div className="flex flex-col ml-6">
                <h3 className="font-medium text-left mt-1">{product.name}</h3>
                <p className="text-sm mt-1">${product.price}</p>
                <p className="text-sm text-slate-500 mt-4">{product.size}</p>
              </div>
              <div className="flex items-center ml-40">
                <select
                  value={product.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      product.id,
                      parseInt(e.target.value, 10)
                    )
                  }
                  className=" bg-white text-gray-800 border rounded px-2 py-1"
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="bg-white text-gray-400 hover:text-gray-900 rounded-md focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 ml-auto"
                data-dismiss-target="#toast-message-cta"
                aria-label="Close"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <span className="sr-only">Close</span>
                <CrossSvgIconWhite />
              </button>
            </div>
            <hr className="my-6 mx-8" />
          </>
        ))}
      </div>

      {/* Right side - Order Summary */}
      <div className="w-2/6 ml-6 mr-6 mt-36">
        <div className="bg-neutral-50 p-8 rounded-md">
          <h2 className="text-xl mb-4 font-semibold text-black">
            Order Summary
          </h2>
          <div className="mb-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
          <hr className="my-4 border-t" />
          <div className="mb-4">
            <div className="flex justify-between text-sm">
              <span>Shipping Estimate:</span>
              <span>Free Shipping</span>
            </div>
          </div>
          <hr className="my-4 border-t" />
          <div className="mb-4">
            <div className="flex justify-between text-sm">
              <span>Tax Estimate:</span>
              <span>${calculateTaxEstimate()}</span>{" "}
            </div>
          </div>
          <hr className="my-4 border-t" />
          <div className="mb-4">
            <div className="flex justify-between text-lg font-semibold text-black">
              <span>Order Total:</span>
              <span>${calculateOrderTotal()}</span>{" "}
            </div>
          </div>

          <button
            onClick={() => alert("Redirect to Checkout")}
            className="bg-indigo-600 text-white px-2 py-2 rounded-md h-12 w-full mt-2 hover:bg-indigo-700"
          >
            Checkout
          </button>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Promo Code
          </label>
          <div className="flex">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="mt-1 p-2 border rounded"
            />
            <button
              onClick={applyPromoCode}
              className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Apply Promo Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
