import { routeProps } from '@routes/index';

const isLoginAuth = (route: routeProps): boolean => {
  console.log(route);
  const isAuth = true;
  return isAuth;
};

export default isLoginAuth;
