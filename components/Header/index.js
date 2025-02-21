import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LogoItem from "@components/LogoItem";
import Navbar from "@components/Navbar";
import "./index.scss";
const Header = () => {
    return (_jsxs("div", { className: "header-wrapper", children: [_jsx(LogoItem, {}), _jsx(Navbar, {})] }));
};
export default Header;
