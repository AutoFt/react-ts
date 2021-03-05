import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "@routes/index";
import isLoginAuth from "@routes/auth";
import setDocTitle from "@utils/setDocTitle";

const App: FC = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          render={() => {
            const isLogin = isLoginAuth(route);
            if (isLogin) {
              setDocTitle(route);
              return <route.component />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default App;
