import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./index.scss";
const Navbar = () => {
    return (_jsxs("div", { className: "navbar-wrapper", children: [_jsxs("nav", { className: "nav-bar", children: [_jsx(Link, { to: "/digits", className: "nav-link", children: "\u0426\u0438\u0444\u0440\u044B" }), _jsx(Link, { to: "/online-deals", className: "nav-link", children: "\u0421\u0434\u0435\u043B\u043A\u0438 \u043E\u043D\u043B\u0430\u0439\u043D" }), _jsx(Link, { to: "/about", className: "nav-link", children: "\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" }), _jsxs(Link, { to: "/", className: "nav-link", children: ["\u043A\u0430\u043A \u043D\u0430\u0447\u0430\u0442\u044C", " "] }), _jsxs(Link, { to: "/tariffs", className: "nav-link", children: ["\u0442\u0430\u0440\u0438\u0444\u044B", " "] }), _jsxs(Link, { to: "/reviews", className: "nav-link", children: ["\u043E\u0442\u0437\u044B\u0432\u044B", " "] }), _jsx(Link, { to: "/faq", className: "nav-link", children: "FAQ" })] }), _jsxs("div", { className: "buttons-wrapper", children: [_jsx("button", { className: "login-btn", children: "\u0412\u0425\u041E\u0414" }), _jsx("button", { className: "signup-btn", children: "\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042F" })] })] }));
};
export default Navbar;
