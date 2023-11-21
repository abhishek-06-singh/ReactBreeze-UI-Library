import React from "react";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const userProfile = {
  imgSrc:
    "https://yt3.googleusercontent.com/XtP3zfVVv5IilGdFpFsgPLMef9e4EERd0O3GZz8S-QcWKQOPyoSm_3ccvQ4xvVSjtnnfwC5ENA=s900-c-k-c0x00ffffff-no-rj",
  name: "hasbulla",
  location: "New York, NY",
  followersCount: 12,
  following: [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/31.jpg",
    "https://randomuser.me/api/portraits/men/33.jpg",
    "https://randomuser.me/api/portraits/women/32.jpg",
    "https://randomuser.me/api/portraits/men/44.jpg",
    "https://randomuser.me/api/portraits/women/42.jpg",
  ],
};

const ProfileCard2 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      {/* Card start */}
      <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl p-6 w-96">
        <div className="border-b pb-6">
          <div className="text-center my-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4 text-indigo-100"
              src={userProfile.imgSrc}
              alt={userProfile.name}
            />
            <div className="py-1">
              <h3 className="font-bold text-2xl text-indigo-100">
                {userProfile.name}
              </h3>
              <div className="inline-flex text-gray-400">
                <FaMapMarkerAlt className="h-5 w-5 mr-1" />
                {userProfile.location}
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <button className="flex-1 flex items-center rounded-full bg-indigo-600 text-white antialiased font-bold hover:bg-indigo-800 px-4 py-2">
              <AiOutlineUserAdd
                className="h-5 w-5 mr-2"
                style={{ verticalAlign: "middle" }}
              />{" "}
              Follow
            </button>
            <button className="flex-1 flex items-center rounded-full border-2 border-gray-400 font-semibold px-4 py-2 text-indigo-100">
              <AiOutlineMessage
                className="h-5 w-5 mr-2"
                style={{ verticalAlign: "middle" }}
              />{" "}
              Message
            </button>
          </div>
        </div>
        <div className="py-4">
          <div className="flex gap-2 items-center text-gray-400 mb-4">
            <IoMdPeople className="h-6 w-6" />
            <span>
              <strong>{userProfile.followersCount}</strong> Followers you know
            </span>
          </div>
          <div className="flex">
            <div className="flex justify-end mr-2">
              {userProfile.following.map((follower, index) => (
                <img
                  key={index}
                  className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                  src={follower}
                  alt={`follower-${index}`}
                />
              ))}
              <span className="flex items-center justify-center bg-indigo-500 text-sm text-gray-100 font-semibold border-2 border-gray-200 rounded-full h-10 w-10">
                +999
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Card end */}
    </div>
  );
};

export default ProfileCard2;
