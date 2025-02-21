import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Cards from "@components/Cards";
import "./index.scss";
import AboutDescription from "@components/AboutDesciption";
import TradebladeIs from "@components/TradableIs";
import Tariffs from "@pages/Tariffs";
const About = () => {
    return (_jsxs("div", { className: "about-wrapper", children: [_jsxs("div", { className: "cards-title-wrapper", children: [_jsx("h2", { className: "cards-title", children: "\u041F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438" }), _jsx("p", { className: "status-indicator", children: "\u041E\u043D\u043B\u0430\u0439\u043D" }), _jsx(Cards, {}), _jsx("div", { className: "about-black-half-square", children: _jsx("div", { className: "about-slight-slope" }) })] }), _jsx(AboutDescription, {}), _jsx(TradebladeIs, {}), _jsx(Tariffs, {})] }));
};
export default About;
