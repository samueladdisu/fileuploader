import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent: React.FC = () => {
  return (
      <Header style={{ backgroundColor: 'white' }}>
          <Title level={2} style={{ color: 'black', marginTop: '1rem' }}>
              File Uploader
          </Title>
      </Header>
  );
};

export default HeaderComponent;