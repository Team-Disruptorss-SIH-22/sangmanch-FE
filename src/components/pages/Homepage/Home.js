import React from "react";

import HomeNavbar from "./HomeNavbar";
import Footer from "../Footer";
import Carousel from "./Carousel";
import Cards from "./Cards";
import FAQ from "./FAQ";

const Home = (props) => {
  return (
    <div>
      <HomeNavbar {...props} />
      <Carousel />
      <Cards />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
