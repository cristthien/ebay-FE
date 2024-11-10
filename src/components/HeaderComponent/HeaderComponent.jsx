import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Col, Dropdown, Menu } from 'antd';
import { UserOutlined, CaretDownOutlined, HeartOutlined, BellOutlined, ContainerOutlined, ShopOutlined } from '@ant-design/icons'; // Import ShopOutlined icon
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import RegisterLoginForm from '../RegisterLoginForm/RegisterLoginForm';
import './HeaderComponent.scss';

const categories = [
    { label: 'Collectibles', subcategories: ['Art', 'Home & Garden', 'Antiques', 'Sports Memorabilia'] },
    { label: 'Electronics', subcategories: ['Auto Parts & Accessories', 'Computers & Tablets', 'Cameras & Photo', 'TV, Audio & Surveillance', 'Cell Phones & Accessories', 'GPS & Security Devices', 'Radar & Laser Detectors', 'Care & Detailing'] },
    { label: 'Fashion', subcategories: ['Women', 'Men', 'Jewelry & Watches', 'Shoes', 'Musical Instruments & Gear'] },
    { label: 'Health & Beauty', subcategories: ['Baby', 'Business & Industrial'] },
];

const menu = (
    <Menu>
        {categories.map(category => (
            <Menu.SubMenu key={category.label} title={category.label}>
                {category.subcategories.map(subcategory => (
                    <Menu.Item key={subcategory}>
                        <Link to={`/filter?category=${category.label}&subcategory=${subcategory}`}>{subcategory}</Link>
                    </Menu.Item>
                ))}
            </Menu.SubMenu>
        ))}
    </Menu>
);

const HeaderComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <div className="wrapper-header">
                <Col span={4}>
                    <Link to="/" className="wrapper-text-header">AMAZING</Link>
                </Col>
                <Col span={4}>
                    <Dropdown overlay={menu} trigger={['hover']}>
                        <span className="wrapper-text-header">Category</span>
                    </Dropdown>
                </Col>
                <Col span={8}>
                    <ButtonInputSearch
                        size='large'
                        bordered={false}
                        textButton='Search'
                        placeholder="Search for anything..."
                    />
                </Col>
                <Col span={4}>
                    <div className="wrapper-header-notification">
                        <HeartOutlined className="icon" />
                        <Link to="/orders">
                            <ContainerOutlined className="icon" />
                        </Link>
                        {/* Add the Shop icon for store link */}
                        <Link to="/store-pricing">
                            <ShopOutlined className="icon" />
                        </Link>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="wrapper-header-account" onClick={showModal} style={{ cursor: 'pointer' }}>
                        <UserOutlined className="icon" />
                        <div> 
                            <span className="text">Log in/Sign up</span>
                            <div>
                                <span className="text">Account</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
            {/* Modal for Register/Login Form */}
            <RegisterLoginForm visible={isModalVisible} onClose={handleModalClose} />
        </div>
    );
}

export default HeaderComponent;

