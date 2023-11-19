import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiArrowUpRight } from "react-icons/fi";

import countryCodes from "./countryCodes.json";
import Flag from "react-country-flag";

const minLength = 6;

const Signup5 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: countryCodes[0].code,
    phoneNumber: "",
    password: "",
  });
  console.log("formData", formData);
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName) {
      toast.error("Please enter your full name");
      return;
    }

    if (!formData.email) {
      toast.error("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.phoneNumber) {
      toast.error("Please enter your phone number");
      return;
    }

    if (formData.phoneNumber.length < minLength) {
      toast.error(`Phone number must be at least ${minLength} digits`);
      return;
    }

    if (!formData.password) {
      toast.error("Please enter your password");
      return;
    }

    if (formData.password.length < minLength) {
      toast.error(`Password must be at least ${minLength} characters long`);
      return;
    }

    toast.success("Signup successful!");
  };

  return (
    <>
      <div
        className="h-screen flex flex-col items-center justify-center bg-slate-50  relative top-0"
        style={{
          margin: 0,
          padding: 0,
          backgroundImage: `url(${"https://static.cdninstagram.com/rsrc.php/yC/r/jxB9GUOHTf2.webp"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "110% auto",
        }}
      >
        <div className="bg-opacity-30 p-4 rounded-md text-black w-2/6 relative z-10 mt-40">
          <h2 className="text-lr mb-6 text-center font-semibold">
            Sign up for an account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={(e) => handleChange("countryCode", e.target.value)}
                className="p-4 rounded-xl bg-gray-200 w-2/4"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    <Flag code={country.flag} />
                    {`${country.code} (${country.name})`}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className="w-3/4 p-4 rounded-xl bg-gray-200 ml-2 text-black"
                placeholder="Phone Number"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="w-full p-4 rounded-xl bg-gray-200 text-black"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full p-4 rounded-xl bg-gray-200 text-black"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="w-full p-4 rounded-xl bg-gray-200 text-black"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-fuchsia-600 text-white p-4 rounded-xl"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="p-4 rounded-xl text-gray-300 w-1/4 relative z-10 mt-6 h-16 bg-fuchsia-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-center font-bold text-black">
                Already have an account?
                <a href="#" className="text-stone-500 ml-3">
                  Log in
                </a>
              </span>
            </div>
            <FiArrowUpRight className="text-2xl w-8 cursor-pointer text-fuchsia-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup5;
