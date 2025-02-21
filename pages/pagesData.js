import { jsx as _jsx } from "react/jsx-runtime";
import Home from "./Home";
import Digits from "./Digits";
import About from "./About";
import Tariffs from "./Tariffs";
import FAQ from "./FAQ";
const pagesData = [
    {
        path: "/",
        element: _jsx(Home, {}),
        title: "home",
    },
    {
        path: "/digits",
        element: _jsx(Digits, {}),
        title: "digits",
    },
    {
        path: "/about",
        element: _jsx(About, {}),
        title: "about",
    },
    {
        path: "/tariffs",
        element: _jsx(Tariffs, {}),
        title: "tariffs",
    },
    {
        path: "/faq",
        element: _jsx(FAQ, {}),
        title: "FAQ",
    },
];
export default pagesData;
