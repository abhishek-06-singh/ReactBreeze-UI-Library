import React, { useEffect, useState } from "react";

import Userprofiles1 from "../../components/social/sections/userProfile/ProfileCard";
import ProfileCard2 from "../../components/social/sections/userProfile/ProfileCard2";
import ProfileCard3 from "../../components/social/sections/userProfile/ProfileCard3";
import ProfileCard4 from "../../components/social/sections/userProfile/ProfileCard4";

import UserprofilesReact1 from "!!raw-loader!../../components/social/sections/userProfile/ProfileCard";
import ReactProfileCard2 from "!!raw-loader!../../components/social/sections/userProfile/ProfileCard2";
import ReactProfileCard3 from "!!raw-loader!../../components/social/sections/userProfile/ProfileCard3";
import ReactProfileCard4 from "!!raw-loader!../../components/social/sections/userProfile/ProfileCard4";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Userprofiles1,
    rawString_React: UserprofilesReact1,
  },
  {
    id: 2,
    component: ProfileCard2,
    rawString_React: ReactProfileCard2,
  },
  {
    id: 3,
    component: ProfileCard3,
    rawString_React: ReactProfileCard3,
  },
  {
    id: 4,
    component: ProfileCard4,
    rawString_React: ReactProfileCard4,
  },
];

const Userprofiles = () => {
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

export default Userprofiles;
