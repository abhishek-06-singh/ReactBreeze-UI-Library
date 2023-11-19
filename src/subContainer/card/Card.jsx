import React, { useEffect, useState } from "react";

import ProductCard from "../../components/social/sections/cards/ProductCard";
import ProductCardDark from "../../components/social/sections/cards/ProductCardDark";
import ProductCardWithRating from "../../components/social/sections/cards/ProductCardWithRating";
import ProductCardWithRatingDark from "../../components/social/sections/cards/ProductCardWithRatingDark";
import HorizontalProductCard from "../../components/social/sections/cards/HorizontalProductCard";
import HorizontalProductCardDark from "../../components/social/sections/cards/HorizontalProductCardDark";
import BookingCard from "../../components/social/sections/cards/BookingCard";
import BookingCardDark from "../../components/social/sections/cards/BookingCardDark";

import ReactProductCard from "!!raw-loader!../../components/social/sections/cards/ProductCard";
import ReactProductCardDark from "!!raw-loader!../../components/social/sections/cards/ProductCardDark";
import ReactProductCardWithRating from "!!raw-loader!../../components/social/sections/cards/ProductCardWithRating";
import ReactProductCardWithRatingDark from "!!raw-loader!../../components/social/sections/cards/ProductCardWithRatingDark";
import ReactHorizontalProductCard from "!!raw-loader!../../components/social/sections/cards/HorizontalProductCard";
import ReactHorizontalProductCardDark from "!!raw-loader!../../components/social/sections/cards/HorizontalProductCardDark";
import ReactBookingCard from "!!raw-loader!../../components/social/sections/cards/BookingCard";
import ReactBookingCardDark from "!!raw-loader!../../components/social/sections/cards/BookingCardDark";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import PreviewCodeSection from "../../subcomponent/PreviewCode/PreviceCodeSection";

import pretty from "pretty";

const ComponentData = [
  {
    id: 1,
    component: ProductCard,
    rawString_React: ReactProductCard,
  },
  {
    id: 2,
    component: ProductCardDark,
    rawString_React: ReactProductCardDark,
  },
  {
    id: 3,
    component: ProductCardWithRating,
    rawString_React: ReactProductCardWithRating,
  },
  {
    id: 4,
    component: ProductCardWithRatingDark,
    rawString_React: ReactProductCardWithRatingDark,
  },
  {
    id: 5,
    component: HorizontalProductCard,
    rawString_React: ReactHorizontalProductCard,
  },
  {
    id: 6,
    component: HorizontalProductCardDark,
    rawString_React: ReactHorizontalProductCardDark,
  },
  {
    id: 7,
    component: BookingCard,
    rawString_React: ReactBookingCard,
  },
  {
    id: 8,
    component: BookingCardDark,
    rawString_React: ReactBookingCardDark,
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
