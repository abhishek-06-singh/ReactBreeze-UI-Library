import React from "react";
import {
  MessageNotificationSvgIcon,
  CrossSvgIcon,
} from "../../../../subcomponent/PreviewCode/svg";

const Toast3 = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div
        className="w-full max-w-md p-6 text-gray-900 bg-white rounded-lg shadow "
        role="alert"
      >
        <div className="flex items-center mb-3">
          <span className="mb-1 text-sm font-semibold text-gray-900 ">
            New notification
          </span>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 "
            data-dismiss-target="#toast-notification"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <CrossSvgIcon />
          </button>
        </div>
        <div className="flex items-center">
          <div className="relative inline-block shrink-0">
            <img
              className="w-16 h-16 rounded-full"
              src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Jese Leos image"
            />
            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full">
              <MessageNotificationSvgIcon />
              <span className="sr-only">Message icon</span>
            </span>
          </div>
          <div className="ml-4 text-base font-normal">
            <div className="text-base font-semibold text-gray-900 ">
              Bonnie Green
            </div>
            <div className="text-base font-normal">commented on your photo</div>
            <span className="text-sm font-medium text-indigo-600 ">
              a few seconds ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast3;
