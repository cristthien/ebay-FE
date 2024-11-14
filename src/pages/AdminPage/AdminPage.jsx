import React, { useState } from 'react';
import { Layout, Menu, Table, Button, Avatar, Typography, Badge, Modal, Input, Form } from 'antd';
import {
    DashboardOutlined,
    FileTextOutlined,
    LogoutOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import './AdminPage.scss';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const AdminPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [form] = Form.useForm();
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Function to open modal with specific content
    const openModal = (content, order = null) => {
        setModalContent(content);
        setSelectedOrder(order);
        setIsModalOpen(true);
        if (content === 'edit' && order) {
            form.setFieldsValue(order);
        }
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
        setSelectedOrder(null);
        form.resetFields();
    };

    const handleFormSubmit = (values) => {
        console.log("Form values:", values);
        closeModal();
    };

    const columns = [
        { title: 'Order #', dataIndex: 'order', key: 'order' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Badge
                    status={
                        status === 'Cancelled' ? 'error' :
                        status === 'On the way' ? 'processing' :
                        status === 'Delivered' ? 'success' : 'default'
                    }
                    text={status}
                />
            ),
        },
        { title: 'Amount', dataIndex: 'amount', key: 'amount' },
        { title: 'Store', dataIndex: 'store', key: 'store' },
        { title: 'User', dataIndex: 'user', key: 'user' },
        { title: 'Products', dataIndex: 'products', key: 'products' },
        { title: 'Created at', dataIndex: 'createdAt', key: 'createdAt' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div className="action-buttons">
                    <Button icon={<EyeOutlined />} onClick={() => openModal('view', record)} />
                    <Button icon={<EditOutlined />} onClick={() => openModal('edit', record)} />
                    <Button icon={<DeleteOutlined />} danger />
                </div>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            order: '200913',
            status: 'Cancelled',
            amount: '$19.37',
            store: 'Swaniawski M...',
            user: 'Mariah Conroy',
            products: '1 item',
            createdAt: 'December 28, 2023',
            productName: 'Sample Product',
            productImage: 'https://via.placeholder.com/150',
            deliveryAddress: '123 Main St, City, Country',
            deliveryMethod: 'Standard Shipping',
            paymentMethod: 'Credit Card',
            discountCode: 'SAVE20',
            totalAmount: '$18.50',
        },
        // Add more data entries as needed
    ];

    return (
        <Layout className="admin-page">
            <Sider width={200} className="sidebar">
                <div className="logo">AMAZING</div>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FileTextOutlined />}>
                        Posts
                    </Menu.Item>
                    <Menu.Item key="3" icon={<LogoutOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="header">
                    <div className="header-right">
                        <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
                        <span className="username">James Sullivan</span>
                    </div>
                </Header>
                <Content className="content">
                    <div className="table-header">
                        <Title level={2}>Posts</Title>
                        <Button type="primary" icon={<PlusOutlined />} onClick={() => openModal('create')}>
                            Create
                        </Button>
                    </div>
                    <Table columns={columns} dataSource={data} pagination={false} />

                    {/* Modal for View, Edit, and Create */}
                    <Modal
                        title={
                            modalContent === 'view' ? 'View Order' :
                            modalContent === 'edit' ? 'Edit Order' :
                            modalContent === 'create' ? 'Create Order' : ''
                        }
                        visible={isModalOpen}
                        onCancel={closeModal}
                        footer={modalContent === 'view' ? null : [
                            <Button key="cancel" onClick={closeModal}>Cancel</Button>,
                            <Button key="submit" type="primary" onClick={() => form.submit()}>
                                {modalContent === 'create' ? 'Create' : 'Save'}
                            </Button>
                        ]}
                    >
                        {modalContent === 'view' && selectedOrder && (
                            <div>
                                <p><strong>Order #:</strong> {selectedOrder.order}</p>
                                <p><strong>Product Name:</strong> {selectedOrder.productName}</p>
                                <img src={selectedOrder.productImage} alt="Product" style={{ width: '100%', maxWidth: '200px', marginBottom: '10px' }} />
                                <p><strong>Status:</strong> {selectedOrder.status}</p>
                                <p><strong>Amount:</strong> {selectedOrder.amount}</p>
                                <p><strong>Store:</strong> {selectedOrder.store}</p>
                                <p><strong>User:</strong> {selectedOrder.user}</p>
                                <p><strong>Products:</strong> {selectedOrder.products}</p>
                                <p><strong>Created at:</strong> {selectedOrder.createdAt}</p>
                                <p><strong>Delivery Address:</strong> {selectedOrder.deliveryAddress}</p>
                                <p><strong>Delivery Method:</strong> {selectedOrder.deliveryMethod}</p>
                                <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p>
                                <p><strong>Discount Code:</strong> {selectedOrder.discountCode}</p>
                                <p><strong>Total Amount:</strong> {selectedOrder.totalAmount}</p>
                            </div>
                        )}

                        {(modalContent === 'edit' || modalContent === 'create') && (
                            <Form form={form} onFinish={handleFormSubmit} layout="vertical">
                                <Form.Item name="order" label="Order #" rules={[{ required: true, message: 'Please enter order number' }]}>
                                    <Input placeholder="Enter order number" />
                                </Form.Item>
                                <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Please enter status' }]}>
                                    <Input placeholder="Enter status" />
                                </Form.Item>
                                <Form.Item name="amount" label="Amount" rules={[{ required: true, message: 'Please enter amount' }]}>
                                    <Input placeholder="Enter amount" />
                                </Form.Item>
                                <Form.Item name="store" label="Store" rules={[{ required: true, message: 'Please enter store' }]}>
                                    <Input placeholder="Enter store name" />
                                </Form.Item>
                                <Form.Item name="user" label="User" rules={[{ required: true, message: 'Please enter user' }]}>
                                    <Input placeholder="Enter user name" />
                                </Form.Item>
                                <Form.Item name="products" label="Products" rules={[{ required: true, message: 'Please enter products' }]}>
                                    <Input placeholder="Enter products" />
                                </Form.Item>
                                <Form.Item name="createdAt" label="Created At" rules={[{ required: true, message: 'Please enter creation date' }]}>
                                    <Input placeholder="Enter creation date" />
                                </Form.Item>
                                <Form.Item name="deliveryAddress" label="Delivery Address" rules={[{ required: true, message: 'Please enter delivery address' }]}>
                                    <Input placeholder="Enter delivery address" />
                                </Form.Item>
                                <Form.Item name="deliveryMethod" label="Delivery Method" rules={[{ required: true, message: 'Please enter delivery method' }]}>
                                    <Input placeholder="Enter delivery method" />
                                </Form.Item>
                                <Form.Item name="paymentMethod" label="Payment Method" rules={[{ required: true, message: 'Please enter payment method' }]}>
                                    <Input placeholder="Enter payment method" />
                                </Form.Item>
                                <Form.Item name="discountCode" label="Discount Code" rules={[{ required: false }]}>
                                    <Input placeholder="Enter discount code (optional)" />
                                </Form.Item>
                                <Form.Item name="totalAmount" label="Total Amount" rules={[{ required: true, message: 'Please enter total amount' }]}>
                                    <Input placeholder="Enter total amount" />
                                </Form.Item>
                            </Form>
                        )}
                    </Modal>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminPage;
