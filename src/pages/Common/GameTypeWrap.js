import { motion } from "framer-motion";
import React from "react";
import BG from "../../images/common/gameTypeBg.png";

const GameTypeWrap = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cover"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {children}
    </motion.main>
  );
};

export default GameTypeWrap;
