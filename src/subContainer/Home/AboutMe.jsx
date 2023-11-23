import React, { useState } from "react";
import { FaStar, FaEdit, FaEye, FaTimes, FaMapMarkerAlt } from "react-icons/fa";

import { IoMdPeople } from "react-icons/io";
import { AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai";
import { Fade } from "react-reveal";
// import ScrollAnimation from "react-animate-on-scroll";
const profileData = {
  name: "Abhishek Singh Chauhan",
  bio: "Hey there! 👋 I'm Abhishek Singh Chauhan, the creative mind behind React Breeze, and I'm on a mission to shape the digital world with innovative frontend solutions using React. Let's build something extraordinary! 💻✨",
  status: "Pro",
  followers: 182,
  following: 28,
  posts: 42,
  online: true,
  isFollowing: false,
};

const AboutMe = () => {
  const [isFollowing, setIsFollowing] = useState(profileData.isFollowing);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditPhoto = () => {
    // Implement your logic for handling photo edit here
    console.log("Editing photo...");
  };

  const handleViewPhoto = () => {
    openModal();
  };

  return (
    <div
      className="flex flex-col p-5 md:p-16 lg:p-20 justify-center h-full"
      style={{
        backgroundImage: 'url("https://tailwindui.com/img/beams-home@95.jpg")',
      }}
    >
      <div className="bg-gray-800 shadow rounded overflow-auto scrollbar-hide mb-10">
        <div className="relative">
          <div className="cursor-pointer" onClick={toggleDropdown}>
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center"
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
              alt=""
            />
            <div
              className={`absolute right-0 top-0 p-2 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <ul className="bg-gray-800 border rounded shadow-md mt-2">
                <li
                  className="flex items-center px-4 py-2 cursor-pointer"
                  onClick={handleViewPhoto}
                >
                  <FaEye className="mr-2" /> View Photo
                </li>
              </ul>
            </div>
          </div>
          <div className=" cursor-pointer inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-gray-800 hover:scale-125 transition-transform duration-500 ease-in-out">
            <img
              className="w-full h-full overflow-hidden object-cover rounded"
              src="https://media.licdn.com/dms/image/D4D03AQHgTz-1IUBiBQ/profile-displayphoto-shrink_800_800/0/1700159846965?e=1706140800&v=beta&t=rwSju0b-VVJ77KNpYMq81Lm_VooxhEFkNwuevpIFfTs"
              alt=""
            />
          </div>
        </div>
        <div className="px-5 xl:px-10 pb-10">
          <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5 mb-5"></div>
          <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
            <div className="xl:pr-16 w-full xl:w-2/3">
              <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-100 font-medium tracking-normal">
                  {profileData.name}
                </h2>
              </div>
              <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-100 leading-5">
                {profileData.bio}
              </p>
            </div>

            <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
              <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0"></div>
              <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-gray-100 px-3 md:px-6 py-2 text-sm">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 shadow rounded-2xl overflow-auto scrollbar-hide p-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 pr-4">
          <h2 className="text-2xl font-bold text-gray-50 text-start">
            About me
          </h2>

          <Fade left cascade>
            <p className="text-gray-100 mt-2 text-lg">
              Hey there! I'm Abhishek Singh Chauhan, the proud developer behind
              React Breeze, crafting beautiful and functional UI components. ✨
              I embarked on my coding journey during my civil engineering days
              at Gyan Ganga Institute of Technology and Sciences. Despite my
              engineering roots, I discovered a profound passion for
              programming, especially in the captivating world of React. ✨ Over
              the past year, I delved into self-learning, honing my skills as a
              frontend React developer. The journey has been a rollercoaster of
              challenges and triumphs, fueled by curiosity and a relentless
              pursuit of excellence. Now, as a React developer at Oyelabs IT
              Services, I thrive on turning innovative ideas into reality. My
              work involves creating seamless, user-centric experiences, and
              every project is an opportunity to push the boundaries of what's
              possible. Join me in the exciting realm of web development, where
              each line of code tells a story and every project is a canvas for
              creativity! Let's build something extraordinary together! ✨
            </p>
          </Fade>
        </div>

        <div className="flex-2 mt-4 md:mt-0">
          <img
            className="w-fit h-96 object-cover rounded"
            src="https://media.licdn.com/dms/image/D4D03AQGtGeoI2HlOsg/profile-displayphoto-shrink_400_400/0/1672082959946?e=1706140800&v=beta&t=9YfXoZPqtvePYl2XmllpAeA-pyYddSfklNue_YWie-8"
            alt="Image"
          />
        </div>
      </div>
      <div className="bg-black rounded overflow-auto scrollbar-hide mb-10 mt-10 flex flex-col md:flex-row p-10 md:p-2 bg-opacity-0">
        <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl p-6 w-96 mb-10 md:mb-0">
          <div className="border-b pb-6">
            <div className="text-center my-4">
              <img
                className="h-36 w-36 rounded-full border-4 border-indigo-300 mx-auto my-4 object-fill"
                src="https://media.licdn.com/dms/image/D4D0BAQGgzDkZMTPpdg/company-logo_200_200/0/1698163183808/oyelabs_logo?e=2147483647&v=beta&t=3PQNcvAyRA-rkuLeurDQ2k7hUzdkZFVno5SuMRZt8jM"
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-100">
                  React Developer
                </h3>
                <div className="inline-flex text-gray-100">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mr-1" />
                  Working as a React Developer since May 2023
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-2">
              <button className="flex-1 flex items-center rounded-full bg-indigo-600 text-gray-100 antialiased font-bold hover:bg-indigo-800 px-4 py-2">
                <AiOutlineUserAdd
                  className="h-5 w-5 mr-2"
                  style={{ verticalAlign: "middle" }}
                />{" "}
                visit
              </button>
              <button className="flex-1 flex items-center rounded-full border-2 border-gray-400 font-semibold text-gray-200 px-4 py-2">
                <AiOutlineMessage
                  className="h-5 w-5 mr-2"
                  style={{ verticalAlign: "middle" }}
                />{" "}
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl p-6 w-96">
          <div className="border-b pb-6">
            <div className="text-center my-4">
              <img
                className="h-36 w-36 rounded-full border-4 border-indigo-300 mx-auto my-4 object-fill"
                src="https://media.licdn.com/dms/image/C4D0BAQEXtEyC3p6mJQ/company-logo_200_200/0/1630454264847/gyan_ganga_institute_of_technology_sciences_logo?e=1708560000&v=beta&t=uJsb-dN0hh6nsmxc0HoTwORYkawoNLkcpwmuylI01ng"
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-100">
                  Bachelor of Engineering
                </h3>
                <div className="inline-flex text-gray-100">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mr-1" />
                  Completed my Bachelor of Engineering from GGITS Jabalpur, 2020
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-2">
              <button className="flex-1 flex items-center rounded-full bg-indigo-600 text-gray-100 antialiased font-bold hover:bg-indigo-800 px-4 py-2">
                <AiOutlineUserAdd
                  className="h-5 w-5 mr-2"
                  style={{ verticalAlign: "middle" }}
                />{" "}
                visit
              </button>
              <button className="flex-1 flex items-center rounded-full border-2 border-gray-400 font-semibold text-gray-100 px-4 py-2">
                <AiOutlineMessage
                  className="h-5 w-5 mr-2"
                  style={{ verticalAlign: "middle" }}
                />{" "}
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-end p-4 ">
          <div className="bg-gray-800 p-2 rounded shadow-lg ">
            <FaTimes
              className="text-gray-50 cursor-pointer absolute  right-7 text-lg"
              onClick={closeModal}
            />
            <img
              className="w-full h-full object-cover rounded"
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
