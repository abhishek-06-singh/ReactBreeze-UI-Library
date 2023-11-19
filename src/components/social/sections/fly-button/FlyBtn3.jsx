import React, { useState } from "react";
import { UsersSvgIcon } from "../../../../subcomponent/PreviewCode/svg";

const FlyBtn3 = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [activeContact, setActiveContact] = useState(null);

  const handleButtonClick = () => {
    setIsContactVisible(!isContactVisible);
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
    // Add more contact objects as needed
  ];

  return (
    <div className="flex items-center justify-center h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div>
        <div className="absolute bottom-0 right-0 mb-6 mr-6 group">
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

          {isContactVisible && (
            <div className="transition-all duration-1000 ease-in-out absolute bottom-16 right-0 space-y-4 mb-10 ">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`transition-all duration-500 ease-in-out flex items-center justify-start bg-slate-50 rounded-xl w-72 h-28 hover:bg-gray-100 p-4  ${
                    activeContact !== null && activeContact !== contact.id
                      ? "filter blur-sm scale-90"
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
                  <div className="ml-10 flex flex-col">
                    <div className="flex items-center mb-2">
                      <span
                        className={`w-2 h-2 ${
                          contact.status === "Available"
                            ? "bg-green-400"
                            : "bg-red-500"
                        } rounded-full mr-2`}
                      ></span>
                      <p className="text-slate-700 text-xs">{contact.status}</p>
                    </div>
                    <p className="text-slate-800 font-bold">{contact.name}</p>
                    <p className="text-slate-700 text-sm">{contact.phone}</p>
                    <p className="text-indigo-600 text-sm ">{contact.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlyBtn3;
