import { RouteProps } from "react-router-dom";
import loadable, { LoadableComponent } from "@loadable/component";

type meta = { title: string };
export type routeProps = {
  meta: meta;
  component: LoadableComponent<{}>;
} & Omit<RouteProps, "component">;

const LoginView = loadable(() => import("@view/login/login"));
const LayoutView = loadable(() => import("@view/layout/layout"));

const routes: routeProps[] = [
  {
    path: "/login",
    component: LoginView,
    meta: { title: "登陆" },
  },
  {
    path: "/layout",
    component: LayoutView,
    meta: { title: "主页" },
  },
];

export default routes;
