import React from "react";
import {
  FaRegHeart,
  FaRegComment,
  FaRetweet,
  FaRegBookmark,
  FaShare,
} from "react-icons/fa";
import testVideo from "../../assets/test.mp4";

const feedData = {
  username: "JohnDoe",
  profileImage:
    "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  postImage:
    "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  postVideo: testVideo,
  time: "2 hours ago",
  content:
    "I can remember taking my first pictures when I was seven years old. While on a family vacation, my parents bought me a miniature camera for a few dollars. It used tiny little film and took tiny little black and white pictures. ",

  replyCount: 5,
  likeCount: 356,
};

const FeedPost1 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 flex-col">
      <span className="w-2/5 mb-3 bg-gray-300 text-gray-300 h-0.5 flex-col"></span>
      <div className="max-w-lg bg-gray-50  p-4 mx-auto my-4 rounded-md relative">
        <div className="flex items-start space-x-3">
          <div className="relative">
            <img
              src={feedData.profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold">{feedData.username}</p>
            <p className="text-gray-500">{feedData.time}</p>
          </div>
        </div>
        <div className="text-black border-l-slate-400 border-l-2 ml-5 mt-1">
          <div className="overflow-y-auto scrollbar-hide h-24 ml-2">
            <p className="mt-4 ml-5">{feedData.content}</p>
          </div>

          <div className="h-96 overflow-y-auto scrollbar-hide ml-7">
            {feedData.postImage && (
              <img
                src={feedData.postImage}
                alt="Post"
                className="mt-4 rounded-md h-56"
              />
            )}
            {feedData.postVideo && (
              <video controls className="mt-4 rounded-md h-56">
                <source src={feedData.postVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="flex items-center justify-between mt-4 ml-7">
            <div className="flex items-center space-x-4">
              <FaRegHeart className="text-gray-700 cursor-pointer text-xl" />
              <FaRegComment className="text-gray-700 cursor-pointer text-xl" />
              <FaRetweet className="text-gray-700 cursor-pointer text-xl" />
              <FaShare className="text-gray-700 cursor-pointer text-xl" />
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <FaRegBookmark className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex items-start mt-2">
            <div className="w-0.5 h-full bg-gray-400 mx-2"></div>
            <p className="text-gray-500">{feedData.replyCount} replies</p>
            <div className="w-0.5 h-full bg-gray-400 mx-2"></div>
            <p className="text-gray-500">{feedData.likeCount} Likes</p>
          </div>
        </div>
      </div>
      <span className="w-2/5 mt-1 bg-gray-300 text-gray-300 h-0.5 flex-col"></span>
    </div>
  );
};

export default FeedPost1;
