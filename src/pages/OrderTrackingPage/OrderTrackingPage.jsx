import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './OrderTrackingPage.scss';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import CancelOrderModal from '../../components/CancelOrderModal/CancelOrderModal'; // Import component hủy đơn hàng

const orders = [
    {
        id: 1,
        productName: 'Smartphone XYZ',
        orderDate: '2024-11-01',
        status: 'Shipped',
        trackingNumber: '1234567890',
        shippingAddress: '123 Main St, City, Country',
        totalAmount: '$699.99',
    },
    {
        id: 2,
        productName: 'Laptop ABC',
        orderDate: '2024-11-02',
        status: 'Processing',
        trackingNumber: '',
        shippingAddress: '456 Side St, City, Country',
        totalAmount: '$1299.99',
    },
    // Thêm nhiều đơn hàng khác ở đây...
];

const OrderTrackingPage = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
    const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);

    const showOrderDetails = (order) => {
        setSelectedOrder(order);
        setIsOrderDetailsVisible(true);
    };

    const handleCancelOrder = () => {
        setIsCancelModalVisible(true);
    };

    const handleConfirmCancellation = (selectedReason, specificReason) => {
        // Logic để hủy đơn hàng, bạn có thể hiển thị thông báo hoặc xử lý ở đây
        console.log('Order cancelled:', selectedOrder, selectedReason, specificReason);
        setIsCancelModalVisible(false);
        setIsOrderDetailsVisible(false);
        setSelectedOrder(null);
    };

    const handleCloseOrderDetails = () => {
        setIsOrderDetailsVisible(false);
        setSelectedOrder(null);
    };

    return (
        <div>
            <HeaderComponent />
            <div className="order-tracking-container">
                <h1>Your Orders</h1>
                <div className="order-list">
                    {orders.map((order) => (
                        <div key={order.id} className="order-item" onClick={() => showOrderDetails(order)}>
                            <h3>{order.productName}</h3>
                            <p>Order Date: {order.orderDate}</p>
                            <p>Status: {order.status}</p>
                            <p>Total Amount: {order.totalAmount}</p>
                        </div>
                    ))}
                </div>

                <Modal
                    visible={isOrderDetailsVisible}
                    onCancel={handleCloseOrderDetails}
                    footer={null}
                    centered
                    className="order-details-modal"
                >
                    {selectedOrder && (
                        <div className="order-details">
                            <h2>Order Details</h2>
                            <p><strong>Product Name:</strong> {selectedOrder.productName}</p>
                            <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
                            <p><strong>Status:</strong> {selectedOrder.status}</p>
                            <p><strong>Tracking Number:</strong> {selectedOrder.trackingNumber || 'N/A'}</p>
                            <p><strong>Shipping Address:</strong> {selectedOrder.shippingAddress}</p>
                            <p><strong>Total Amount:</strong> {selectedOrder.totalAmount}</p>
                            <Button type="default" onClick={handleCancelOrder}>
                                Cancel Order
                            </Button>
                        </div>
                    )}
                </Modal>

                <CancelOrderModal
                    visible={isCancelModalVisible}
                    onClose={() => setIsCancelModalVisible(false)}
                    onConfirm={handleConfirmCancellation}
                />
            </div>
        </div>
    );
};

export default OrderTrackingPage;

