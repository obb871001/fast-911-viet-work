import Promotion1 from "../../images/promotion/promotionList/evoban_tw_2.png";

const Article = () => {
  return (
    <main className="py-[50px]">
      <section className="container mx-auto grid grid-cols-3 gap-4 2xl:px-[250px] lg:px-[150px]">
        <div className="h-[420px] w-full border rounded-xl cursor-pointer shadow-lg">
          <div
            className="h-[180px] bg-center bg-cover bg-no-repeat rounded-t-xl"
            style={{ backgroundImage: `url(${Promotion1})` }}
          ></div>
          <div className="p-[10px]"></div>
        </div>
      </section>
    </main>
  );
};

export default Article;
