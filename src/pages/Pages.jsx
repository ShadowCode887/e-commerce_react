import React from "react";
import Annu from "../components/announcements/Annu";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainpage/Home";
import NewArrivals from "../components/newArrivals/NewArrivals";
import Shop from "../components/shop/Shop";
import TopCate from "../components/top/TopCat";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu />
      <Wrapper />
    </>
  );
};

export default Pages;
