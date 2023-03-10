import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";

import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";

import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";

export default function Cart() {
  return (
    <>
      <Header theme="black"></Header>

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart></ShoppingCart>
            <ShippingDetails></ShippingDetails>
          </div>
        </div>
      </section>

      <SiteMap></SiteMap>
      <Footer></Footer>
    </>
  );
}
