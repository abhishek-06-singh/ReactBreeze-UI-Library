import React, { useEffect, useState } from "react";

import Flybtn1 from "../../components/social/sections/fly-button/FlyBtn";
import Flybtn2 from "../../components/social/sections/fly-button/FlyBtn2";
import Flybtn3 from "../../components/social/sections/fly-button/FlyBtn3";
import Flybtn4 from "../../components/social/sections/fly-button/FlyBtn4";
import Flybtn5 from "../../components/social/sections/fly-button/FlyBtn5";
import Flybtn6 from "../../components/social/sections/fly-button/FlyBtn6";
import FlybtnReact1 from "!!raw-loader!../../components/social/sections/fly-button/FlyBtn";
import FlybtnReact2 from "!!raw-loader!../../components/social/sections/fly-button/FlyBtn2";
import FlybtnReact3 from "!!raw-loader!../../components/social/sections/fly-button/FlyBtn3";
import FlybtnReact4 from "!!raw-loader!../../components/social/sections/fly-button/FlyBtn4";
import FlybtnReact5 from "!!raw-loader!../../components/social/sections/fly-button/FlyBtn5";
import FlybtnReact6 from "!!raw-loader!../../components/social/sections/fly-button/FlyBtn6";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Flybtn1,
    rawString_React: FlybtnReact1,
  },
  {
    id: 2,
    component: Flybtn2,
    rawString_React: FlybtnReact2,
  },
  {
    id: 3,
    component: Flybtn3,
    rawString_React: FlybtnReact3,
  },
  {
    id: 4,
    component: Flybtn4,
    rawString_React: FlybtnReact4,
  },
  {
    id: 5,
    component: Flybtn5,
    rawString_React: FlybtnReact5,
  },
  {
    id: 6,
    component: Flybtn6,
    rawString_React: FlybtnReact6,
  },
];

const FlyBtns = () => {
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

export default FlyBtns;
