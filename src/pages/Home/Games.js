import { motion } from "framer-motion";
import BG from "../../images/home/911game/ch_indexbg.png";
import SicboBg from "../../images/home/911game/ch_bg0.webp";
import Sicbo from "../../images/home/911game/ch_scibo_p2.webp";
import Dice from "../../images/home/911game/ch_dicecup.webp";
import FSC from "../../images/home/911game/ch_fish-p.webp";

const GAME = [
  {
    name: "骰寶",
    icon: Sicbo,
  },
  {
    name: "色碟",
    icon: Dice,
  },
  {
    name: "魚蝦蟹",
    icon: FSC,
  },
];

const Games = () => {
  return (
    <main
      className="py-[100px] bg-center bg-cover"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <article className="container mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center mr-[50px]">
          <p className="text-white bg-[#321100] rounded-3xl mb-[10px] font-bold py-[5px] px-[15px] text-sm">
            最新玩法
          </p>
          <p className="text-5xl font-black text-[#321100] ">搶莊</p>
          <p className="text-5xl font-black text-[#321100] mb-[10px]">遊戲</p>
          <p className="text-white font-medium cursor-pointer group flex">
            {" "}
            <motion.div
              className="mr-[5px]"
              animate={{ x: [-10, 0, 0] }}
              transition={{
                duration: 1.3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >{`>>`}</motion.div>{" "}
            規則說明
          </p>
        </div>
        {GAME.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[150px] relative flex flex-col justify-end h-[175px] bg-no-repeat bg-cover bg-[100%,100%] group cursor-pointer hover:scale-110 transition duration-300 bg-center p-[13px] mr-[100px]"
              style={{ backgroundImage: `url(${SicboBg})` }}
            >
              <motion.img
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute h-[113px] object-cover left-[20px] top-[0px]"
                src={item.icon}
              />
              <div className="w-full flex items-center justify-between">
                <p className="text-white font-bold text-lg">{item.name}</p>
                <p className="text-911-color rounded-full group-hover:scale-110 transition duration-300 p-[5px] bg-white text-sm">
                  GO
                </p>
              </div>
            </div>
          );
        })}
      </article>
    </main>
  );
};

export default Games;
