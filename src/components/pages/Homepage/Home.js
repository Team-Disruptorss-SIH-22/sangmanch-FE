import React from "react";

import HomeNavbar from "../Navbar/HomeNavbar";
import Carousel from "./Carousel";
import About from "./About";
import Cards from "./Cards";
import FAQ from "./FAQ";
import Footer from "../Footer";

const Home = (props) => {
  return (
    <div>
      <HomeNavbar {...props} />
      <Carousel />
      <About />
      <Cards />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
