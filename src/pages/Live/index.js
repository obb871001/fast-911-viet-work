import { useState } from "react";
import { GAME_LIST } from "./constanst";
import GameTypeWrap from "../Common/GameTypeWrap";
import Banner from "../Common/Banner";
import GamePick from "../Common/GamePick";
const Live = () => {
  return (
    <GameTypeWrap>
      <Banner GAME_LIST={GAME_LIST} />
      <GamePick GAME_LIST={GAME_LIST} />
    </GameTypeWrap>
  );
};

export default Live;
