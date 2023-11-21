import React, { useState } from "react";
import { FaStar, FaEdit, FaEye, FaTimes } from "react-icons/fa";

const profileData = {
  name: "Marshall Mathers",
  bio: "Hi, I am a direct response copywriter from the US. When you work with me, we have the same goal. Maximizing your ROI",
  status: "Pro",
  followers: 182,
  following: 28,
  posts: 42,
  online: true,
  isFollowing: false,
};

const ProfileCard3 = () => {
  const [isFollowing, setIsFollowing] = useState(profileData.isFollowing);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditPhoto = () => {
    // Implement your logic for handling photo edit here
    console.log("Editing photo...");
  };

  const handleViewPhoto = () => {
    openModal();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-slate-100 via-indigo-300 to-pink-300 px-20">
      <div className="bg-white shadow rounded">
        <div className="relative">
          <div className="cursor-pointer" onClick={toggleDropdown}>
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center"
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
              alt=""
            />
            <div
              className={`absolute right-0 top-0 p-2 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <ul className="bg-white border rounded shadow-md mt-2">
                <li
                  className="flex items-center px-4 py-2 cursor-pointer"
                  onClick={handleEditPhoto}
                >
                  <FaEdit className="mr-2" /> Edit Photo
                </li>
                <li
                  className="flex items-center px-4 py-2 cursor-pointer"
                  onClick={handleViewPhoto}
                >
                  <FaEye className="mr-2" /> View Photo
                </li>
              </ul>
            </div>
          </div>
          <div className=" cursor-pointer inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white hover:scale-125 transition-transform duration-500 ease-in-out">
            <img
              className="w-full h-full overflow-hidden object-cover rounded"
              src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="px-5 xl:px-10 pb-10">
          <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5 mb-5"></div>
          <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
            <div className="xl:pr-16 w-full xl:w-2/3">
              <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 font-medium tracking-normal">
                  {profileData.name}
                </h2>
                <div
                  className={`text-sm px-5 py-1 font-normal rounded-full ${
                    profileData.online
                      ? "bg-green-200 text-green-500"
                      : "bg-red-200 text-red-500"
                  }`}
                >
                  {profileData.online ? "Online" : "Offline"}
                </div>
              </div>
              <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 leading-5">
                {profileData.bio}
              </p>
            </div>
            <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
              <div className="mr-6 xl:mr-10">
                <h2 className="text-gray-600 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                  {profileData.followers}
                </h2>
                <p className="text-gray-800 text-sm xl:text-xl leading-5">
                  followers
                </p>
              </div>
              <div className="mr-6 xl:mr-10">
                <h2 className="text-gray-600 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                  {profileData.following}
                </h2>
                <p className="text-gray-800 text-sm xl:text-xl leading-5">
                  following
                </p>
              </div>
              <div>
                <h2 className="text-gray-600 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                  {profileData.posts}
                </h2>
                <p className="text-gray-800 text-sm xl:text-xl leading-5">
                  posts
                </p>
              </div>
            </div>
            <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
              <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                <div
                  className={`rounded-full ${
                    profileData.online
                      ? "bg-green-200 text-green-500"
                      : "bg-red-200 text-red-500"
                  } text-sm px-6 py-2 flex justify-center items-center`}
                >
                  {profileData.online ? "Online" : "Offline"}
                </div>
                <button
                  onClick={toggleFollow}
                  className={`ml-5 rounded-full ${
                    isFollowing
                      ? "bg-indigo-400 text-gray-100"
                      : "bg-indigo-200 text-indigo-500"
                  } text-sm px-6 py-2 flex justify-center items-center`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
              <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-end p-4 ">
          <div className="bg-white p-2 rounded shadow-lg ">
            <FaTimes
              className="text-gray-50 cursor-pointer absolute  right-7 text-lg"
              onClick={closeModal}
            />
            <img
              className="w-full h-full object-cover rounded"
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard3;
