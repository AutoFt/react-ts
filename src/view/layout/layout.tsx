import { FC } from 'react';
import { Layout } from 'antd';
import CreateMenu from '@utils/createMenu';
import LayoutLogo from '@component/layoutLogo';
import menus from '@config/menu.config';
const { Sider, Header, Content } = Layout;

const LayoutView: FC = () => {
  return (
    <Layout>
      <Sider trigger={null} collapsible style={{ height: '100vh' }}>
        <LayoutLogo />
        <CreateMenu menus={menus} />
      </Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default LayoutView;
