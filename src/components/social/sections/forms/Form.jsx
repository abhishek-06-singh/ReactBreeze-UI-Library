import React, { useState } from "react";
import { FaUserCircle, FaPhoto, FaFileImage } from "react-icons/fa";

const Form = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profileUpdateData, setProfileUpdateData] = useState({
    username: "",
    about: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPhoto(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!profileUpdateData.username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!profileUpdateData.about.trim()) {
      validationErrors.about = "About is required";
    }
    if (!profileUpdateData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(profileUpdateData.email)
    ) {
      validationErrors.email = "Invalid email format";
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log("Profile Update Data:", profileUpdateData);

      setProfileUpdateData({
        username: "",
        about: "",
        email: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex bg-gray-100 p-8">
      <div className="absolute inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-indigo-100 to-white"></div>
      </div>

      <div className="flex flex-col mr-8 z-40">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile</h2>
        <p className="text-sm text-gray-600">
          This information will be displayed publicly, so be careful what you
          share.
        </p>
      </div>

      <div className="bg-white p-8 rounded-md shadow-md w-full pr-12 pl-12 ml-64 z-50">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center">
            <label htmlFor="profile-photo" className="cursor-pointer">
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Profile Preview"
                  className="h-20 w-20 rounded-full mb-2"
                />
              ) : (
                <FaUserCircle className="h-20 w-20 text-gray-300 mb-2" />
              )}
              <input
                id="profile-photo"
                name="profile-photo"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleProfilePhotoChange}
              />
            </label>
            <button
              type="button"
              onClick={() => document.getElementById("profile-photo").click()}
              className="ml-3 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Change Photo
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-10">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Username
              </label>
              <div className="flex items-center mt-1">
                <span className="text-gray-500 text-sm mr-3">
                  yourwebsite.com/
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className={`block w-full rounded-md border-gray-100 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-50 p-4 ${
                    errors.username ? "border-red-500" : ""
                  }`}
                  placeholder="john_doe"
                  value={profileUpdateData.username}
                  onChange={handleInputChange}
                />
              </div>
              {errors.username && (
                <p className="text-xs text-red-500">{errors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                About
              </label>
              <textarea
                id="about"
                name="about"
                rows={5}
                className={`block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 p-4 ${
                  errors.about ? "border-red-500" : ""
                }`}
                placeholder="Write a few sentences about yourself."
                value={profileUpdateData.about}
                onChange={handleInputChange}
              />
              {errors.about && (
                <p className="text-xs text-red-500">{errors.about}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-50 p-4 ${
                  errors.email ? "border-red-500" : ""
                }`}
                value={profileUpdateData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Cover Photo
              </label>
              <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4">
                {coverPhoto ? (
                  <img
                    src={coverPhoto}
                    alt="Cover Preview"
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <FaFileImage className="mx-auto h-12 w-12 text-gray-300" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload-cover"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload-cover"
                          name="file-upload-cover"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleCoverPhotoChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-6">
            <button
              type="button"
              className="text-sm font-semibold text-gray-900 mr-4 hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
