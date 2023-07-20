import React from "react";

import ImageSlider from "./Slider/ImageSlider";
import DataCenters from "./DataCenters/DataCenters";

const Home = () => {
  return (
    <div className="pt-16">
      <ImageSlider></ImageSlider>
      <DataCenters></DataCenters>
    </div>
  );
};

export default Home;
