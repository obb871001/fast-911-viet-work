import { useState, useEffect } from "react";
import "./common.css";
import { Button } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsHeadset } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { GLOBAL_CONFIG } from "../../Config/globalConfig";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const HEADER_LIST = [
  { label: "首頁", tag: "home", special: false },
  { label: "體育", tag: "sports", special: false },
  { label: "真人", tag: "live", special: false },
  { label: "電子遊戲", tag: "egame", special: false },
  { label: "彩票", tag: "lottery", special: false },
  { label: "優惠活動", tag: "promotions", special: false },
  { label: "挑戰VIP", tag: "vip", special: true },
  { label: "911win 搶莊遊戲", tag: "911", special: true },
];
const Header = () => {
  const [tag, setTag] = useState("");
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    setTag(pathname.split("/")[1]);
  }, []);
  console.log(tag, location);
  return (
    <header className="fixed w-full top-0 z-[9999] bg-white">
      <section className="bg-[#E6E6E6] py-[5px] px-[30px] flex items-center justify-between">
        <div className="text-sm flex items-center cursor-pointer">
          <p>繁體</p>
          <IoMdArrowDropdown />
        </div>
        <div className="flex items-center">
          <p className="font-semibold mr-[8px]">歡迎回來</p>
          <Button
            type="primary"
            size="small"
            className="!h-[28px] py-[5px] !px-[15px] !tracking-tighter bg-[#606060] hover:!bg-[#2D2D2D] text-white font-semibold mr-[5px]"
          >
            登入
          </Button>
          <Button
            type="primary"
            size="small"
            className="!h-[28px] py-[5px] !px-[15px] !tracking-tighter bg-911-color hover:!bg-911-hover-color text-white font-semibold"
          >
            註冊
          </Button>
        </div>
      </section>
      <section className="flex px-[30px] py-[10px] items-center justify-between shadow-xl">
        <img className="w-[150px] object-cover" src={GLOBAL_CONFIG.LOGO} />
        <div className="flex items-center">
          {HEADER_LIST.map((list, index) => {
            return (
              <Link
                to={`/${list.tag}`}
                onClick={() => setTag(list.tag)}
                key={list.label}
                className={`font-semibold relative ${
                  tag === list.tag && "show-header-bottom"
                } ${
                  list.special || tag === list.tag
                    ? "text-911-color"
                    : "text-common-gray"
                } header-bottom text-sm mx-[20px] cursor-pointer hover:text-911-color transition duration-300`}
              >
                {list.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center text-2xl text-common-gray">
          <BsHeadset className="cursor-pointer mx-[3px]" />
          <TbGridDots className="cursor-pointer mx-[3px]" />
        </div>
      </section>
    </header>
  );
};

export default Header;
