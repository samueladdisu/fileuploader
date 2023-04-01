import React from 'react';
import { Layout, Button, message, Upload, Col, Row, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import HeaderComponent from '../components/Header';
import Sidebar from '../components/Sidebar';

const { Content } = Layout;
const { Title } = Typography;
const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    }
};

const Home: React.FC = () => {
    return (
        <Layout className="container">
            <HeaderComponent />
            <Layout>
                <Sidebar />
                <Content>
                    <Row style={{ marginTop: '2rem' }}>
                        <Col span={12} offset={2}>
                            <Title level={3} style={{ color: 'black', marginTop: '1rem' }}>
                                Upload File
                            </Title>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
                            </Dragger>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
