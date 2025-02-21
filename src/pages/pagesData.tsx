import { routerType } from "./router.types";
import Home from "./Home";

import Digits from "./Digits";
import About from "./About";

import Tariffs from "./Tariffs";
import FAQ from "./FAQ";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home",
  },

  {
    path: "/digits",
    element: <Digits />,
    title: "digits",
  },
  {
    path: "/about",
    element: <About />,
    title: "about",
  },
  {
    path: "/tariffs",
    element: <Tariffs />,
    title: "tariffs",
  },
  {
    path: "/faq",
    element: <FAQ />,
    title: "FAQ",
  },
];

export default pagesData;
