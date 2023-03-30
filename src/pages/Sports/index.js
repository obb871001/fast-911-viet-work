import { GAME_LIST } from "./constanst";
import GameTypeWrap from "../Common/GameTypeWrap";
import GamePick from "../Common/GamePick";
import Banner from "../Common/Banner";
const Sports = () => {
  return (
    <GameTypeWrap>
      <Banner GAME_LIST={GAME_LIST} />
      <GamePick GAME_LIST={GAME_LIST} />
    </GameTypeWrap>
  );
};

export default Sports;
