import React from "react";

const ImageGallery2 = () => {
  return (
    <div className="relative dark:bg-gray-800 grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
      {/* First Column */}
      <div className="grid gap-4 relative">
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Second Column */}
      <div className="grid gap-4 relative">
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Third Column */}
      <div className="grid gap-4 relative">
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Fourth Column */}
      <div className="grid gap-4 relative">
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative group">
          <img
            className="dark:bg-gray-700 h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery2;
