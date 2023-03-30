import ButtonBG from "../../../images/home/card/tryButton.png";
import TopSport from "../../../images/home/card/top_sport.png";
import TopDragon from "../../../images/home/card/top_gragon.png";
import TopLive from "../../../images/home/card/top_live.png";
import TopEgame from "../../../images/home/card/top_egame.png";
import TopLottery from "../../../images/home/card/top_lottery.png";
import Top1 from "../../../images/home/card/top1.png";
import Top2 from "../../../images/home/card/top2.png";
import Top3 from "../../../images/home/card/top3.png";
import Top4 from "../../../images/home/card/top4.png";
import Top5 from "../../../images/home/card/top5.png";
import Star from "../../../images/home/card/star.png";

const CARD_LIST = [
  {
    label: "體育",
    gameName: "SABA 體育",
    introduce: "以小金額博大獎項，刺激好玩",
    type: ["足球", "籃球", "棒球"],
    Modal: TopSport,
    Level: Top1,
  },
  {
    label: "E-GAMES",
    gameName: "GR Slot",
    introduce: "專業博弈大師評價頂尖遊戲!",
    type: ["Fishing", "PvP", "Slot"],
    Modal: TopDragon,
    Level: Top2,
  },
  {
    label: "真人娛樂",
    gameName: "DG 真人",
    introduce: "真實體驗感受，性感美女荷官，訓練有素",
    type: ["百家樂", "龍虎", "骰寶"],
    Modal: TopLive,
    Level: Top3,
  },
  {
    label: "E-GAMES",
    gameName: "EVO 電子",
    introduce: "玩法簡單、容易上手，最多人玩的遊戲",
    type: ["Slots", "NetEnt", "Red Tiger"],
    Modal: TopEgame,
    Level: Top4,
  },
  {
    label: "彩票",
    gameName: "VSL 越南彩",
    introduce: "競技博弈，高清直播，公平公正",
    type: ["北部", "中部", "南部"],
    Modal: TopLottery,
    Level: Top5,
  },
];

const CardModal = ({ ModalImage, W, H }) => {
  return (
    <div
      id="modal-img"
      className={`absolute bottom-[20px] right-0 bg-cover ${W} ${H}`}
      style={{ backgroundImage: `url(${ModalImage})` }}
    ></div>
  );
};

const CardList = () => {
  return (
    <section className="flex items-center xl:overflow-visible md:overflow-x-scroll overflow-y-hidden p-[30px] xl:container mx-auto mt-[30px]">
      {CARD_LIST.map((item, index) => {
        return (
          <article
            className="min-w-[230px] max-w-[230px] min-h-[320px] xl:mx-auto md:mr-[40px] relative rounded-2xl p-[15px] flex flex-col justify-between group"
            style={{
              background:
                "linear-gradient(180deg, rgba(241,202,169,1) 0%, rgba(184,133,104,1) 86%)",
              zIndex: CARD_LIST.length - index,
            }}
          >
            <CardModal ModalImage={item.Modal} W="w-[220px]" H="h-[289px]" />
            <div className="bg-gradient-to-b from-[#F1CAAA] to-[#B98568] py-[5px] w-[70px] text-[#91644B] text-center rounded-lg shadow text-sm font-bold">
              {item.label}
            </div>
            <div className="flex flex-col relative z-[10] text-white">
              <p className="text-lg font-bold">{item.gameName}</p>
              <p className="text-sm mb-[10px]">{item.introduce}</p>
              <div className="grid grid-cols-3 text-[#f7c29d] font-bold">
                {item.type.map((list, key) => {
                  return (
                    <p
                      className={`text-center text-xs ${
                        key === list.length ? "" : "border-r border-[#f7c29d]"
                      }`}
                    >
                      {list}
                    </p>
                  );
                })}
              </div>
            </div>

            <section className="hover:opacity-100 opacity-0 cursor-pointer transition duration-300 text-white  absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.6)] px-[10px] flex flex-col items-center justify-center rounded-2xl z-[10]">
              <p className="font-bold text-lg mb-[10px]">{item.gameName}</p>
              <p className="font-bold mb-[10px]">{item.introduce}</p>
              <button
                className="w-[104px] h-[38px] rounded-[30px] text-normal font-bold bg-cover bg-center bg-no-repeat"
                type="primary"
                style={{ backgroundImage: `url(${ButtonBG})` }}
              >
                進入遊戲
              </button>
            </section>
            <img
              src={item.Level}
              className="absolute w-[75px] absolute bottom-[-11px] left-[-60px] z-[99] group-hover:scale-110 transition duration-300"
            />
            <section className="absolute flex bottom-[-30px] left-[40px]">
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
            </section>
          </article>
        );
      })}
    </section>
  );
};

export default CardList;
