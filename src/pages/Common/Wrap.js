import { Fragment } from "react";
import Header from "./Header";

const Wrap = ({ children }) => {
  return (
    <main className="pt-[112px]">
      <Header />
      {children}
    </main>
  );
};

export default Wrap;
