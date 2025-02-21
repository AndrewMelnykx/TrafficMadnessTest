import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.scss";
const TradeBladeTemplateIs = ({ image, title, description, }) => {
    return (_jsxs("div", { className: "tradeblade-template-wrapper", children: [_jsx("img", { src: image, alt: title, className: "tradeblade-image" }), _jsxs("div", { className: "tradable-text-wrapper", children: [_jsx("b", { children: _jsx("p", { className: "tradeblade-template-title", children: title }) }), _jsx("p", { className: "tradeblade-template-title-description", children: description })] })] }));
};
export default TradeBladeTemplateIs;
