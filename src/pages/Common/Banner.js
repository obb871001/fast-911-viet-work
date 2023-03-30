import { Button } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import GetParams from "../../utils/getParams";

const Banner = ({ GAME_LIST }) => {
  const currentLocation = GetParams("gameType")
    ? GetParams("gameType")
    : GAME_LIST[0].label;
  return (
    <main className="py-[50px] w-[800px] h-[450px] mx-auto flex items-center justify-center relative">
      {GAME_LIST.map((item, index) => {
        return (
          currentLocation === item.label && (
            <Fragment key={index}>
              <motion.img
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[550px] object-cover"
                src={item.modal}
              />
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[250px]"
              >
                <img
                  src={item.logo}
                  className="w-[230px] h-[88px] object-contain cursor-pointer hover:scale-105 transition duration-300"
                />
                <p className="my-[20px] text-myself-shadow">
                  玩法多端組合多樣
                  <br /> 操作介面簡單明瞭 <br />
                  在家就可輕鬆進行投注
                </p>
                <div className="flex items-center">
                  <Button
                    className="bg-911-color text-white font-semibold hover:shadow-xl hover:!text-white hover:border-911-color mr-[10px]"
                    size="large"
                    shape="round"
                  >
                    Play Now
                  </Button>
                  <Button
                    className="bg-911-color text-white font-semibold hover:shadow-xl hover:!text-white hover:border-911-color"
                    size="large"
                    shape="round"
                  >
                    Transfer
                  </Button>
                </div>
              </motion.div>
              <AnimatePresence>
                <motion.img
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  exit={{ y: 10 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                  src={item.float}
                  className="absolute object-cover left-0"
                />
              </AnimatePresence>
            </Fragment>
          )
        );
      })}
    </main>
  );
};

export default Banner;
