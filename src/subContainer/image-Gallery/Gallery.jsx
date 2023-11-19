import React, { useEffect, useState } from "react";

import Gallery1 from "../../components/social/sections/image-Gallery/ImageGallery";
import Gallery2 from "../../components/social/sections/image-Gallery/ImageGallery2";

import ReactGallery1 from "!!raw-loader!../../components/social/sections/image-Gallery/ImageGallery";
import ReactGallery2 from "!!raw-loader!../../components/social/sections/image-Gallery/ImageGallery2";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Gallery1,
    rawString_React: ReactGallery1,
  },
  {
    id: 2,
    component: Gallery2,
    rawString_React: ReactGallery2,
  },
];

const Gallery = () => {
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

export default Gallery;
