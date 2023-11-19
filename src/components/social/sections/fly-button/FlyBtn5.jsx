import React, { useState } from "react";
import { UsersSvgIcon } from "../../../../subcomponent/PreviewCode/svg";
import { FaPhone, FaEnvelope, FaTimes } from "react-icons/fa";

const FlyBtn5 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeContact, setActiveContact] = useState(null);

  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleHover = (contactId) => {
    setActiveContact(contactId);
  };

  const contacts = [
    {
      id: 1,
      avatar:
        "https://yt3.googleusercontent.com/XtP3zfVVv5IilGdFpFsgPLMef9e4EERd0O3GZz8S-QcWKQOPyoSm_3ccvQ4xvVSjtnnfwC5ENA=s900-c-k-c0x00ffffff-no-rj",
      status: "Available",
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
    },
    {
      id: 2,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8aRJwPbmJnEezckdYEzz0LQaRvYUnlFfJ9-sVjMI32y84jVZjlcpM1Lx7DjVTaLVk-g&usqp=CAU",
      status: "Unavailable",
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane@example.com",
    },
  ];

  return (
    <div className=" flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div>
        <div className={`absolute bottom-0 right-0 mb-6 mr-6 group`}>
          <button
            type="button"
            data-dial-toggle="speed-dial-menu-default"
            aria-controls="speed-dial-menu-default"
            aria-expanded="false"
            className="flex items-center justify-center text-white bg-indigo-600 rounded w-14 h-14 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none dark:focus:ring-indigo-800"
            onClick={handleButtonClick}
          >
            <UsersSvgIcon />
            <span className="sr-only">Open actions menu</span>
          </button>
        </div>
        {isDrawerOpen && (
          <div
            className={`drawer absolute bottom-0 right-0 p-4 bg-white w-96 h-screen overflow-y-auto scrollbar-hide transition-all duration-1000 ease-in-out`}
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={handleDrawerClose}
              >
                <FaTimes />
              </button>
            </div>
            <div className="mb-10">
              <h2 className="text-xl font-bold">Contact Details</h2>
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`transition-all duration-500 ease-in-out flex items-center justify-start bg-slate-100 rounded-xl w-full h-28 hover:bg-gray-200 p-4 mb-3 ${
                  activeContact !== null && activeContact !== contact.id
                    ? "filter scale-95 transition-all blur-sm duration-500 ease-in-out"
                    : ""
                }`}
                onMouseEnter={() => handleHover(contact.id)}
                onMouseLeave={() => handleHover(null)}
              >
                <div>
                  <img
                    src={contact.avatar}
                    alt={`Avatar ${contact.id}`}
                    className={`w-16 h-16 rounded-full border-4 ${
                      contact.status === "Available"
                        ? "border-green-400"
                        : "border-red-500"
                    }`}
                  />
                </div>
                <div className="ml-4 flex flex-col">
                  <p className="text-slate-800 font-bold">{contact.name}</p>
                  <p className="text-slate-700 text-sm">{contact.phone}</p>
                  <p className="text-indigo-600 text-sm ">{contact.email}</p>
                  <div className="flex mt-2">
                    <div className="flex items-center mr-4">
                      <FaPhone className="text-green-500 mr-2 cursor-pointer" />
                      <span className="text-green-500">Call</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <FaEnvelope className="text-blue-500 mr-2 cursor-pointer" />
                      <span className="text-blue-500">Email</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlyBtn5;
