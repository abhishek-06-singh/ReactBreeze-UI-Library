import React, { useState } from "react";
import {
  PlusSvgIcon,
  ShareSvgIcon,
  PrintSvgIcon,
  DownloadSvgIcon,
  CopySvgIcon,
} from "../../../../subcomponent/PreviewCode/svg";

const FlyBtn2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="flex items-center justify-center h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div>
        <div
          className={`absolute bottom-0 right-0 mb-6 mr-6 group ${
            isHovered ? "hovered" : ""
          }`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <button
            type="button"
            data-dial-toggle="speed-dial-menu-default"
            aria-controls="speed-dial-menu-default"
            aria-expanded="false"
            className="flex items-center justify-center text-white bg-indigo-600 rounded w-14 h-14 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none dark:focus:ring-indigo-800"
          >
            <PlusSvgIcon />
            <span className="sr-only">Open actions menu</span>
          </button>
          <div
            className={`hovered-buttons flex-col mb-8 ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } transform transition-all duration-300 ease-in-out absolute bottom-16 right-0 space-y-2`}
          >
            <button className="flex items-center justify-center text-black bg-slate-50 rounded w-14 h-14 hover:bg-slate-300">
              <ShareSvgIcon />
            </button>
            <button className="flex items-center justify-center text-black bg-slate-50 rounded w-14 h-14 hover:bg-slate-300">
              <PrintSvgIcon />
            </button>
            <button className="flex items-center justify-center text-black bg-slate-50 rounded w-14 h-14 hover:bg-slate-300">
              <DownloadSvgIcon />
            </button>
            <button className="flex items-center justify-center text-black bg-slate-50 rounded w-14 h-14 hover:bg-slate-300">
              <CopySvgIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyBtn2;
