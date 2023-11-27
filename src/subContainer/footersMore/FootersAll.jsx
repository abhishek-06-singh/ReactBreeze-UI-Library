import React, { useEffect, useState } from "react";

import Footer from "../../components/home-services/footer/footer/Footer";
import Footer2 from "../../components/home-services/footer/footer/Footer2";
import Footer3 from "../../components/home-services/footer/footer/Footer3";
import Footer4 from "../../components/home-services/footer/footer/Footer4";
import Footer5 from "../../components/home-services/footer/footer/Footer5";
import Footer6 from "../../components/home-services/footer/footer/Footer6";

import ReactFooter from "!!raw-loader!../../components/home-services/footer/footer/Footer";
import ReactFooter2 from "!!raw-loader!../../components/home-services/footer/footer/Footer2";
import ReactFooter3 from "!!raw-loader!../../components/home-services/footer/footer/Footer3";
import ReactFooter4 from "!!raw-loader!../../components/home-services/footer/footer/Footer4";
import ReactFooter5 from "!!raw-loader!../../components/home-services/footer/footer/Footer5";
import ReactFooter6 from "!!raw-loader!../../components/home-services/footer/footer/Footer6";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Footer,
    rawString_React: ReactFooter,
  },
  {
    id: 2,
    component: Footer2,
    rawString_React: ReactFooter2,
  },
  {
    id: 3,
    component: Footer3,
    rawString_React: ReactFooter3,
  },
  {
    id: 4,
    component: Footer4,
    rawString_React: ReactFooter4,
  },
  {
    id: 5,
    component: Footer5,
    rawString_React: ReactFooter5,
  },
  {
    id: 6,
    component: Footer6,
    rawString_React: ReactFooter6,
  },
];

const FootersAll = () => {
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

export default FootersAll;
