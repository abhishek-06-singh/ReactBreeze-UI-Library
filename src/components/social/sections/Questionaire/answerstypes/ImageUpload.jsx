import React, { useState } from "react";
import { capitalizeString } from "../StringOpration/capitalizeString";

const ImageUpload = ({ data, handleImageUpload, questionId, answer }) => {
  const [images, setImages] = useState(
    (answer && answer[questionId]?.answer) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const newImages = [...images];
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newImages.push({ id: Date.now(), file, url: reader.result });
        setImages([...newImages]);
        handleImageUpload(newImages, questionId);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (id) => {
    const newImages = images.filter((img) => img.id !== id);
    setImages([...newImages]);
    handleImageUpload(newImages, questionId);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <label>{capitalizeString(data?.questionText)}</label>

      <div className="flex mt-2">
        {images.slice(0, 2).map((img) => (
          <div key={img.id} className="mr-2">
            <img
              src={img.url}
              alt="Uploaded"
              className="w-24  h-24 cursor-pointer"
              onClick={() => openModal(img)}
            />
          </div>
        ))}

        {images.length >= 3 && (
          <div className="mr-2">
            <div
              className="w-24 h-24 bg-gray-300 flex justify-center items-center cursor-pointer"
              onClick={() => openModal()}
            >
              +{images.length - 2}
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-2xl overflow-y-auto">
            {selectedImage ? (
              <div className="flex items-center justify-between mb-4">
                <img
                  src={selectedImage.url}
                  alt="Selected"
                  className="w-24 h-24 cursor-pointer"
                  onClick={() => closeModal()}
                />
                <button
                  onClick={() => {
                    handleRemoveImage(selectedImage.id);
                    closeModal();
                  }}
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {images.map((img) => (
                  <div key={img.id}>
                    <img
                      src={img.url}
                      alt="Uploaded"
                      className="w-24 h-24 cursor-pointer"
                      onClick={() => openModal(img)}
                    />
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={() => closeModal()}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-2"
        multiple
      />
    </div>
  );
};

export default ImageUpload;
