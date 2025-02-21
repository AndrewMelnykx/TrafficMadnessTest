import { jsx as _jsx } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";
const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element }) => {
        return _jsx(Route, { path: path, element: element }, title);
    });
    return _jsx(Routes, { children: pageRoutes });
};
export default Router;
