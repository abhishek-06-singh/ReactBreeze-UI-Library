import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import successTickAnimation from "../../assets/successtick.json";
import FlareBottom from "../../assets/flare.json";
const SuccessModal = ({ onClose }) => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: successTickAnimation,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-800 p-8 rounded-lg text-center">
        <div
          ref={animationContainerRef}
          className="h-44 mb-4 w-44 items-center justify-center ml-14"
        />
        <p className="text-gray-100">
          Congratulations! Item added to the cart.
        </p>
        <button
          onClick={onClose}
          className="mt-4 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Close
        </button>
        <div ref={FlareBottom} />
      </div>
    </div>
  );
};

export default SuccessModal;
