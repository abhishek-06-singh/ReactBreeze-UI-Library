import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiArrowRight } from "react-icons/fi";

const minLength = 6;

const Lightlogin6 = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.usernameOrEmail) {
      toast("Please enter your username or email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.usernameOrEmail)) {
      toast("Please enter a valid email address");
      return;
    }

    if (!formData.password) {
      toast("Please enter your password");
      return;
    }

    if (formData.password.length < minLength) {
      toast(`Password must be at least ${minLength} characters long`);
      return;
    }

    toast.success("Login successful!");
  };

  return (
    <>
      <div
        className="h-screen flex flex-col items-center justify-center bg-slate-50 relative top-0"
        style={{ margin: 0, padding: 0 }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${"https://static.cdninstagram.com/rsrc.php/yC/r/jxB9GUOHTf2.webp"})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "110% auto",
          }}
        />
        <div className="p-4 rounded-md text-dark-text w-2/6 relative z-10 mt-36">
          <h2 className="text-lr mb-6 text-center font-medium">
            Log in with your Instagram account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <input
                type="text"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-200"
                placeholder="Username or email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-200"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white p-4 rounded-xl"
            >
              Log In
            </button>
          </form>
          <div className="flex items-center mb-1 mt-4">
            <span className="text-sm text-center font-medium">
              <a href="#" className="text-dark-link">
                Forgot Password?
              </a>
            </span>
          </div>
        </div>

        <div className="bg-emerald-100 p-4 rounded-xl text-dark-text w-1/4 relative z-10 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png"
                className="w-16 cursor-pointer"
                alt="Instagram"
              />
              <span className="text-center font-bold ml-6">
                Continue with Instagram
              </span>
            </div>
            <FiArrowRight className="text-2xl w-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightlogin6;
