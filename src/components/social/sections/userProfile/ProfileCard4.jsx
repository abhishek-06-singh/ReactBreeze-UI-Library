import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

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

const ProfileCard4 = () => {
  const [isFollowing, setIsFollowing] = useState(profileData.isFollowing);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-black px-20">
      <div className="bg-gray-700 shadow rounded">
        <div className="relative">
          <img
            className="h-56 shadow rounded-t w-full object-cover object-center"
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
            alt=""
          />
          <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white hover:scale-125 transition-transform duration-500 ease-in-out">
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
                <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-white font-medium tracking-normal">
                  {profileData.name}
                </h2>
                <div
                  className={`text-sm px-5 py-1 font-normal rounded-full ${
                    profileData.online
                      ? "bg-green-500 text-green-100"
                      : "bg-red-500 text-red-100"
                  }`}
                >
                  {profileData.online ? "Online" : "Offline"}
                </div>
              </div>
              <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-300 leading-5">
                {profileData.bio}
              </p>
            </div>
            <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
              <div className="mr-6 xl:mr-10">
                <h2 className="text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                  {profileData.followers}
                </h2>
                <p className="text-white text-sm xl:text-xl leading-5">
                  followers
                </p>
              </div>
              <div className="mr-6 xl:mr-10">
                <h2 className="text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                  {profileData.following}
                </h2>
                <p className="text-white text-sm xl:text-xl leading-5">
                  following
                </p>
              </div>
              <div>
                <h2 className="text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                  {profileData.posts}
                </h2>
                <p className="text-white text-sm xl:text-xl leading-5">posts</p>
              </div>
            </div>
            <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
              <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                <div
                  className={`rounded-full ${
                    profileData.online
                      ? "bg-green-500 text-green-100"
                      : "bg-red-500 text-red-100"
                  } text-sm px-6 py-2 flex justify-center items-center`}
                >
                  {profileData.online ? "Online" : "Offline"}
                </div>
                <button
                  onClick={toggleFollow}
                  className={`ml-5 rounded-full ${
                    isFollowing
                      ? "bg-gray-600 text-gray-100"
                      : "bg-indigo-500 text-white"
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
    </div>
  );
};

export default ProfileCard4;
