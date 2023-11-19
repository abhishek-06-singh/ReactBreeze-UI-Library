import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import successTickAnimation from "../../assets/successtick.json";
import FlareBottom from "../../assets/flr.json";
import Failed from "../../assets/failed.json";
const SuccessModal = ({ onClose, isSuccess }) => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    const animationData = isSuccess ? successTickAnimation : Failed;

    const animation = lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, [isSuccess]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg text-center">
        <div ref={animationContainerRef} className="mx-auto h-44 mb-4 w-44" />
        <p className="text-gray-800">
          {isSuccess
            ? "Congratulations! Item added to the cart."
            : "Oops! Something went wrong. Please try again."}
        </p>
        <button
          onClick={onClose}
          className="mt-4 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
