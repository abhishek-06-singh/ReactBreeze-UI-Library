import React from "react";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";
import { CrossSvgIconWhite } from "../../../../subcomponent/PreviewCode/svg";

const BookingDetails = () => {
  const BookingProduct = {
    name: "Wine Tasting",
    price: 60.0,
    date: "09/11/23",
    time: "23:11 PM",
    BookingId: "#240_JHN6",
    image:
      "https://images.unsplash.com/photo-1567440785091-326e96c429ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="bg-white pl-3  pb-3 rounded-xl shadow-md flex flex-col w-2/6 relative">
        {/* <div className="ml-auto cursor-pointer bg-slate-100 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 z-50">
          <CrossSvgIconWhite />
        </div> */}
        <div className="flex items-center mb-4">
          <img
            src={BookingProduct.image}
            alt={BookingProduct.name}
            className="mr-4 rounded-lg w-28 max-h-24 bg-cover "
          />

          <div className="ml-4">
            <h2 className="text-xl font-bold mb-2 mt-2">
              {BookingProduct.name}
            </h2>
            <p className="mb-1 text-md font-bold text-indigo-800">
              {BookingProduct.BookingId}
            </p>
            <p className="mb-1 text-md">
              {BookingProduct.date + " " + BookingProduct.time}
            </p>
            <p className="mb-1 text-lg text-green-500">
              {"$" + " " + BookingProduct.price}
            </p>
          </div>
        </div>

        <div className="flex mt-auto justify-around">
          <button className="flex items-center px-4 py-2 bg-red-400 text-white w-48 text-center rounded-full mr-2 border-red-600 border-opacity-50 transition duration-300 hover:opacity-80">
            <AiOutlineClose className="mr-2 ml-3" />
            Cancel Booking
          </button>
          <button className="flex items-center px-5 py-2 bg-indigo-700 w-48 text-white rounded-full transition duration-300 hover:opacity-80">
            <AiOutlineEye className="mr-2 ml-3" />
            View Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
