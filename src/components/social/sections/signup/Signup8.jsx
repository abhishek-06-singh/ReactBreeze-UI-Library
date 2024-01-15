import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import countryCodes from "./countryCodes.json";
import Flag from "react-country-flag";
import googleIcon from "../../assets/google.png";
import logo from "../../../../applogo.png";
const minLength = 6;

const Signup8 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: countryCodes[0].code,
    phoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "fullName":
        setErrors({
          ...errors,
          fullName: value.trim() !== "" ? "" : "Please enter your full name",
        });
        break;
      case "email":
        setErrors({
          ...errors,
          email: validateEmail(value),
        });
        break;
      case "phoneNumber":
        setErrors({
          ...errors,
          phoneNumber: validatePhoneNumber(value),
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: validatePassword(value),
        });
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email address";
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.length >= minLength
      ? ""
      : `Phone number must be at least ${minLength} digits`;
  };

  const validatePassword = (password) => {
    return password.length >= minLength
      ? ""
      : `Password must be at least ${minLength} characters long`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.keys(formData).every((field) => {
      return validateField(field, formData[field]) === "";
    });

    if (isFormValid) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="flex h-screen bg-slate-900">
      <div
        className="hidden lg:block w-1/2 bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80")',
        }}
      ></div>
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center mt-20">
        <div className="max-w-md w-full">
          <div className="mb-6 text-end">
            <img src={logo} alt="Logo" className="mx-auto h-16 justify-end" />
          </div>

          <h2 className="text-2xl font-semibold text-gray-100 text-center mb-6">
            Sign up for an account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-100 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg h-12 ${
                  errors.fullName ? "border-red-300" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-300 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-100 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg h-12 ${
                  errors.email ? "border-red-300" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-300 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 flex items-center">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={(e) => handleChange("countryCode", e.target.value)}
                className="p-2 rounded-lg w-2/4 border"
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
                className={`w-3/4 border p-2 rounded-lg ${
                  errors.phoneNumber ? "border-red-400" : ""
                } ml-2`}
                placeholder="Phone Number"
              />
              {errors.phoneNumber && (
                <p className="text-red-300 text-xs mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-100 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg h-12 ${
                  errors.password ? "border-red-300" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-300 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-2 hover:bg-indigo-700 rounded-lg h-12"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup8;
