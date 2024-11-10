import React, { useState } from 'react';
import { Col, Row, Button, Modal, List } from 'antd';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import './FilterPage.scss';


const FilterPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const filters = [
        { key: 'buyingFormat', label: 'Buying Format', options: ['Auction', 'Buy It Now', 'Classified Ad'] },
        { key: 'itemLocation', label: 'Item Location', options: ['Worldwide', 'US Only', 'Europe Only'] },
        { key: 'seller', label: 'Seller', options: ['Top-rated Seller', 'Authorized Seller'] },
        { key: 'shippingOptions', label: 'Shipping Options', options: ['Free Shipping', 'Expedited Shipping', 'Fast Shipping', 'Superfast Shipping', 'Ship now'] },
        { key: 'localPickup', label: 'Local Pickup', options: ['Available for Local Pickup'] },
    ];

    const products = [
        { id: 1, name: 'Product 1', price: '8,000,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '8,500,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '7,000,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', price: '7,500,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Product 5', price: '9,000,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Product 6', price: '6,500,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Product 7', price: '8,200,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Product 8', price: '9,300,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Product 3', price: '7,000,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 10, name: 'Product 4', price: '7,500,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 11, name: 'Product 5', price: '9,000,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 12, name: 'Product 6', price: '6,500,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 13, name: 'Product 7', price: '8,200,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 14, name: 'Product 8', price: '9,300,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 15, name: 'Product 3', price: '7,000,000 VND', image: 'https://via.placeholder.com/150' },
        { id: 16, name: 'Product 4', price: '7,500,000 VND', image: 'https://via.placeholder.com/150' },

    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <div>
            <HeaderComponent />

            <div className="filter-page-content">
                <Row gutter={16}>
                    {/* Sidebar for Filter */}
                    <Col span={4} className="filter-sidebar">
                        <h3>Filter Options</h3>
                        {/* Thêm các tùy chọn lọc ở đây */}
                        <p>Category Filter</p>
                        <p>Price Range</p>
                        <p>Condition</p>
                        <p>Latest Collection</p>
                        <p>Secondhand</p>
                        <p>Best Seller</p>
                        <p>Popular</p>
                        <p>Limited</p>
                        <p>Category Filter</p>
                        <p>Price Range</p>
                        <p>Condition</p>
                        <p>Latest Collection</p>
                        <p>Secondhand</p>
                        <p>Best Seller</p>
                        <p>Popular</p>
                        <p>Limited</p>
                        <p>Category Filter</p>
                        <p>Price Range</p>
                        <p>Condition</p>
                        <p>Latest Collection</p>
                        <p>Secondhand</p>
                        <p>Best Seller</p>
                        <p>Popular</p>
                        <p>Limited</p>

                        <Button type="primary" onClick={showModal}>More Filters</Button>
                    </Col>

                    {/* Product Grid */}
                    <Col span={20} className="product-grid">
                        <Row gutter={[16, 16]}>
                            {products.map((product) => (
                                <Col span={6} key={product.id}>
                                    <CardComponent
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>

            {/* Modal for More Filters */}
            <Modal
                title="More Filters"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="apply" type="primary" onClick={handleOk}>
                        Apply
                    </Button>,
                ]}
            >
                <Row>
                    {/* Filter Category List (3/10 width) */}
                    <Col span={7}>
                        <List
                            bordered
                            dataSource={filters}
                            renderItem={(filter) => (
                                <List.Item onClick={() => handleFilterClick(filter)}>
                                    {filter.label}
                                </List.Item>
                            )}
                        />
                    </Col>

                    {/* Filter Options (7/10 width) */}
                    <Col span={17} className="filter-options">
                        {selectedFilter ? (
                            <List
                                bordered
                                dataSource={selectedFilter.options}
                                renderItem={(option) => (
                                    <List.Item>
                                        <input type="checkbox" /> {option}
                                    </List.Item>
                                )}
                            />
                        ) : (
                            <p>Select a filter category</p>
                        )}
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

export default FilterPage;
