import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import * as icons from "./icons";
import logo from "../../../../applogo.png";

const Footer2 = ({ contactDetail }) => {
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [message, changeMessage] = useState("");

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
    <div className="flex flex-col h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <footer
        id="contactUs"
        className="bg-white text-gray-900 py-12 rounded-t-lg bottom-0 mt-80"
      >
        <div className="container mx-auto flex flex-col items-center">
          <div className="w-full md:w-2/3 mb-8 ml-20">
            <h3 className="mb-4 text-lg">Stay in the Loop</h3>
            <p className="text-gray-800 mb-4">
              Be the first to hear about new classes and breaking news.
            </p>
            <div className="flex">
              <input
                className="rounded-md border-gray-600 py-2 px-3 mr-2 w-max md:w-2/3 bg-gray-200"
                placeholder="Your Name"
                type="text"
              />
              <button className="bg-indigo-600 text-white py-2 px-4 w-32 rounded-md">
                Sign Up
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-4 w-full mb-8">
            <a
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-600"
            >
              <span className="mr-2 text-indigo-500">
                <FaFacebook className="text-2xl " />
              </span>
              <span className="text-gray-800">Facebook</span>
            </a>

            <a href="/" className="flex items-center mr-4 mb-4 text-indigo-500">
              <span className="mr-2">
                <FaInstagram className="text-2xl " />
              </span>
              <span className="text-gray-800">Instagram</span>
            </a>

            <a
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-600 text-indigo-500"
            >
              <span className="mr-2">
                <FaLinkedin className="text-2xl " />
              </span>
              <span className="text-gray-800">Linkedin</span>
            </a>

            <a
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-600 text-indigo-500"
            >
              <span className="mr-2">
                <FaTwitter className="text-2xl " />
              </span>
              <span className="text-gray-800">Twitter</span>
            </a>

            <a
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-600 text-indigo-500"
            >
              <span className="mr-2">
                <FaYoutube className="text-2xl " />
              </span>
              <span className="text-gray-800">Youtube</span>
            </a>
          </div>

          <div className="w-full mb-8">
            <ul className="flex justify-center gap-4">
              <li className="flex items-center cursor-pointer">
                <span className="mr-2 ">
                  <FaEnvelope className="text-indigo-500 text-2xl" />
                </span>
                <p>{contactDetail?.contactEmail || ""}</p>
                <span>Email</span>
              </li>

              <li className="flex items-center cursor-pointer">
                <span className="mr-2">
                  <FaWhatsapp className="text-indigo-500 text-2xl" />
                </span>
                <p>{contactDetail?.contactPhone || ""}</p>
                <span>Whatsapp</span>
              </li>
            </ul>
          </div>
          <div className="bg-indigo-300 p-4 w-full rounded flex items-center justify-between pl-10 pr-10">
            <div>
              <img src={logo} alt="Logo" className="w-20" />
            </div>
            <ul className="flex items-center gap-8 ml-auto">
              <li className="cursor-pointer hover:text-gray-600">
                <span>About Us</span>
              </li>
              <li
                className="cursor-pointer hover:text-gray-600"
                title="Coming Soon"
              >
                <span>Careers</span>
              </li>
              <li className="cursor-pointer hover:text-gray-600">
                <span>Terms And Conditions</span>
              </li>
              <li className="cursor-pointer hover:text-gray-600">
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
