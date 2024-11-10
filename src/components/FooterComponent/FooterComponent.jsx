import React from 'react';
import './FooterComponent.scss';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

const FooterComponent = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <Row gutter={16}>
                    <Col span={6}>
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <FacebookOutlined />
                            <InstagramOutlined />
                            <TwitterOutlined />
                            <YoutubeOutlined />
                        </div>
                    </Col>
                    <Col span={6}>
                        <h3>Help & Contact</h3>
                        <ul>
                            <li>Customer Service</li>
                            <li>FAQs</li>
                            <li>Shipping Information</li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <h3>Address</h3>
                        <p>123 Street Name, City, Country</p>
                    </Col>
                    <Col span={6}>
                        <h3>Policies</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Return Policy</li>
                        </ul>
                    </Col>
                </Row>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
