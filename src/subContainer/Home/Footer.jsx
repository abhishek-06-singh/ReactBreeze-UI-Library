import React, { useState } from "react";
import * as icons from "./icons";
import logoWhite from "../../components/social/assets/logofooter.png";
import { FaGithub } from "react-icons/fa";
const Footer = ({ contactDetail }) => {
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
    <footer
      id="contactUs"
      className="bg-gray-800 text-white py-12 rounded-t-lg"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full md:w-2/3 mb-8 ml-20">
          <h3 className="mb-4 text-lg">Stay in the Loop</h3>
          <p className="text-gray-300 mb-4">
            Be the first to hear about new classes and breaking news.
          </p>
          <div className="flex">
            <input
              className=" rounded-md border-white py-2 px-3 mr-2 w-max md:w-2/3"
              placeholder="Your Name"
              type="text"
            />
            <button className="bg-gray-400 text-white py-2 px-4 w-32 rounded-md">
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex  justify-center gap-4 w-full mb-8">
          <a
            href="https://www.facebook.com/abhishek999chauhan?mibextid=ZbWKwL"
            className="flex items-center mr-4 mb-4 hover:text-gray-300"
          >
            <span className="mr-2">{icons.FacebookIcon()}</span>
            <span>Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/__avi__rajput___/"
            className="flex items-center mr-4 mb-4 hover:text-gray-300"
          >
            <span className="mr-2">{icons.InstagramIcon()}</span>
            <span>Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-singh-chauhan-458522261/"
            className="flex items-center mr-4 mb-4 hover:text-gray-300"
          >
            <span className="mr-2">{icons.LinkIcon()}</span>
            <span>Linkedin</span>
          </a>
          <a
            href="https://github.com/abhishek-06-singh"
            className="flex items-center mr-4 mb-4 hover:text-gray-300"
          >
            <span className="mr-2 text-2xl">
              <FaGithub />
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
              <span className="mr-2">{icons.MailIcon()}</span>
              <p>Email</p>
            </li>
            <li
              className="flex items-center cursor-pointer"
              onClick={() =>
                (window.location.href = `https://wa.me/7000201383`)
              }
            >
              <span className="mr-2">{icons.WhatsAppIcon()}</span>
              <p>Whatsapp</p>
            </li>
          </ul>
        </div>

        <div className="w-5/6 bg-gray-700 p-4 pl-16 pr-16 rounded flex items-center justify-between ml-20 mr-20">
          <div>
            <img src={logoWhite} alt="Logo" className="w-40" />
          </div>
          <ul className="flex items-center gap-8 ml-auto">
            <a href="./aboutAbhishek">
              <li className="cursor-pointer hover:text-gray-300">
                <span>About me</span>
              </li>
            </a>

            <li
              className="cursor-pointer hover:text-gray-300"
              title="Coming Soon"
            >
              <span>Careers</span>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <span>Terms And Conditions</span>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <span>Privacy Policy</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
