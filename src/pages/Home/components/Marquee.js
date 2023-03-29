import { Button } from "antd";
import Marquee from "react-fast-marquee";
import MarqueeContent from "./marqueeComponents/Content";
import MarqueeBg from "../../../images/home/marquee/marqueebg.png";
import { AiFillSound } from "react-icons/ai";
const MarqueeComponent = () => {
  return (
    <section
      className={`lg:w-[1000px] md:w-[757px]  h-[50px] pr-[50px] overflow-x-hidden mx-auto relative bg-no-repeat cursor-pointer`}
      style={{
        backgroundImage: `url(${MarqueeBg})`,
        backgroundSize: "100% 100%",
      }}
    >
      {" "}
      <div className="flex items-center absolute top-[5px] left-[22px] justify-center bg-911-color rounded-full w-[20px] h-[20px] ">
        <AiFillSound className="text-white text-sm" />
      </div>
      <Marquee
        className="ml-[61px] !w-[87%] pt-[4px] w-full text-white overflow-hidden"
        gradient={false}
        speed={60}
        pauseOnHover
      >
        {" "}
        <MarqueeContent content="919119911" />
      </Marquee>
      <Button
        size="small"
        type="primary"
        className="bg-gradient-to-br absolute top-[4px] right-[15px] !from-[#F8941E] !tracking-tighter !to-[#F36107]"
        shape="round"
      >
        更多
      </Button>
    </section>
  );
};

export default MarqueeComponent;
