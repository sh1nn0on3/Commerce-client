import { PathRouteProps } from "react-router-dom";
import HeaderLayout from "~/container/layout/Header";
import Home from "~/container/page/public/Home";
import { Login, Register } from "~/container/page/public/Login";

export interface IRouteConfig extends PathRouteProps {
  Element: JSX.Element;
  key: any;
}

const routerConfig: IRouteConfig[] = [
  {
    path: "/",
    Element: <Home />,
    key: "home",
  },
  {
    path: "/login",
    Element: <Login />,
    key: "login",
  },
  {
    path: "/register",
    Element: <Register />,
    key: "register",
  },
  {
    path: "/about",
    Element: <div>About</div>,
    key: "about",
  },
];

export default routerConfig;
