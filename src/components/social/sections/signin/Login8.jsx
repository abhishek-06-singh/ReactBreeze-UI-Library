import React, { useState } from "react";
import googleIcon from "../../assets/google.png";
import logo from "../../assets/appLogowhite.png";
const Login8 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
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
      case "email":
        setErrors({
          ...errors,
          email: validateEmail(value),
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

  const validatePassword = (password) => {
    return password.length >= 6 ? "" : "Password must be at least 6 characters";
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

      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="mb-6 text-end ">
            <img src={logo} alt="Logo" className="mx-auto h-16 justify-end" />
          </div>

          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-sm font-bold mb-2"
              >
                Email Address/Username
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border p-2 rounded-lg h-12 ${
                  errors.email ? "border-red-200" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-300 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white text-sm font-bold mb-2"
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

            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-2 hover:bg-indigo-700 rounded-lg h-12"
              >
                Log In
              </button>
            </div>

            <div className="text-center mb-4">
              <span className="text-white">or</span>
            </div>

            <button
              type="button"
              className="w-3/4 bg-gray-200 text-black p-2 hover:bg-orange-200 hover:text-black flex items-center justify-center rounded-3xl h-12 ml-14"
            >
              <img src={googleIcon} alt="Google Icon" className="h-6 mr-2" />
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login8;
