import React, { useEffect, useState } from "react";

import UserIndicator1 from "../../components/social/sections/users/UsersIndicator";
import UserIndicator2 from "../../components/social/sections/users/UsersIndicator2";
import UserIndicatorReact1 from "!!raw-loader!../../components/social/sections/users/UsersIndicator";
import UserIndicatorReact2 from "!!raw-loader!../../components/social/sections/users/UsersIndicator2";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: UserIndicator1,
    rawString_React: UserIndicatorReact1,
  },
  {
    id: 2,
    component: UserIndicator2,
    rawString_React: UserIndicatorReact2,
  },
];

const UserIndicator = () => {
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

export default UserIndicator;
