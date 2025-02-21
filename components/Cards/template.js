import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.scss";
import cardsLogo from "@assets/logos/cardsLogo.png";
import vectorLogo from "@assets/logos/Vector.png";
const Template = ({ pair, timeline, profitTitle, profitPercentage, target, entryDate, }) => {
    return (_jsxs("div", { className: "template-wrapper", children: [_jsx("div", { className: "card-bar" }), _jsxs("div", { className: "card-info-list", children: [_jsx("p", { className: "value-pair", children: pair }), _jsx("p", { className: "timeline", children: timeline }), _jsx("p", { className: "profit-title", children: profitTitle }), _jsxs("p", { className: "profit-percentage", children: [profitPercentage, " ", _jsx("img", { src: vectorLogo, alt: "vectorLogo" })] }), _jsxs("div", { className: "card-lower-bar", children: [_jsx("p", { className: "card-target", children: target }), _jsx("p", { className: "card-date", children: entryDate })] })] }), _jsx("img", { src: cardsLogo, alt: "cardsLogo", className: "cards-image" })] }));
};
export default Template;
