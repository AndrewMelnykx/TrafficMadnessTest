import { Route, Routes } from "react-router-dom";
import { routerType } from "./router.types";
import pagesData from "@pages/pagesData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={path} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
