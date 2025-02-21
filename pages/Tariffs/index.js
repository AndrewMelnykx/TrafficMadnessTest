import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./index.scss";
import StandardCard from "./StandardCard";
import VipCard from "./VipCard";
const Tariffs = () => {
    const [selected, setSelected] = useState("spot");
    const handleClick = (button) => {
        setSelected(button);
    };
    return (_jsxs("div", { className: "tariff-wrapper", children: [_jsx("p", { className: "tariff-title", children: _jsx("b", { children: "\u0442\u0430\u0440\u0438\u0444\u044B" }) }), _jsxs("div", { className: "cards-buttons-wrapper", children: [_jsx("button", { className: `spot ${selected === "spot" ? "selected" : ""}`, onClick: () => handleClick("spot"), children: _jsx("b", { children: "\u0421\u041F\u041E\u0422" }) }), _jsx("button", { className: `futures ${selected === "futures" ? "selected" : ""}`, onClick: () => handleClick("futures"), children: _jsx("b", { children: "\u0424\u042E\u0427\u0415\u0420\u0421" }) })] }), _jsxs("div", { className: "tariff-cards-wrapper", children: [_jsx(StandardCard, {}), _jsx("div", { className: "card-vip", children: _jsx(VipCard, {}) })] })] }));
};
export default Tariffs;
