import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import tradebladeItems from "./data";
import "./index.scss";
import TradeBladeTemplateIs from "./template";
const TradebladeIs = () => {
    const firstColumnData = tradebladeItems.slice(0, 3);
    const secondColumnData = tradebladeItems.slice(3, 5);
    return (_jsxs("div", { className: "tradeblade-wrapper", children: [_jsx("p", { className: "tradeblade-title", children: _jsxs("b", { children: ["tradeblade", _jsx("br", {}), "\u044D\u0442\u043E"] }) }), _jsxs("div", { className: "tradeblade-columns-wrapper", children: [_jsx("div", { className: "first-column-wrapper", children: firstColumnData.map((item) => (_jsx(TradeBladeTemplateIs, { image: item.image, title: item.title, description: item.description }, item.id))) }), _jsx("div", { className: "second-column-wrapper", children: secondColumnData.map((item) => (_jsx(TradeBladeTemplateIs, { image: item.image, title: item.title, description: item.description }, item.id))) })] })] }));
};
export default TradebladeIs;
