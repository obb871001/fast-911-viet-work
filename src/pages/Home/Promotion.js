import Arrow from "../../images/home/promotion/arrow.png";
import Promotion1 from "../../images/home/promotion/Promotion.webp";
import Promotion2 from "../../images/home/promotion/Promotino2.webp";
import { HiSpeakerphone } from "react-icons/hi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
const Promotion = () => {
  return (
    <main className="bg-white py-[50px] flex">
      <section className="container mx-auto flex">
        <section className="w-[55%] pr-[10px]">
          <div className="flex items-center mb-[40px]">
            <img src={Arrow} className="mr-[20px]" />
            <p className="font-medium text-4xl">精彩活動</p>
          </div>
          <div className="w-[100%] h-[250px] mx-auto overflow-hidden group rounded-xl shadow-xl cursor-pointer mb-[20px]">
            <img
              src={Promotion1}
              className="w-full h-full group-hover:scale-110 transition duration-300 object-cover"
            />
          </div>
          <div className="w-[100%] h-[250px] mx-auto overflow-hidden group rounded-xl shadow-xl cursor-pointer mb-[20px]">
            <img
              src={Promotion2}
              className="w-full h-full group-hover:scale-110 transition duration-300 object-cover"
            />
          </div>
        </section>
        <section className="w-[45%] pl-[10px]">
          <div className="flex items-center mb-[40px]">
            <img src={Arrow} className="mr-[20px]" />
            <p className="font-medium text-4xl">最新公告</p>
          </div>
          <article className="pb-[10px] border-b-2 border-dotted mb-[20px] cursor-pointer">
            <div className="w-full flex items-center justify-between mb-[15px]">
              <div className="flex">
                <HiSpeakerphone className="text-911-secondary-color text-2xl mr-[10px]" />
                <p className="text-overflow font-medium">
                  挑戰VIP，最高獨得3億元現金
                </p>
              </div>
              <div className="flex items-center">
                <p className="py-[3px] px-[10px] rounded-lg bg-911-secondary-color text-white text-sm font-bold mr-[10px]">
                  NEW
                </p>
                <p>2023-02-01</p>
              </div>
            </div>
            <div className="text-[#a6a6a6]">
              每月月底前達到指定門檻，就能自動調整會員等級！讓您的遊戲獎金大幅增加！
              每月月底前達到指定門檻，就能自動調整會員等級！讓您的遊戲獎金大幅增加！
            </div>
          </article>
          <p
            className="font-medium flex items-center justify-end text-end
            cursor-pointer group"
          >
            <IoIosArrowDroprightCircle className="text-911-secondary-color text-xl mr-[5px] group-hover:translate-x-[6px] transition duration-500" />
            看更多
          </p>
        </section>
      </section>
    </main>
  );
};

export default Promotion;
