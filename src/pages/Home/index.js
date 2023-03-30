import { motion } from "framer-motion";
import React, { Fragment } from "react";
import Carousel from "./components/Carousel";
import GameList from "./GameList";
import GamePlatform from "./GamePlatform";
import Games from "./Games";
import Promotion from "./Promotion";
import Static from "./Static";

const Home = () => {
  return (
    <motion.Fragment
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Carousel />
      <GamePlatform />
      <Promotion />
      <Games />
      <GameList />
      <Static />
    </motion.Fragment>
  );
};

export default Home;
