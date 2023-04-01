import React from 'react';
import { AppstoreOutlined, UploadOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode): MenuItem {
    return {
        key,
        icon,
        label
    } as MenuItem;
}

const items: MenuProps['items'] = [getItem(<Link to="/">Upload File</Link>, 'sub1', <UploadOutlined />), getItem(<Link to="/view">View Files</Link>, 'sub2', <AppstoreOutlined />)];

const MenuComponent: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return <Menu onClick={onClick} style={{ paddingTop: '1rem' }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={items} />;
};

export default MenuComponent;
