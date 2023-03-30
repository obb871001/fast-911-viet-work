import { IoLogoChrome } from "react-icons/io5";
import { FaFirefox, FaFacebookF } from "react-icons/fa";
import { BsTiktok, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";

const iconStyle =
  "text-3xl mr-[10px] cursor-pointer hover:scale-110 hover:text-911-color transition duration-300";

const FOOTER_MENU = [
  {
    LIST: ["關於我們", "隱私保護", "博彩責任", "服務條款"],
  },
  {
    LIST: ["存款與托售", "遊戲教學", "好友推薦", "常見問題"],
  },

  {
    LIST: [
      "系統是由國際娛樂協會許可的合法娛樂公司。進行註冊前，請確認您已年滿18歲。為提升更好的使用體驗，請使用建議瀏覽器",
    ],
    icon: [
      <IoLogoChrome className={iconStyle} />,
      <FaFirefox className={iconStyle} />,
    ],
  },

  {
    LIST: ["關於我們"],
    icon: [
      <FaFacebookF className={iconStyle} />,
      <BsTiktok className={iconStyle} />,
      <BsInstagram className={iconStyle} />,
      <BsYoutube className={iconStyle} />,
      <BsTwitter className={iconStyle} />,
    ],
  },
];

const Footer = () => {
  return (
    <main className="py-[70px] bg-[#7F7F7F]">
      <article className="container mx-auto grid grid-cols-12 px-[100px]">
        {FOOTER_MENU.map((item, index) => {
          return (
            <section
              className={`flex flex-col items-center text-white ${
                index === 2 ? "col-span-6" : "col-span-2"
              }`}
            >
              {item.LIST.map((item, index) => {
                return (
                  <p className="mb-[10px] text-sm header-bottom relative hover:text-911-color transition duration-300 cursor-pointer">
                    {item}
                  </p>
                );
              })}
              <section className="flex items-center mt-[10px]">
                {item.icon &&
                  item.icon.map((item, index) => {
                    return <>{item}</>;
                  })}
              </section>
            </section>
          );
        })}
      </article>
    </main>
  );
};

export default Footer;
