import React from "react";

import ImageSlider from "./Slider/ImageSlider";
import DataCenters from "./DataCenters/DataCenters";
import Brand from "./Brand/Brand";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="pt-16 w-full">
      <ImageSlider></ImageSlider>
      <DataCenters></DataCenters>
      <Brand></Brand>
    </div>
  );
};

export default Home;
