import React from 'react';
import { Button, Col, Layout, Row, Space, Table, Tag } from 'antd';
import Sidebar from '../components/Sidebar';
import HeaderComponent from '../components/Header';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    size: number;
    date: Date;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type="primary" danger>
                    Delete
                </Button>
            </Space>
        )
    }
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Bid Document',
        size: 9,
        date: new Date()
    },
    {
        key: '2',
        name: 'image',
        size: 2,
        date: new Date()
    },
    {
        key: '3',
        name: 'video',
        size: 10,
        date: new Date()
    }
];

console.log(data)

const { Content } = Layout;

const View: React.FC = () => {
    return (
        <Layout className="container">
            <HeaderComponent />
            <Layout>
                <Sidebar />
                <Content>
                    <Row style={{ marginTop: '2rem' }}>
                        <Col span={18} offset={2}>
                            <Table columns={columns} dataSource={data} />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

export default View;
