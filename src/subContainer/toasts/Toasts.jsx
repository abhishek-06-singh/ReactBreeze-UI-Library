import React, { useEffect, useState } from "react";

import Toasts1 from "../../components/social/sections/toast/Toast";
import Toasts2 from "../../components/social/sections/toast/Toast2";
import Toasts3 from "../../components/social/sections/toast/Toast3";
import Toasts4 from "../../components/social/sections/toast/Toast4";
import ToastsReact1 from "!!raw-loader!../../components/social/sections/toast/Toast";
import ToastsReact2 from "!!raw-loader!../../components/social/sections/toast/Toast2";
import ToastsReact3 from "!!raw-loader!../../components/social/sections/toast/Toast3";
import ToastsReact4 from "!!raw-loader!../../components/social/sections/toast/Toast4";

import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Toasts1,
    rawString_React: ToastsReact1,
  },
  {
    id: 2,
    component: Toasts2,
    rawString_React: ToastsReact2,
  },
  {
    id: 3,
    component: Toasts3,
    rawString_React: ToastsReact3,
  },
  {
    id: 4,
    component: Toasts4,
    rawString_React: ToastsReact4,
  },
];

const Toasts = () => {
  return (
    <>
      {ComponentData.map((obj) => {
        return (
          <PreviewCodeSection
            key={obj?.id}
            Component={obj?.component}
            rawString_React={obj?.rawString_React}
          />
        );
      })}
    </>
  );
};

export default Toasts;
