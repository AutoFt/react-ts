import { menuItem } from '@config/menu.config';
import { Menu } from 'antd';
import { MenuMode, MenuTheme } from 'antd/lib/menu';
import { FC } from 'react';
const { Item, SubMenu } = Menu;

interface CreateMenuProps {
  menus: menuItem[];
  mode?: MenuMode;
  theme?: MenuTheme;
}

const CreateSiderMenu = (menus: menuItem[]) => {
  return menus.map(item => {
    if (item.child && item.child.length > 0) {
      const { path, name, icon, child } = item;
      return (
        <SubMenu key={path} title={name} icon={icon}>
          {CreateSiderMenu(child)}
        </SubMenu>
      );
    } else {
      const { path, name } = item;
      return <Item key={path}>{name}</Item>;
    }
  });
};

const CreateMenu: FC<CreateMenuProps> = (props: CreateMenuProps) => {
  const { menus, mode = 'inline', theme = 'dark' } = props;
  return (
    <Menu theme={theme} mode={mode}>
      {CreateSiderMenu(menus)}
    </Menu>
  );
};

export default CreateMenu;
