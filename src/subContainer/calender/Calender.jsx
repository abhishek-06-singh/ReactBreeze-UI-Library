import React, { useEffect, useState } from "react";

import Calender1 from "../../components/home-services/application/Calender1";

import ReactCalender1 from "!!raw-loader!../../components/home-services/application/Calender1";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Calender1,
    rawString_React: ReactCalender1,
  },
];

const Calender = () => {
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

export default Calender;
