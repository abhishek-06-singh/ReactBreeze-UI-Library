import React, { useEffect, useState } from "react";

import Address1 from "../../components/home-services/add-address/AddAddress";
import Address2 from "../../components/home-services/add-address/AddAddress2";
import Address3 from "../../components/home-services/add-address/ArrivalTime";
import Address4 from "../../components/home-services/add-address/ArrivalTime2";
import Address5 from "../../components/home-services/add-address/ArrivalTimer";
import Address6 from "../../components/home-services/add-address/ArrivalTimer2";
import Address7 from "../../components/home-services/add-address/DirectionMap";
import Address8 from "../../components/home-services/add-address/DirectionMap2";
import AddressReact1 from "!!raw-loader!../../components/home-services/add-address/AddAddress";
import AddressReact2 from "!!raw-loader!../../components/home-services/add-address/AddAddress2";
import AddressReact3 from "!!raw-loader!../../components/home-services/add-address/ArrivalTime";
import AddressReact4 from "!!raw-loader!../../components/home-services/add-address/ArrivalTime2";
import AddressReact5 from "!!raw-loader!../../components/home-services/add-address/ArrivalTimer";
import AddressReact6 from "!!raw-loader!../../components/home-services/add-address/ArrivalTimer2";
import AddressReact7 from "!!raw-loader!../../components/home-services/add-address/DirectionMap";
import AddressReact8 from "!!raw-loader!../../components/home-services/add-address/DirectionMap2";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";
const ComponentData = [
  {
    id: 1,
    component: Address1,
    rawString_React: AddressReact1,
  },
  {
    id: 2,
    component: Address2,
    rawString_React: AddressReact2,
  },
  {
    id: 3,
    component: Address3,
    rawString_React: AddressReact3,
  },
  {
    id: 4,
    component: Address3,
    rawString_React: AddressReact3,
  },
  {
    id: 5,
    component: Address3,
    rawString_React: AddressReact3,
  },
  {
    id: 6,
    component: Address3,
    rawString_React: AddressReact6,
  },
  {
    id: 7,
    component: Address3,
    rawString_React: AddressReact7,
  },
  {
    id: 8,
    component: Address3,
    rawString_React: AddressReact3,
  },
];

const Address = () => {
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

export default Address;
