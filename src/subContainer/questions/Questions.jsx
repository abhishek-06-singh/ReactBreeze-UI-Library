import React, { useEffect, useState } from "react";

import Questions1 from "../../components/social/sections/Questionaire/QuestionnaireBoilerplate";

import QuestionsReact1 from "!!raw-loader!../../components/social/sections/Questionaire/QuestionnaireBoilerplate";

import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Questions1,
    rawString_React: QuestionsReact1,
  },
];

const Questions = () => {
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

export default Questions;
