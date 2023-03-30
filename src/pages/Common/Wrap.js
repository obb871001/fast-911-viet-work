import Footer from "./Footer";
import Header from "./Header";

const Wrap = ({ children }) => {
  return (
    <main className="pt-[112px]">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Wrap;
