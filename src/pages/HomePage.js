import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import BrowseRoom from 'parts/HomePage/BrowseRoom'
import JustArrived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import SiteMap from 'parts/SiteMap'
import Footer from 'parts/Footer'

export default function HomePage() {
  return (
    <>
      <Header theme="white" position="absolute"></Header>
      <Hero></Hero>
      <BrowseRoom></BrowseRoom>
      <JustArrived></JustArrived>
      <Clients></Clients>
      <SiteMap></SiteMap>
      <Footer></Footer>
    </>
  )
}
