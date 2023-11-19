import React from "react";
import { CrossSvgIcon } from "../../../../subcomponent/PreviewCode/svg";
const Toast2 = () => {
  return (
    <div className="flex items-center justify-center h-96  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div
        id="toast-message-cta"
        className="w-full max-w-md p-6 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400"
        role="alert"
      >
        <div className="flex">
          <img
            className="w-12 h-10 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jese Leos image"
          />
          <div className="ml-4 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              Jese Leos
            </span>
            <div className=" text-sm font-normal mb-4">
              Hi Neil, Whats your thoughts about that ? 😊 can you please share
              .
            </div>
            <a
              href="#"
              className="inline-flex px-3 py-1.5 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
            >
              Reply
            </a>
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-message-cta"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <CrossSvgIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast2;
