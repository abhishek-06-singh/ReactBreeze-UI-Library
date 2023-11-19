import React, { useEffect, useState } from "react";

import Comment1 from "../../components/social/sections/comment/CommentsModal";
import Comment2 from "../../components/social/sections/comment/CommentsModal2";
import Comment3 from "../../components/social/sections/comment/CommentsModal3";
import Comment4 from "../../components/social/sections/comment/CommentsModal4";
import Comment5 from "../../components/social/sections/comment/CommentsModal5";
import Comment6 from "../../components/social/sections/comment/CommentsModal6";

import ReactComment1 from "!!raw-loader!../../components/social/sections/comment/CommentsModal";
import ReactComment2 from "!!raw-loader!../../components/social/sections/comment/CommentsModal2";
import ReactComment3 from "!!raw-loader!../../components/social/sections/comment/CommentsModal3";
import ReactComment4 from "!!raw-loader!../../components/social/sections/comment/CommentsModal4";
import ReactComment5 from "!!raw-loader!../../components/social/sections/comment/CommentsModal5";
import ReactComment6 from "!!raw-loader!../../components/social/sections/comment/CommentsModal6";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Comment1,
    rawString_React: ReactComment1,
  },
  {
    id: 2,
    component: Comment2,
    rawString_React: ReactComment2,
  },
  {
    id: 3,
    component: Comment3,
    rawString_React: ReactComment3,
  },
  {
    id: 4,
    component: Comment4,
    rawString_React: ReactComment4,
  },
  {
    id: 5,
    component: Comment5,
    rawString_React: ReactComment5,
  },
  {
    id: 6,
    component: Comment6,
    rawString_React: ReactComment6,
  },
];

const Comments = () => {
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

export default Comments;
