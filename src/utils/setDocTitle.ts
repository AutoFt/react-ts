import isNil from "lodash-es/isNil";
import { DOC_TITLE } from "@config/index";
import { routeProps } from "@routes/index";

/**
 * 设置网页标题
 * 根据路由动态设置页面标题。
 */
const setDocTitle = (route: routeProps) => {
  const prefixTitle = route.meta.title;
  document.title = isNil(prefixTitle)
    ? `${prefixTitle} | ${DOC_TITLE}`
    : DOC_TITLE;
};

export default setDocTitle;
