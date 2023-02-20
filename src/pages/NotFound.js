import React from "react";

import Header from "parts/Header";
import PageErrorMessage from "parts/PageErrorMessage";

import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";

export default function NotFound() {
  return (
    <>
      <Header theme="black"></Header>

      <PageErrorMessage></PageErrorMessage>

      <SiteMap></SiteMap>
      <Footer></Footer>
    </>
  );
}
