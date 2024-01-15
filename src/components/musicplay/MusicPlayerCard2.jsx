import React from "react";
import { FaHeart, FaPlay, FaPause, FaEllipsisH } from "react-icons/fa";

const MusicPlayerCard2 = () => {
  const cardData = [
    {
      title: "Epoch",
      artist: "Tycho",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
    },
  ];

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">
          Music Card
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-gray-900 shadow-lg rounded p-3 flex"
            >
              <div className="group relative flex-grow">
                <img
                  className="w-full h-full object-cover object-right rounded"
                  src={card.imageUrl}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900"></div>
              </div>
              <div className="flex flex-col justify-between p-10">
                <div>
                  <h3 className="text-white text-lg">{card.title}</h3>
                  <p className="text-gray-400">{card.artist}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-white">
                    <FaHeart />
                  </button>
                  <button className="text-white text-2xl">
                    <FaPlay />
                  </button>

                  <button className="text-white">
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default MusicPlayerCard2;
