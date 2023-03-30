import { useNavigate } from "react-router";

const GamePick = ({ GAME_LIST }) => {
  const navigate = useNavigate();

  return (
    <main className="py-[50px]">
      <section className="container mx-auto px-[200px] grid grid-cols-4 gap-x-4 gap-y-4">
        {GAME_LIST.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                navigate(`?gameType=${item.label}`);
              }}
              className="w-[175px] h-[85px] cursor-pointer bg-cover bg-center bg-no-repeat hover:translate-y-[-5px] hover:shadow-xl rounded-xl transition duration-300"
              style={{ backgroundImage: `url(${item.picker})` }}
            ></div>
          );
        })}
      </section>
    </main>
  );
};

export default GamePick;
