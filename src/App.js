import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Wrap from "./pages/Common/Wrap";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Wrap children={<Home />} />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
