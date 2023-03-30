import Demo1 from "../../images/home/gamelist/beab_tw.webp";
import Demo2 from "../../images/home/gamelist/li_tw.webp";
import Demo3 from "../../images/home/gamelist/eg_tw.webp";
import Demo4 from "../../images/home/gamelist/lo_tw.webp";
import Demo5 from "../../images/home/gamelist/sp_tw.webp";

const GameList = () => {
  return (
    <main className="py-[30px] bg-[#FFF6F1]">
      <article className="container mx-auto">
        <section className="grid grid-cols-2 gap-4">
          <div className="flex items-center h-[269px] overflow-hidden cursor-pointer group rounded-xl">
            <img
              className="object-cover w-full transition duration-300"
              src={Demo1}
            />
          </div>
          <div className="flex items-center h-[269px] overflow-hidden cursor-pointer group rounded-xl">
            <img
              className="object-cover w-full mt-[33px] transition duration-300"
              src={Demo2}
            />
          </div>
        </section>
        <section className="grid grid-cols-3 gap-4">
          <div className="flex items-center h-[269px] overflow-hidden cursor-pointer group rounded-xl">
            <img
              className="object-cover w-full transition duration-300"
              src={Demo3}
            />
          </div>
          <div className="flex items-center h-[269px] overflow-hidden cursor-pointer group rounded-xl">
            <img
              className="object-cover w-full transition duration-300"
              src={Demo4}
            />
          </div>
          <div className="flex items-center h-[269px] overflow-hidden cursor-pointer group rounded-xl">
            <img
              className="object-cover w-full transition duration-300"
              src={Demo5}
            />
          </div>
        </section>
      </article>
    </main>
  );
};

export default GameList;
