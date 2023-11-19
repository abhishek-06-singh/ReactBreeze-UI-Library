import React, { useEffect, useState } from "react";

import Signup1 from "../../components/social/sections/signup/Signup";
import Signup2 from "../../components/social/sections/signup/Signup2";
import Signup3 from "../../components/social/sections/signup/Signup3";
import Signup4 from "../../components/social/sections/signup/Signup4";
import Signup5 from "../../components/social/sections/signup/Signup5";
import Signup6 from "../../components/social/sections/signup/Signup6";
import Signup7 from "../../components/social/sections/signup/Signup7";
import Signup8 from "../../components/social/sections/signup/Signup8";

import ReactSignup2 from "!!raw-loader!../../components/social/sections/signup/Signup2";
import ReactSignup1 from "!!raw-loader!../../components/social/sections/signup/Signup";
import ReactSignup3 from "!!raw-loader!../../components/social/sections/signup/Signup3";
import ReactSignup4 from "!!raw-loader!../../components/social/sections/signup/Signup4";
import ReactSignup5 from "!!raw-loader!../../components/social/sections/signup/Signup5";
import ReactSignup6 from "!!raw-loader!../../components/social/sections/signup/Signup6";
import ReactSignup7 from "!!raw-loader!../../components/social/sections/signup/Signup7";
import ReactSignup8 from "!!raw-loader!../../components/social/sections/signup/Signup8";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Signup1,
    rawString_React: ReactSignup1,
  },
  {
    id: 2,
    component: Signup2,
    rawString_React: ReactSignup2,
  },
  {
    id: 3,
    component: Signup3,
    rawString_React: ReactSignup3,
  },
  {
    id: 4,
    component: Signup4,
    rawString_React: ReactSignup4,
  },
  {
    id: 5,
    component: Signup5,
    rawString_React: ReactSignup5,
  },
  {
    id: 6,
    component: Signup6,
    rawString_React: ReactSignup6,
  },
  {
    id: 7,
    component: Signup7,
    rawString_React: ReactSignup7,
  },
  {
    id: 8,
    component: Signup8,
    rawString_React: ReactSignup8,
  },
];

const Signups = () => {
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

export default Signups;
