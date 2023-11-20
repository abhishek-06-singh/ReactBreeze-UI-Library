import React, { useEffect, useState } from "react";

import Cart from "../../components/home-services/cart/Cart";
import Cart2 from "../../components/home-services/cart/Cart2";
import Cart3 from "../../components/home-services/cart/Cart3";
import Cart4 from "../../components/home-services/cart/Cart4";
import ReactCart from "!!raw-loader!../../components/home-services/cart/Cart";
import ReactCart2 from "!!raw-loader!../../components/home-services/cart/Cart2";
import ReactCart3 from "!!raw-loader!../../components/home-services/cart/Cart3";
import ReactCart4 from "!!raw-loader!../../components/home-services/cart/Cart4";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Cart,
    rawString_React: ReactCart,
  },
  {
    id: 2,
    component: Cart2,
    rawString_React: ReactCart2,
  },
  {
    id: 3,
    component: Cart3,
    rawString_React: ReactCart3,
  },
  {
    id: 4,
    component: Cart4,
    rawString_React: ReactCart4,
  },
];

const Carts = () => {
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

export default Carts;
