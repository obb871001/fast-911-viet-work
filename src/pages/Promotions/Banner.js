import BG from ".././../images/promotion/banner.jpeg";
import promotionAnimate from ".././../images/promotion/animate/pro_tw.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className="h-[435px] relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
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
        className="absolute left-[300px] top-[70px]"
        src={promotionAnimate}
      />
    </section>
  );
};

export default Banner;
