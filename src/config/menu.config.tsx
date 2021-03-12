import { CreditCardTwoTone, AlertTwoTone } from '@ant-design/icons';
import { ReactNode } from 'react';

export type menuItem = {
  name: string;
  path?: string;
  icon?: ReactNode;
  child?: menuItem[];
};

const menus: menuItem[] = [
  {
    name: '项目管理',
    path: 'i',
    icon: <CreditCardTwoTone />,
    child: [
      {
        name: '项目信息',
        path: '0',
      },
      {
        name: '项目审批',
        path: '1',
      },
      {
        name: '日常巡查',
        path: '2',
      },
      {
        name: '工程验收',
        path: '3',
      },
    ],
  },
  {
    name: '报警管理',
    path: 't',
    icon: <AlertTwoTone />,
    child: [
      {
        name: '项目信息',
        path: '4',
      },
      {
        name: '项目审批',
        path: '5',
      },
      {
        name: '日常巡查',
        path: '6',
      },
      {
        name: '工程验收',
        path: '7',
      },
    ],
  },
];

export default menus;
