import CardList from "./components/CardList";
import MarqueeComponent from "./components/Marquee";

const GamePlatform = () => {
  return (
    <section className="bg-[#FFF6F1] pt-[15px] pb-[50px]">
      <MarqueeComponent />
      <CardList />
    </section>
  );
};

export default GamePlatform;
