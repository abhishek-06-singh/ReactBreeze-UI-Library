import React, { useEffect, useState } from "react";

import Feeds1 from "../../components/social/sections/feed/FeedPost1";
import FeedPost2 from "../../components/social/sections/feed/FeedPost2";

import ReactFeeds1 from "!!raw-loader!../../components/social/sections/feed/FeedPost1";
import resctFeedPost2 from "!!raw-loader!../../components/social/sections/feed/FeedPost2";

import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Feeds1,
    rawString_React: ReactFeeds1,
  },
  {
    id: 2,
    component: FeedPost2,
    rawString_React: resctFeedPost2,
  },
];

const Feeds = () => {
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

export default Feeds;
