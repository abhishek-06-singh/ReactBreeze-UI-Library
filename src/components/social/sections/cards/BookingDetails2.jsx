import React, { useState } from "react";
import { CrossSvgIconWhite } from "../../../../subcomponent/PreviewCode/svg";
import { AiOutlineStar, AiFillStar, AiOutlineEye } from "react-icons/ai";

const BookingDetails2 = () => {
  const [isRatingModalOpen, setRatingModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const BookingProduct = {
    name: "Wine Tasting",
    price: 60.0,
    date: "09/11/23",
    time: "23:11 PM",
    BookingId: "#240_JHN6",
    PromoDiscount: 0,
    Discount: 5.0,
    payment: "Successful",
    description:
      "Additional Service Details Description Additional Service Details Description",
    image:
      "https://images.unsplash.com/photo-1567440785091-326e96c429ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  const getPaymentStatusStyle = () => {
    switch (BookingProduct.payment) {
      case "Successful":
        return "bg-green-700";
      case "Failed":
        return "bg-red-700";
      case "Pending":
        return "bg-orange-700";
      default:
        return "bg-gray-700";
    }
  };

  const openRatingModal = () => {
    setRatingModalOpen(true);
  };

  const closeRatingModal = () => {
    setRatingModalOpen(false);
  };

  const RatingModal = () => {
    return (
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg w-1/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Rate our service</h2>
            <div className="cursor-pointer" onClick={closeRatingModal}>
              <CrossSvgIconWhite />
            </div>
          </div>

          <p className="mb-4 text-lg font-medium">
            😁 Did you enjoy our service?
          </p>

          <div className="flex ml-20">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="cursor-pointer text-5xl mx-1 text-center "
                onClick={() => setRating(star)}
              >
                {star <= rating ? (
                  <AiFillStar className="text-amber-500" />
                ) : (
                  <AiOutlineStar />
                )}
              </span>
            ))}
          </div>

          <p className="mt-6 mb-2">Do you have anything to add?</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-20 border border-gray-300 p-2 rounded-md bg-amber-500 bg-opacity-10"
            placeholder="Type your comments here..."
          />

          <button
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full transition duration-300 hover:opacity-80 w-full"
            onClick={closeRatingModal}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="relative w-1/3 h-4/6 bg-white pr-4 pt-4 pl-4 rounded-xl shadow-md overflow-hidden">
        {isRatingModalOpen && <RatingModal />}
        <div className="absolute top-1 right-1 cursor-pointer bg-slate-100 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 z-40">
          <CrossSvgIconWhite />
        </div>
        <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
        <div className="bg-indigo-50 p-3 rounded-lg shadow-md">
          <div className="flex mb-4">
            <img
              src={BookingProduct.image}
              alt={BookingProduct.name}
              className="mr-4 rounded-lg w-20 max-h-20 bg-cover"
            />
            <div>
              <h2 className="text-lg font-bold mb-1">{BookingProduct.name}</h2>
              <p className="text-green-600 mb-1 font-bold">
                ${BookingProduct.price}
              </p>
              <p className="text-indigo-900 mb-1">
                {BookingProduct.date} {BookingProduct.time}
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            {BookingProduct.description}
          </p>
          <div className="flex justify-between">
            <button
              className="flex items-center px-4 py-2 bg-indigo-600 text-white w-44 text-center rounded-full mr-2 border-indigo-600 border-opacity-50 transition duration-300 hover:opacity-80 z-10"
              onClick={openRatingModal}
            >
              <AiOutlineStar className="mr-2 ml-8" />
              Rate Us
            </button>
            <button className="flex items-center px-5 py-2 bg-indigo-700 w-44 text-white rounded-full transition duration-300 hover:opacity-80">
              <AiOutlineEye className="mr-2 ml-8" />
              View
            </button>
          </div>
        </div>

        <div className="mt-2 overflow-y-auto p-2 rounded-lg h-1/3 scrollbar-hide">
          <h2 className="text-xl font-bold mb-3">Amount Breakdown</h2>
          <div className="flex justify-between mb-4">
            <p>Price</p>
            <p className="text-green-600">${BookingProduct.price}</p>
          </div>
          <div className="flex justify-between mb-3">
            <p>Promo Discount</p>
            <p className="text-orange-500">${BookingProduct.PromoDiscount}</p>
          </div>
          <div className="flex justify-between mb-3">
            <p>Discount</p>
            <p className="text-red-500">${BookingProduct.Discount}</p>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex justify-between mb-4">
            <p className="font-bold">Grand Total</p>
            <p className="font-bold text-blue-700">
              ${BookingProduct.price - BookingProduct.Discount}
            </p>
          </div>
          <div
            className={`border-t border-gray-300 my-4 ${getPaymentStatusStyle()} p-2 rounded-md`}
          >
            {BookingProduct.payment === "Successful" && (
              <>
                <span className="text-white flex text-center ml-28">
                  Payment Successful! <AiOutlineStar className="ml-2 mt-1" />
                </span>
              </>
            )}
            {BookingProduct.payment === "Failed" && (
              <>
                <span className="text-white flex text-center ml-28">
                  Payment Failed! <AiOutlineEye className="ml-2 mt-1" />
                </span>
              </>
            )}
            {BookingProduct.payment === "Pending" && (
              <>
                <span className="text-white flex text-center ml-28">
                  Payment Pending! <AiOutlineEye className="ml-2 mt-1" />
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails2;
