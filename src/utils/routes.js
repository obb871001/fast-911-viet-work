import Wrap from "../pages/Common/Wrap";
import Home from "../pages/Home";
import Live from "../pages/Live";
import Lottery from "../pages/Lottery";
import Promotion from "../pages/Promotions";
import Sports from "../pages/Sports";

export const ROUTES = [
  {
    path: "*",
    label: "home",
    element: <Wrap children={<Home />} />,
  },
  {
    path: "/sports",
    label: "Sports",
    element: <Wrap children={<Sports />} />,
  },
  {
    path: "/live",
    label: "Live",
    element: <Wrap children={<Live />} />,
  },
  {
    path: "/lottery",
    label: "Lottery",
    element: <Wrap children={<Lottery />} />,
  },
  {
    path: "/promotions",
    label: "Promotion",
    element: <Wrap children={<Promotion />} />,
  },
];
