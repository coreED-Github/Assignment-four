import React from "react";
import Card from "./components/Card";
import CardTwo from "./components/Cards02";
import Navbar from "./components/Navbar";
import Footer from "./components/Footerr";

export default function Home() {
  return (
<div>
  <Navbar/>
  <Card/>
  <CardTwo/>
  <Footer/>
</div>
  );
}