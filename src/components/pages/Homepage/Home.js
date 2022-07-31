import React from "react";

import HomeNavbar from "../Navbar/HomeNavbar";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Maps from "./Maps";
import FAQ from "./FAQ";
import Footer from "../Footer";

const Home = (props) => {
  return (
    <div>
      <HomeNavbar {...props} />
      <Carousel />
      <Cards />
      <Maps />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
