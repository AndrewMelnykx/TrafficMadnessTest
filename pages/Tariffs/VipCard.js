import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.scss";
import Vector from "@assets/tariffs/SentanceVector5.png";
import SecondList from "@components/OfferList/SecondList";
const StandardCard = () => {
    return (_jsxs("div", { className: "card-standard vip", children: [_jsx("div", { className: "tariff-card-title", children: "VIP" }), _jsx(SecondList, {}), _jsxs("div", { className: "date-price-wrapper", children: [_jsx("div", { className: "price-wrapper", children: _jsxs("p", { className: "tariff-price", children: [_jsx("b", { children: "$534" }), _jsx("p", { className: "discount", children: "-35%" })] }) }), _jsxs("div", { className: "date-wrapper", children: [_jsx("p", { className: "date", children: "12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432" }), _jsx("img", { src: Vector, alt: "Vector", className: "date-vector" })] })] }), _jsxs("button", { className: "tariff-button", children: ["\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C", _jsx("span", { className: "tariff-button-span", children: "5 \u0434\u043D\u0435\u0439 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E" })] })] }));
};
export default StandardCard;
