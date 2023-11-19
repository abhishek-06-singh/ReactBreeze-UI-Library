import React, { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { CrossSvgIconWhite } from "../../../../subcomponent/PreviewCode/svg";
const ProductCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const product = {
    img: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wellness shots smoothie",
    description:
      "Here are the biggest smoothie product Wellness shots smoothie",
    fulldescription:
      "Here are the biggest smoothie product Wellness shots smoothie. Dive into a world of delightful flavors and nourishing ingredients. Our Wellness Shots Smoothie is a perfect blend of fresh fruits, vibrant greens, and superfoods that not only tantalize your taste buds but also provide a boost of essential nutrients. Whether you're a fitness enthusiast or simply looking for a delicious and nutritious treat, this smoothie is designed to satisfy your cravings and support your well-being. Indulge in a wholesome experience with every sip, and elevate your wellness journey with our handcrafted Wellness Shots Smoothie.Don't miss out on the opportunity to treat yourself to a refreshing and revitalizing beverage that not only tastes amazing but also contributes to your overall health and vitality. Read more about the ingredients and benefits below.",
    price: 400,
    available: " In Stock",
    rating: 4,
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img className="rounded-t-lg" src={product.img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {product.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300"
          >
            Read more
            <FaArrowRight className="ms-2" />
          </button>
        </div>

        {modalIsOpen && (
          <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-black bg-opacity-10">
            <div className="relative max-w-lg mx-auto p-4 bg-white rounded-xl shadow-lg">
              <div
                className="absolute top-1 right-1 cursor-pointer bg-slate-100 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 z-40"
                onClick={closeModal}
              >
                <CrossSvgIconWhite />
              </div>
              <img
                className="rounded-t-lg w-full mb-4 p-0"
                src={product.img}
                alt=""
              />
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                {product.title}
              </h5>
              <div className="flex items-center mb-4">
                {Array.from({ length: product.rating }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-2xl" />
                ))}
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-400 overflow-y-auto h-40 scrollbar-hide text-sm">
                {product.fulldescription}
              </p>
              <div className="text-green-500 text-md font-medium">{`$${product.price}`}</div>
              <div className="text-gray-700">{product.available}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
