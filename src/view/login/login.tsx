import { FC, useState, useEffect } from "react";
import { Button } from "antd";
import { loginView } from "@view/login/login.module.less";

const LoginView: FC = () => {
  const [age, setAge] = useState(10);

  useEffect(() => {
    console.log("age1:", age);
    return () => console.log("age2:", age);
  }, [age]);

  return (
    <section className={loginView}>
      <Button type="primary" onClick={() => setAge(1)}>
        Button
      </Button>
      <Button type="dashed" href="#/layout">
        Dashed Button
      </Button>
    </section>
  );
};

export default LoginView;
