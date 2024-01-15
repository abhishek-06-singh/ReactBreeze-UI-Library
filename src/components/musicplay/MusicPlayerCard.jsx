import React from "react";
import { FaHeart, FaPlay, FaEllipsisH } from "react-icons/fa";

const MusicPlayerCard = () => {
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
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-gray-900 shadow-lg rounded p-3 overflow-hidden"
            >
              <div className="group relative">
                <img
                  className="w-full h-72 object-cover object-bottom rounded"
                  src={card.imageUrl}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <FaHeart />
                  </button>

                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <FaPlay />
                  </button>

                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg">{card.title}</h3>
                <p className="text-gray-400">{card.artist}</p>
                <div className="bg-gray-600 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-full"></div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default MusicPlayerCard;
