import React, { useEffect, useState } from "react";

import Notify from "../../components/application-ui/overlays/notifications/Notify";
import Notify2 from "../../components/application-ui/overlays/notifications/Notify2";
import Notify2Dark from "../../components/application-ui/overlays/notifications/Notify2Dark";
import CommentNotification from "../../components/application-ui/overlays/notifications/CommentNotification";
import LightCommentNotification from "../../components/application-ui/overlays/notifications/LightCommentNotification";

import ReactNotify from "!!raw-loader!../../components/application-ui/overlays/notifications/Notify";
import ReactNotify2 from "!!raw-loader!../../components/application-ui/overlays/notifications/Notify2";
import ReactNotify2Dark from "!!raw-loader!../../components/application-ui/overlays/notifications/Notify2Dark";
import ReactCommentNotification from "!!raw-loader!../../components/application-ui/overlays/notifications/CommentNotification";
import ReactLightCommentNotification from "!!raw-loader!../../components/application-ui/overlays/notifications/LightCommentNotification";

// import { renderToStaticMarkup } from "react-dom/server";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Notify,
    rawString_React: ReactNotify,
  },
  {
    id: 2,
    component: Notify2,
    rawString_React: ReactNotify2,
  },
  {
    id: 3,
    component: Notify2Dark,
    rawString_React: ReactNotify2Dark,
  },
  {
    id: 4,
    component: LightCommentNotification,
    rawString_React: ReactLightCommentNotification,
  },

  {
    id: 5,
    component: CommentNotification,
    rawString_React: ReactCommentNotification,
  },
];

const Notification = () => {
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

export default Notification;
