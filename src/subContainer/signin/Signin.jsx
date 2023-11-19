import React, { useEffect, useState } from "react";

import Signin from "../../components/social/sections/signin/Login";
import Signin2 from "../../components/social/sections/signin/Login2";
import Signin3 from "../../components/social/sections/signin/Login3";
import Signin4 from "../../components/social/sections/signin/Login4";
import Signin5 from "../../components/social/sections/signin/Login5";
import Signin6 from "../../components/social/sections/signin/Login6";
import Signin7 from "../../components/social/sections/signin/Login7";
import Signin8 from "../../components/social/sections/signin/Login8";

import ReactSignin from "!!raw-loader!../../components/social/sections/signin/Login";
import ReactSignin2 from "!!raw-loader!../../components/social/sections/signin/Login2";
import ReactSignin3 from "!!raw-loader!../../components/social/sections/signin/Login3";
import ReactSignin4 from "!!raw-loader!../../components/social/sections/signin/Login4";
import ReactSignin5 from "!!raw-loader!../../components/social/sections/signin/Login5";
import ReactSignin6 from "!!raw-loader!../../components/social/sections/signin/Login6";
import ReactSignin7 from "!!raw-loader!../../components/social/sections/signin/Login7";
import ReactSignin8 from "!!raw-loader!../../components/social/sections/signin/Login8";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Signin,
    rawString_React: ReactSignin,
  },
  {
    id: 2,
    component: Signin2,
    rawString_React: ReactSignin2,
  },
  {
    id: 3,
    component: Signin3,
    rawString_React: ReactSignin3,
  },
  {
    id: 4,
    component: Signin4,
    rawString_React: ReactSignin4,
  },
  {
    id: 5,
    component: Signin5,
    rawString_React: ReactSignin5,
  },
  {
    id: 6,
    component: Signin6,
    rawString_React: ReactSignin6,
  },
  {
    id: 7,
    component: Signin7,
    rawString_React: ReactSignin7,
  },
  {
    id: 8,
    component: Signin8,
    rawString_React: ReactSignin8,
  },
];

const Signins = () => {
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

export default Signins;
