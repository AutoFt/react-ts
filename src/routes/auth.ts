import { routeProps } from '@routes/index';

const isLoginAuth = (route: routeProps): boolean => {
  return route.path === '/login';
};

export default isLoginAuth;
