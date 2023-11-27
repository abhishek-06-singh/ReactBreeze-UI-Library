import React, { useState } from "react";
import * as icons from "./icons";
// import logoWhite from "../../assets/LogoWhite.svg";
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
    <div className=" flex flex-col h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <footer
        id="contactUs"
        className="bg-gray-800 text-white py-12 rounded-t-lg bottom-0 mt-72"
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
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-300"
            >
              <span className="mr-2">{icons.FacebookIcon()}</span>
              <span>Facebook</span>
            </a>

            <a
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-300"
            >
              <span className="mr-2">{icons.InstagramIcon()}</span>
              <span>Instagram</span>
            </a>
            <a
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-300"
            >
              <span className="mr-2">{icons.LinkIcon()}</span>
              <span>Linkedin</span>
            </a>
            <a
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-300"
            >
              <span className="mr-2">{icons.TwitterIcon()}</span>
              <span>Twitter</span>
            </a>
            <a
              href="/"
              className="flex items-center mr-4 mb-4 hover:text-gray-300"
            >
              <span className="mr-2">{icons.YouTubeIcon()}</span>
              <span>Youtube</span>
            </a>
          </div>

          <div className="w-full mb-8">
            <ul className="flex justify-center gap-4">
              <li className="flex items-center cursor-pointer">
                <span className="mr-2">{icons.MailIcon()}</span>
                <p>{contactDetail?.contactEmail || ""}</p>
                <span>Email</span>
              </li>
              <li className="flex items-center cursor-pointer">
                <span className="mr-2">{icons.WhatsAppIcon()}</span>
                <p>{contactDetail?.contactPhone || ""}</p>
                <span>Whatsapp</span>
              </li>
            </ul>
          </div>
          <div className=" bg-gray-700 p-4 w-full rounded flex items-center justify-between pl-10 pr-10">
            <div>
              <img
                src="https://oyelabs.com/wp-content/uploads/2023/01/Group-80-1.svg"
                alt="Logo"
                className="w-40"
              />
            </div>
            <ul className="flex items-center gap-8 ml-auto">
              <li className="cursor-pointer hover:text-gray-300">
                <span>About Us</span>
              </li>
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
    </div>
  );
};

export default Footer;
