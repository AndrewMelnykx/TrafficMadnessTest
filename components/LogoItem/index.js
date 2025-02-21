import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.scss";
import logoPic from "@assets/logos/logoPic.png";
import logoName from "@assets/logos/logoName.png";
const LogoItem = () => {
    return (_jsxs("div", { className: "logo-wrapper", children: [_jsx("img", { className: "logo-pic", src: logoPic, alt: "logoPic" }), _jsx("img", { className: "logo-name", src: logoName, alt: "logoTitle" })] }));
};
export default LogoItem;
