import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Wrap from "./pages/Common/Wrap";
import { ROUTES } from "./utils/routes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <HashRouter>
      <AnimatePresence>
        <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
