import React from 'react';
import { Layout } from 'antd';
import MenuComponent from '../components/Menu';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
    return (
        <Sider style={{ backgroundColor: 'white' }}>
            <MenuComponent />
        </Sider>
    );
};

export default Sidebar;
