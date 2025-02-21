import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.scss";
import Template from "./template";
import { cardData } from "./data";
const Cards = () => {
    return (_jsxs("div", { className: "cards-container", children: [_jsx("div", { className: "cards-wrapper", children: cardData.map((item) => (_jsx(Template, { pair: item.pair, timeline: item.timeline, profitTitle: item.profitTitle, profitPercentage: item.profitPercentage, target: item.target, entryDate: item.entryDate }))) }), _jsx("div", { className: "cards-black-half-square", children: _jsx("div", { className: "cards-slight-slope" }) })] }));
};
export default Cards;
