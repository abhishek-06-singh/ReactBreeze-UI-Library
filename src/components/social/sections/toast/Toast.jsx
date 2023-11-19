import React from "react";
import { CrossSvgIconWhite } from "../../../../subcomponent/PreviewCode/svg";

const Toast = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div
        id="toast-message-cta"
        className="w-full max-w-md p-6 text-gray-700 bg-white rounded-lg shadow  "
        role="alert"
      >
        <div className="flex">
          <img
            className="w-12 h-10 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jese Leos image"
          />
          <div className="ml-4 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900">
              Jese Leos
            </span>
            <div className="text-sm font-normal mb-4">
              Hi Neil, What's your thoughts about that? 😊 Can you please share?
            </div>
            <a
              href="#"
              className="inline-flex px-3 py-1.5 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 "
            >
              Reply
            </a>
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-gray-100 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
            data-dismiss-target="#toast-message-cta"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <CrossSvgIconWhite />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
