import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  darcula,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { PreviewSvgIcon, CodeSvgIcon, SlabSvgIcon } from "./svg";
import pretty from "pretty";
import "./tooltip.css";
const PreviewCodeSection = ({
  Component,
  rawString_VUE,
  rawString_React,
  rawString_HTML,
}) => {
  const location = useLocation();
  const [selectBtn, setSelectBtn] = useState("preview");
  const [selectLang, setSelectLang] = useState("react");

  const handleSelectBtn = (val) => {
    if (val) {
      setSelectBtn(val);
    }
  };

  const handleSelectLang = (e, option) => {
    console.log("handleSelectLang => val", e?.target.value);
    setSelectLang(e?.target.value);
  };

  const getCode = () => {
    if (selectLang === "react") {
      return rawString_React;
    } else if (selectLang === "vue") {
      return rawString_VUE;
    } else if (selectLang === "html") {
      return rawString_HTML;
    } else {
      return "Invalid Language select";
    }
  };
  const getSectionFromRoute = () => {
    const pathSegments = location.pathname.split("/");
    return pathSegments[pathSegments.length - 1];
  };
  const copyToClipboard = () => {
    const codeToCopy = getCode();
    navigator.clipboard.writeText(codeToCopy).then(
      function () {
        console.log("Code copied to clipboard successfully!");
        // You can add a visual indication or a toast message here
      },
      function (err) {
        console.error("Unable to copy code to clipboard", err);
      }
    );
  };
  const section = getSectionFromRoute();

  let heading = "";
  switch (section) {
    case "signup":
      heading = "Signup Components";
      break;
    case "signin":
      heading = "Login Components";
      break;
    case "comment":
      heading = "Comment Components";
      break;
    case "posts":
      heading = "Create post";
      break;
    case "image-Gallery":
      heading = "Gallery Components";
      break;
    case "users":
      heading = "User Indicator Components";
      break;
    case "forms":
      heading = "Forms Components";
      break;
    case "toast":
      heading = "Toasts";
      break;
    case "notifications":
      heading = "Notifications";
      break;
    case "fly-button":
      heading = "Fly Buttons";
      break;
    case "Questionaire":
      heading = "Questionaire";
      break;
    case "cards":
      heading = "Cards";
      break;
    default:
    case "add-address":
      heading = "Address Components";
      break;
    case "carts":
      heading = "Carts";
      break;
    case "userProfile":
      heading = "profile";
      break;
    case "application":
      heading = "Calenders";
      break;
    case "feed":
      heading = "Feeds";
      break;
    case "footer":
      heading = "Footers";
    case "musicplay":
      heading = "Music";
      break;
      heading = "Sections";
  }

  return (
    <div className="relative   mx-auto  p-5 w-full max-w-container px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div class="flex flex-col">
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-rose-600">
          {heading}
        </h1>
        <nav
          aria-label="Breadcrumbs"
          className="order-first flex space-x-2 text-sm font-semibold"
        >
          {location.pathname.split("/").map((segment, index, array) => (
            <React.Fragment key={segment}>
              {index > 0 && (
                <div aria-hidden="true" className="select-none text-slate-400">
                  /
                </div>
              )}
              <a
                className="text-slate-200 hover:text-slate-100"
                href={`/${array.slice(1, index + 1).join("/")}`}
              >
                {segment}
              </a>
            </React.Fragment>
          ))}
        </nav>
      </div>
      <div>
        <section id="component-b9bcab4538776a17fff93d18f82a8272">
          <div class="grid grid-cols-[1fr,auto] items-center">
            <div class="flex min-w-0">
              <h2 class="truncate text-base font-medium leading-7 text-slate-900"></h2>
              <p class="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-600 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-100 lg:block">
                React JS
              </p>
            </div>
            <div class="ml-6  flex items-center">
              <div
                class="flex space-x-1 rounded-lg bg-slate-700 p-0.5  shadow-md"
                role="tablist"
                aria-orientation="horizontal"
              >
                <button
                  class={`flex items-center rounded-md py-[0.4375rem]  transition ease-in-out delay-300 pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
                    selectBtn === "preview" ? `bg-rose-500 text-gray-100` : ""
                  }  shadow`}
                  id="headlessui-tabs-tab-21"
                  role="tab"
                  type="button"
                  aria-selected="true"
                  tabindex="0"
                  onClick={() => handleSelectBtn("preview")}
                  data-headlessui-state="selected"
                  aria-controls="headlessui-tabs-panel-23"
                >
                  <PreviewSvgIcon />
                  <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-100">
                    Preview
                  </span>
                </button>
                <button
                  class={`flex items-center rounded-md py-[0.4375rem] transition ease-in-out delay-300  pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
                    selectBtn === "code" ? `bg-gray-600` : ""
                  }  shadow`}
                  id="headlessui-tabs-tab-22"
                  role="tab"
                  type="button"
                  onClick={() => handleSelectBtn("code")}
                  aria-selected="false"
                  tabindex="-1"
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-24"
                >
                  <CodeSvgIcon />
                  <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-100">
                    Code
                  </span>
                </button>
              </div>
              <div class="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"></div>
              <div class="relative hidden sm:block"></div>
              <span className="tooltip" onClick={() => copyToClipboard()}>
                <SlabSvgIcon />
                <span className="tooltiptext">Copy Code</span>
              </span>
            </div>
            <div class="col-span-2 row-start-2  min-w-0 relative overflow-hidden rounded-3xl mt-8 mb-8 w-11/12 ml-16 shadow-md">
              {selectBtn === "preview" ? (
                <>
                  <Component />
                </>
              ) : (
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                  {getCode()}
                </SyntaxHighlighter>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreviewCodeSection;
