import { FC, useEffect, useState } from 'react';
import { Button } from 'antd';

const LayoutView: FC = () => {
  const [age, setAge] = useState(2);

  useEffect(() => {
    console.log('age3:', age);
    return () => console.log('age4:', age);
  }, [age]);

  return (
    <section>
      <Button type="primary" onClick={() => setAge(1)}>
        Button
      </Button>
      <div>{age}</div>
    </section>
  );
};

export default LayoutView;
