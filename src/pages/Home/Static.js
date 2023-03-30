import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StaticBg from "../../images/home/static/bg.png";
import { useInView } from "react-intersection-observer";
export const STATIC_LIST = [
  {
    number: 60,
    content1: "存款提款平均時間",
    content2: "保證信譽，火速到帳。",
    unit: "s",
  },
  {
    number: 24,
    content1: "線上客戶服務",
    content2: "365天、24小時線上支援，為您熱情服務",
    unit: "/07",
  },
  {
    number: 100,
    content1: "資金安全管理",
    content2: "獨立開發，嚴謹的資金安全體系完整守護您的資產",
    unit: "%",
  },
  {
    number: 200,
    content1: "遊戲總數",
    content2: "多元遊戲應有盡有，讓您沈浸豐富娛樂世界",
    unit: "+",
  },
];
const Count = ({ targetNumber, Unit }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    const startTime = Date.now();
    const endTime = startTime + 2000;
    const startCount = count;
    const targetCount = targetNumber;

    const animationId = requestAnimationFrame(function animate() {
      const now = Date.now();
      const progress = (now - startTime) / (endTime - startTime);

      const currentCount = Math.floor(
        startCount +
          (targetCount - startCount) * (1 - Math.pow(1 - progress, 3))
      );
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(animate);
      }
    });
    return () => cancelAnimationFrame(animationId);
  }, [inView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      exit={{ opacity: 0, y: -50 }}
    >
      {count}
      <span className="text-xl font-semibold">{Unit}</span>
    </motion.div>
  );
};

const StaticComponent = ({
  inView,
  targetNumber,
  content1,
  content2,
  Unit,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-[160px] h-[160px] bg-cover relative flex items-center justify-center"
        style={{ backgroundImage: `url(${StaticBg})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full p-[16px]">
          <svg
            className="w-full h-full overflow-visible"
            style={{ transform: "rotateY(0deg) rotate(271deg)" }}
          >
            <motion.circle
              initial={{ strokeDashoffset: "470px" }}
              animate={{
                strokeDashoffset: inView ? "160px" : "470px",
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
              r="50%"
              cx="50%"
              cy="50%"
              class="chart-circle-progress"
              stroke-width="14"
              stroke-linecap="round"
              stroke-dasharray="471"
              stroke-dashoffset="160"
              style={{ stroke: "#ffab57", fill: "none" }}
            ></motion.circle>
          </svg>
        </div>
        <p className="text-4xl font-bold text-911-color">
          <Count targetNumber={targetNumber} Unit={Unit} />
        </p>
      </div>
      <div className="flex flex-col items-center justify-between h-[50px]">
        <p className="text-center mt-[5px] text-lg font-semibold">{content1}</p>
        <p className="text-center text-sm">{content2}</p>
      </div>
    </div>
  );
};

const Static = () => {
  const { ref, inView } = useInView();

  return (
    <main className="py-[50px] bg-white">
      <section
        ref={ref}
        className="container mx-auto grid grid-cols-4 gap-4 px-[200px]"
      >
        {STATIC_LIST.map((item, index) => {
          return (
            <StaticComponent
              key={index}
              inView={inView}
              targetNumber={item.number}
              content1={item.content1}
              content2={item.content2}
              Unit={item.unit}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Static;
