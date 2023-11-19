import React, { useState } from "react";
import { FaComment, FaImage } from "react-icons/fa";

const CommentsModal = () => {
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handlePostComment = () => {
    const newComment = {
      user: {
        name: "Hasbulla",
        avatar:
          "https://yt3.googleusercontent.com/XtP3zfVVv5IilGdFpFsgPLMef9e4EERd0O3GZz8S-QcWKQOPyoSm_3ccvQ4xvVSjtnnfwC5ENA=s900-c-k-c0x00ffffff-no-rj",
      },
      content: reply,
      type: uploadedImage ? "image" : "text",
      image: uploadedImage,
    };

    setComments([...comments, newComment]);
    setReply("");
    setUploadedImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUploadedImage(URL.createObjectURL(file));
  };

  const lineStyle = {
    position: "absolute",
    borderLeft: "1px solid #808080",
    top: "14%",
    height: "64%",
    left: "6%",
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="bg-black p-4 rounded-xl w-5/12 grid h-3/4 grid-rows-[auto,1fr,auto] gap-4 border-gray-600 relative ">
        <div className="flex items-center space-x-4 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Conor_McGregor_2018.jpg/640px-Conor_McGregor_2018.jpg"
            alt="User Avatar"
            className="w-12 h-12 rounded-full relative"
          />
          <div>
            <span className="font-bold text-white">Username</span>
          </div>
        </div>

        <div style={lineStyle}></div>

        <div className="col-span-2 text-white pl-10 pr-8 overflow-auto max-h-2/4 scrollbar-hide">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Proin sodales libero nec neque pharetra, eu egestas elit
            dignissim. Duis tincidunt, felis et dapibus pulvinar, dolor justo
            consequat elit, ac lobortis odio velit at urna.
          </p>
          <div className="flex items-start space-x-4 flex-col scrollbar-hide">
            <img
              src="https://i2-prod.manchestereveningnews.co.uk/incoming/article26729100.ece/ALTERNATES/s1200c/0_GettyImages-1399774324.jpg"
              alt="User Avatar"
              className="w-30 h-40 rounded mt-4 mb-3 overflow-hidden"
            />

            <img
              src="https://cdn.vox-cdn.com/thumbor/uKpNAq3dNpcLjc6KMyqDcljlbaY=/0x0:4314x2877/1200x800/filters:focal(1942x471:2632x1161)/cdn.vox-cdn.com/uploads/chorus_image/image/72804547/1617831257.0.jpg"
              alt="User Avatar"
              className="w-30 h-40 rounded mt-4 mb-3 overflow-hidden"
            />
          </div>

          <div className="overflow-auto max-h-40 scrollbar-hide bg-zinc-900 mt-3 whitespace-normal">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 mt-4 ml-2 border-b border-gray-600 pb-4 relative"
              >
                <img
                  src={comment.user.avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div>
                    <span className="font-bold text-white">
                      {comment.user.name}
                    </span>
                  </div>
                  <p>{comment.content}</p>
                  {comment.type === "image" && (
                    <img
                      src={comment.image}
                      alt="Comment Image"
                      className="w-30 h-40 rounded mt-3"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <img
            src="https://yt3.googleusercontent.com/XtP3zfVVv5IilGdFpFsgPLMef9e4EERd0O3GZz8S-QcWKQOPyoSm_3ccvQ4xvVSjtnnfwC5ENA=s900-c-k-c0x00ffffff-no-rj"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <input
            type="text"
            placeholder="Write a comment..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="border border-black p-2 flex-grow rounded text-white bg-black w-80"
          />
          <div className="p-2 rounded text-white">
            <label htmlFor="image-upload">
              <FaImage />
            </label>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button
            onClick={handlePostComment}
            className="bg-gray-500 text-white px-2 py-2 rounded-xl w-24"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
