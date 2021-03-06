import isNil from 'lodash-es/isNil';
import { DOC_TITLE } from '@config/index';
import { routeProps } from '@routes/index';

/**
 * 设置网页标题
 * 根据路由动态设置页面标题
 */
const setDocTitle = (route: routeProps): void => {
  const prefixTitle = route.meta.title;
  document.title = isNil(prefixTitle) ? DOC_TITLE : `${prefixTitle} - ${DOC_TITLE}`;
};

export default setDocTitle;
