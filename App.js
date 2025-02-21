import { jsx as _jsx } from "react/jsx-runtime";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import pagesData from "@pages/pagesData";
import "./index.css";
const App = () => (_jsx(Router, { children: _jsx(Routes, { children: pagesData.map(({ path, element }, index) => (_jsx(Route, { path: path, element: element }, index))) }) }));
export default App;
