import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";

const Form4 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.firstName.trim()) {
      valid = false;
      newErrors.firstName = "First Name is required";
    } else {
      newErrors.firstName = "";
    }

    if (!formData.lastName.trim()) {
      valid = false;
      newErrors.lastName = "Last Name is required";
    } else {
      newErrors.lastName = "";
    }

    if (!formData.email.trim()) {
      valid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      newErrors.email = "Invalid email address";
    } else {
      newErrors.email = "";
    }

    if (!formData.phone.trim()) {
      valid = false;
      newErrors.phone = "Phone Number is required";
    } else {
      newErrors.phone = "";
    }

    if (!formData.message.trim()) {
      valid = false;
      newErrors.message = "Message is required";
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="flex h-screen  bg-black">
      <div className="w-1/2 p-10 pl-20 pr-20 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-purple-950 via-gray-900 to-black text-white">
        <h1 className="text-4xl font-bold mb-4 mt-36 ">Get in touch</h1>
        <p className="overflow-hidden max-h-[3em]">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>

        <div className="mt-16 flex gap-3">
          <FaUser />
          <p>545 Mavis Island</p>
          <p>Chicago, IL 99191</p>
        </div>

        <div className="mt-8 flex gap-3">
          <FaPhone />
          <p>+1 (555) 234-5678</p>
        </div>

        <div className="mt-8 flex gap-3">
          <FaEnvelope />
          <p>hello@example.com</p>
        </div>
      </div>

      <div className="w-1/2 p-20  shadow-lg bg-gray-800 text-white rounded-tl-3xl">
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                First Name
              </label>

              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`form-input py-2 px-3 w-full leading-5 rounded-md border ${
                  errors.firstName ? "border-red-400" : "border-gray-900"
                } transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-gray-700 text-white`}
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="mb-10 ">
              <label
                htmlFor="lastName"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Last Name
              </label>

              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`form-input py-2 px-3 w-full leading-5 rounded-md border ${
                  errors.lastName ? "border-red-400" : "border-gray-900"
                } transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-gray-700 text-white`}
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mb-10">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input py-2 px-3 w-full leading-5 rounded-md border ${
                errors.email ? "border-red-400" : "border-gray-900"
              } transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-gray-700 text-white`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input py-2 px-3 w-full leading-5 rounded-md border ${
                errors.phone ? "border-red-400" : "border-gray-900"
              } transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-gray-700 text-white`}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-input py-2 px-3 w-full leading-5 rounded-md border ${
                errors.message ? "border-red-400" : "border-gray-900"
              } transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-gray-700 text-white`}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline-blue active:bg-indigo-800 mt-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form4;
