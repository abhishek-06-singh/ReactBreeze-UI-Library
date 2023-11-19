import React, { useEffect, useState } from "react";

import CreatePost from "../../components/social/sections/posts/CreatePostModal";
import CreatePost2 from "../../components/social/sections/posts/CreatePostModal2";
import CreatePost3 from "../../components/social/sections/posts/CreatePostModal3";
import CreatePost4 from "../../components/social/sections/posts/CreatePostModal4";
import CreatePost5 from "../../components/social/sections/posts/CreatePostModal5";
import CreatePost6 from "../../components/social/sections/posts/CreatePostModal6";

import ReactCreatePost from "!!raw-loader!../../components/social/sections/posts/CreatePostModal";
import ReactCreatePost2 from "!!raw-loader!../../components/social/sections/posts/CreatePostModal2";
import ReactCreatePost3 from "!!raw-loader!../../components/social/sections/posts/CreatePostModal3";
import ReactCreatePost4 from "!!raw-loader!../../components/social/sections/posts/CreatePostModal4";
import ReactCreatePost5 from "!!raw-loader!../../components/social/sections/posts/CreatePostModal5";
import ReactCreatePost6 from "!!raw-loader!../../components/social/sections/posts/CreatePostModal6";
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
    component: CreatePost2,
    rawString_React: ReactCreatePost2,
  },
  {
    id: 3,
    component: CreatePost3,
    rawString_React: ReactCreatePost3,
  },
  {
    id: 4,
    component: CreatePost4,
    rawString_React: ReactCreatePost4,
  },
  {
    id: 5,
    component: CreatePost5,
    rawString_React: ReactCreatePost5,
  },
  {
    id: 6,
    component: CreatePost6,
    rawString_React: ReactCreatePost6,
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
