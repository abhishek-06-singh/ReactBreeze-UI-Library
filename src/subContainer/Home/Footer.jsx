import React, { useState } from "react";
import * as icons from "./icons";
import logoWhite from "../../components/social/assets/breeze.png";
import smileGif from "../../components/social/assets/smile.gif";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
const Footer = ({ contactDetail }) => {
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [message, changeMessage] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const resetForm = () => {
    changeName("");
    changeEmail("");
    changeMessage("");
  };

  const getFormData = () => ({
    name,
    email,
    message,
  });

  const handleClick = (id) => {
    if (id === "aboutUs") {
      // You can add navigation logic here
    }
    if (id) {
      const offHeight = document.getElementById(id).offsetTop;
      window.scrollTo({
        top: offHeight - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="contactUs"
      className="bg-gradient-to-br from-fuchsia-100 via-slate-50 to-blue-200 text-gray-800 py-12 rounded-t-lg z-50 border-t-slate-400 border-t-1"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full md:w-2/3 mb-8 ml-20">
          <h3 className="mb-4 text-lg">Stay in the Loop</h3>
          <p className="text-gray-700 mb-4">
            Be the first to hear about new classes and breaking news.
          </p>
          <div className="flex">
            <input
              className="rounded-md py-2 px-3 mr-2 w-max md:w-2/3 bg-gray-200"
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={(e) => changeName(e.target.value)}
            />
            <button
              className="bg-indigo-500 text-white py-2 px-4 w-32 rounded-md"
              onClick={openModal}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-4 w-full mb-8">
          <a
            href="https://www.facebook.com/abhishek999chauhan?mibextid=ZbWKwL"
            className="flex items-center mr-4 mb-4 hover:text-gray-300"
          >
            <span className="mr-2">
              <FaFacebook className="text-indigo-400 text-2xl" />
            </span>
            <span>Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/__avi__rajput___/"
            className="flex items-center mr-4 mb-4 hover:text-gray-300"
          >
            <span className="mr-2">
              <FaInstagram className="text-indigo-400 text-2xl" />
            </span>
            <span>Instagram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-singh-chauhan-458522261/"
            className="flex items-center mr-4 mb-4 hover:text-gray-300"
          >
            <span className="mr-2">
              <FaLinkedin className="text-indigo-400 text-2xl" />
            </span>
            <span>Linkedin</span>
          </a>

          <a
            href="https://github.com/abhishek-06-singh"
            className="flex items-center mr-4 mb-4 hover:text-gray-300"
          >
            <span className="mr-2 text-2xl">
              <FaGithub className="text-indigo-400 text-2xl" />
            </span>
            <span>Github</span>
          </a>
        </div>

        <div className="w-full mb-8">
          <ul className="flex justify-center gap-4">
            <li
              className="flex items-center cursor-pointer"
              onClick={() =>
                (window.location.href = `mailto:abhi7000201383@gmail.com`)
              }
            >
              <span className="mr-2">
                <AiOutlineMail className="text-indigo-400 text-2xl" />
              </span>
              <p>Email</p>
            </li>

            <li
              className="flex items-center cursor-pointer"
              onClick={() =>
                (window.location.href = `https://wa.me/7000201383`)
              }
            >
              <span className="mr-2">
                <AiOutlineWhatsApp className="text-indigo-400 text-2xl" />
              </span>
              <p>Whatsapp</p>
            </li>
          </ul>
        </div>

        <div className="w-5/6 bg-indigo-900 bg-opacity-20 text-gray-800 p-4 pl-16 pr-16 rounded flex items-center justify-between ml-20 mr-20">
          <div>
            <img src={logoWhite} alt="Logo" className="w-40" />
          </div>
          <ul className="flex items-center gap-8 ml-auto">
            <a href="./aboutAbhishek">
              <li className="cursor-pointer hover:text-gray-700">
                <span>About me</span>
              </li>
            </a>

            <li
              className="cursor-pointer hover:text-gray-700"
              title="Coming Soon"
            >
              <span>Careers</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              <span>Terms And Conditions</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              <span>Privacy Policy</span>
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-3xl z-10 max-w-md mx-auto">
            <div className="flex justify-end mb-4">
              <FaTimes
                className="text-pink-500 cursor-pointer hover:text-gray-700 transition duration-300"
                size={24}
                onClick={closeModal}
              />
            </div>
            <div className="text-center">
              <img
                src={smileGif}
                alt="Smile Gif"
                className="w-40 mx-auto mt-8 mb-4"
              />
              <p className="bg-gradient-to-br from-pink-600 to-sky-600 bg-clip-text text-transparent text-lg">
                For now, I am giving all the components for free, so enjoy and
                have a great time!
              </p>
              <p className="text-right mt-4 text-gray-500">~Abhishek</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
