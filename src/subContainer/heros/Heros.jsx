import React, { useEffect, useState } from "react";
import Hero1 from "../../components/marketing/sections/heroes/simple_centered_with_background_image";
import Hero2 from "../../components/marketing/sections/heroes/simple_centered";
import Hero3 from "../../components/marketing/sections/heroes/split_with_code_example";
import Hero4 from "../../components/marketing/sections/heroes/split_with_image";
import Hero5 from "../../components/marketing/sections/heroes/split_with_screenshot";
import Hero6 from "../../components/marketing/sections/heroes/split_with_screenshot_on_dark";
import Hero7 from "../../components/marketing/sections/heroes/with_angled_image_on_right";
import Hero8 from "../../components/marketing/sections/heroes/with_app_screenshot";
import Hero9 from "../../components/marketing/sections/heroes/with_app_screenshot_on_dark";
import Hero10 from "../../components/marketing/sections/heroes/with_image_tiles";
import Hero11 from "../../components/marketing/sections/heroes/with_offset_image";
import Hero12 from "../../components/marketing/sections/heroes/with_phone_mockup";

import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Hero1,
  },
  {
    id: 2,
    component: Hero2,
  },
  {
    id: 3,
    component: Hero3,
  },
  {
    id: 4,
    component: Hero4,
  },
  {
    id: 5,
    component: Hero5,
  },
  {
    id: 6,
    component: Hero6,
  },
  {
    id: 7,
    component: Hero7,
  },
  {
    id: 8,
    component: Hero8,
  },
  {
    id: 9,
    component: Hero9,
  },
  {
    id: 10,
    component: Hero10,
  },
  {
    id: 11,
    component: Hero11,
  },
  {
    id: 12,
    component: Hero12,
  },
];

const Heros = () => {
  return (
    <>
      {ComponentData.map((obj) => {
        return <PreviewCodeSection key={obj?.id} Component={obj?.component} />;
      })}
    </>
  );
};

export default Heros;
