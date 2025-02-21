import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "@components/Header";
import "./index.scss";
import HomeItems from "@components/HomeItems";
import Digits from "@pages/Digits";
import About from "@pages/About";
const Home = () => {
    return (_jsxs("div", { className: "home-wrapper", children: [_jsx(Header, {}), _jsx(HomeItems, {}), _jsx(Digits, {}), _jsx(About, {})] }));
};
export default Home;
