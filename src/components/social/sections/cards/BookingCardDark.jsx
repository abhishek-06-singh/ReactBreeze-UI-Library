import React, { useState } from "react";
import { CrossSvgIconWhite } from "../../../../subcomponent/PreviewCode/svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const BookingCardDark = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const defaultProduct = {
    name: "",
    price: 0.0,
    description: "",
    serviceIncluded: [],
    image: "",
  };

  const BookingProduct = {
    name: "Wine Tasting",
    price: 60.0,
    rating: 5.0,
    description:
      "Wine tasting in warehouse or at Villa, Wine tasting in warehouse or at Villa,Wine tasting in warehouse or at Villa,Wine tasting in warehouse or at Villa,Wine tasting in warehouse or at Villa,Wine tasting in warehouse or at Villa,Wine tasting in warehouse or at Villa,Wine tasting in warehouse or at Villa,",
    serviceIncluded: [
      "Wine",
      "cheese",
      "crackers and fruit",
      "Wine",
      "cheese",
      "crackers and fruit",
      "Wine",
      "cheese",
      "crackers and fruit",
    ],
    image:
      "https://images.unsplash.com/photo-1621644894301-cd6b2eaca610?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const product = BookingProduct || defaultProduct;

  const handleDateSelection = (date) => {
    console.log("Selected date:", date);
    setSelectedDateTime(date);
    setShowDatePicker(false);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const renderServiceIncludes = () => {
    if (showModal) {
      return product.serviceIncluded.slice(0, 3);
    } else if (product.serviceIncluded.length > 3) {
      return product.serviceIncluded.slice(0, 3);
    } else {
      return product.serviceIncluded;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="mx-auto mt-8 bg-slate-800 rounded-2xl overflow-auto scrollbar-hide shadow-lg w-4/12 h-5/6 ">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <button className="absolute top-0 right-0 bg-gray-700 text-gray-400 hover:bg-gray-800 hover:text-gray-500 px-1.5 py-1.5 rounded-2xl m-1">
            <CrossSvgIconWhite />
          </button>
        </div>
        <div className="p-4 h-1/2 pl-7 pr-7 ">
          <h2 className="text-2xl font-bold mb-1 text-white">{product.name}</h2>
          <p className="text-green-600 mb-3 font-medium">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-100 h-10 overflow-auto text-sm scrollbar-hide">
            {product.description}
          </p>
          <hr className="mt-2" />
          <div className="mt-2">
            <h3 className="font-bold mb-2 text-gray-100">Service Includes:</h3>
            <ul className="list-none flex">
              {renderServiceIncludes().map((item, index) => (
                <li
                  key={index}
                  className="bg-indigo-600 text-gray-50 rounded-md ml-2 p-1 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer mb-6"
                >
                  {item}
                </li>
              ))}
              {product.serviceIncluded.length > 3 && !showModal && (
                <li
                  className="bg-indigo-600 text-gray-50 rounded-md ml-2 p-1 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer mb-6"
                  onClick={handleToggleModal}
                >
                  ...
                </li>
              )}
            </ul>
          </div>
          <DatePicker
            placeholderText="Select Date & Time "
            selected={selectedDateTime}
            onChange={handleDateSelection}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="mt-1 bg-indigo-400 text-white font-semibold border-indigo-900 border-opacity-50 border border-solid rounded-3xl bg-opacity-25 py-3 w-96 text-center"
          />
          <button className="w-full mt-3 bg-indigo-600 text-white py-3 rounded-3xl hover:bg-indigo-500 ">
            Add to Cart
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-slate-50 bg-opacity-50 flex items-center justify-center">
          <div className="bg-slate-900 p-4 rounded-lg w-56 relative">
            <h3 className="font-bold mb-2 text-gray-100">Service Includes:</h3>
            <button
              className="absolute top-0 right-0 bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200 px-1.5 py-1.5 rounded-2xl m-1"
              onClick={handleToggleModal}
            >
              <CrossSvgIconWhite />
            </button>
            <ul className="items-center">
              {product.serviceIncluded.map((item, index) => (
                <li key={index} className="mb-2 text-slate-50">
                  {item} <hr className="mt-1" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCardDark;
