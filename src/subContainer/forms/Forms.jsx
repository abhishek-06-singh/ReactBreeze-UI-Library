import React, { useEffect, useState } from "react";

import Forms1 from "../../components/social/sections/forms/Form";
import Forms2 from "../../components/social/sections/forms/Form2";
import Forms3 from "../../components/social/sections/forms/Form3";
import Forms4 from "../../components/social/sections/forms/Form4";
import FormsReact1 from "!!raw-loader!../../components/social/sections/forms/Form";
import FormsReact2 from "!!raw-loader!../../components/social/sections/forms/Form2";
import FormsReact3 from "!!raw-loader!../../components/social/sections/forms/Form3";
import FormsReact4 from "!!raw-loader!../../components/social/sections/forms/Form4";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Forms1,
    rawString_React: FormsReact1,
  },
  {
    id: 2,
    component: Forms2,
    rawString_React: FormsReact2,
  },
  {
    id: 3,
    component: Forms3,
    rawString_React: FormsReact3,
  },
  {
    id: 4,
    component: Forms4,
    rawString_React: FormsReact4,
  },
];

const Forms = () => {
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

export default Forms;
