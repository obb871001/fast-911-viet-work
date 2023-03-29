import React, { Fragment } from "react";
import Header from "../Common/Header";
import Carousel from "./components/Carousel";
import GamePlatform from "./GamePlatform";

const Home = () => {
  return (
    <Fragment>
      <Carousel />
      <GamePlatform />
    </Fragment>
  );
};

export default Home;
