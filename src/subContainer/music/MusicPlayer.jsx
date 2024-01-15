import React, { useEffect, useState } from "react";

import CreatePost from "../../components/musicplay/Music1";
import MusicPlayerCard from "../../components/musicplay/MusicPlayerCard";
import MusicPlayerCard2 from "../../components/musicplay/MusicPlayerCard2";

import ReactCreatePost from "!!raw-loader!../../components/musicplay/Music1";
import ReactMusicPlayerCard from "!!raw-loader!../../components/musicplay/MusicPlayerCard";
import ReactMusicPlayerCard2 from "!!raw-loader!../../components/musicplay/MusicPlayerCard";

// import { renderToStaticMarkup } from "react-dom/server";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: CreatePost,
    rawString_React: ReactCreatePost,
  },
  {
    id: 2,
    component: MusicPlayerCard,
    rawString_React: ReactMusicPlayerCard,
  },
  {
    id: 3,
    component: MusicPlayerCard2,
    rawString_React: ReactMusicPlayerCard2,
  },
];

const Post = () => {
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

export default Post;
