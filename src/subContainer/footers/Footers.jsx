import React, { useEffect, useState } from "react";

import Flybtn1 from "../../components/social/sections/fly-button/FlyBtn";

import FlybtnReact1 from "!!raw-loader!../../components/social/sections/fly-button/FlyBtn";

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
];

const Footers = () => {
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

export default Footers;
