import React, { useState, useRef } from "react";
import { FaImage, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CreatePostComponent4 = () => {
  const [postContent, setPostContent] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const containerRef = useRef(null);

  const handlePost = () => {
    console.log("Posted:", postContent, "Files:", uploadedFiles);
    setPostContent("");
    setUploadedFiles([]);
    // onClose();
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    console.log("Uploaded files:", files);

    setUploadedFiles((prevFiles) => [
      ...prevFiles,
      ...files.map((file) => ({
        url: URL.createObjectURL(file),
        id: Date.now(),
      })),
    ]);
  };

  const handleDelete = (id) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 200;
  };

  return (
    <div className="flex items-center justify-center h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="bg-white p-4 rounded-2xl max-h-3/4 w-5/12 relative overflow-hidden overflow-y-hidden scrollbar-hide">
        {uploadedFiles.length > 2 && (
          <>
            <button
              onClick={scrollLeft}
              className="text-gray-800 absolute left-10 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              className="text-gray-800 absolute right-5 transform translate-x-1/2 top-1/2 -translate-y-1/2"
            >
              <FaArrowRight />
            </button>
          </>
        )}

        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWKMzgUrBas6IPu2523Iu739YALMIDNKgJHucakPZrw-U9wxA5w3csom5nERiK6qHgBg&usqp=CAU"
            alt="User Avatar"
            className="w-11 h-11 rounded-full"
          />
          <div>
            <span className="font-bold text-gray-800">Username</span>
          </div>
        </div>

        <div className="text-gray-700 pl-8 pr-4">
          <input
            type="text"
            placeholder="Start the thread..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="border-0 p-2 outline-none bg-white text-gray-600 w-full"
          />
          {uploadedFiles.length > 0 && (
            <div
              className="mt-4 overflow-x-auto"
              ref={containerRef}
              style={{
                whiteSpace: "nowrap",
                overflowX: "hidden",
                transition: "transform 2s.5s ease",
              }}
            >
              {uploadedFiles.map((file) => (
                <div key={file.id} className="inline-block mr-2 relative">
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="absolute top-0 right-0 p-1 bg-pink-600 rounded-full text-white w-6 h-6 text-xs"
                  >
                    X
                  </button>
                  {file.url.startsWith("blob:") ? (
                    <img
                      src={file.url}
                      alt={`Uploaded ${file.id}`}
                      className="max-w-full h-32 object-cover rounded mr-8"
                    />
                  ) : (
                    <video
                      controls
                      className="max-w-full h-32 object-cover rounded"
                    >
                      <source src={file.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center mt-2">
            <label htmlFor="file-upload" className="cursor-pointer">
              <FaImage className="text-pink-600" />
              <input
                id="file-upload"
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-gray-600">Anyone can reply</span>
          <button
            onClick={handlePost}
            className="bg-pink-600 text-white px-2 py-2 rounded-xl w-40"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostComponent4;
