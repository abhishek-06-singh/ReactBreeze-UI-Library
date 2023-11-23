import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Notify2 = () => {
  const [show, setShow] = useState(true);

  const userNotification = {
    userName: "John Doe",
    message: "Hey, how are you?",
    userPhoto:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    notificationTime: "2 hours ago",
  };

  return (
    <div className="flex items-center justify-center h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div aria-live="assertive" className="w-full mr-10 absolute">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-gray-500">
                    {userNotification.notificationTime}
                  </p>
                  <button
                    type="button"
                    className="flex-shrink-0 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <AiOutlineCloseCircle
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-14 w-14 rounded-full"
                      src={userNotification.userPhoto}
                      alt={`${userNotification.userName}'s photo`}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {userNotification.userName} sent you a message
                    </p>
                    <p className="text-gray-500">{userNotification.message}</p>
                    <button
                      type="button"
                      className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Notify2;
