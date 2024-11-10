import React, { useState } from 'react';
import { Modal, Button, Form, Input, Divider } from 'antd';
import { GoogleOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import './RegisterLoginForm.scss';

const RegisterLoginForm = ({ visible, onClose }) => {
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    const toggleMode = () => {
        setIsRegisterMode(!isRegisterMode);
    };

    return (
        <>
            <Modal
                visible={visible}
                onCancel={onClose}
                footer={null}
                centered
                className="register-login-modal"
            >
                <h2>{isRegisterMode ? 'Sign Up' : 'Login'}</h2>
                <Form layout="vertical">
                    {isRegisterMode ? (
                        <>
                            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                                <Input placeholder="Enter your username" />
                            </Form.Item>
                            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                <Input.Password placeholder="Enter your password" />
                            </Form.Item>
                            <Form.Item label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: 'Please confirm your password!' }]}>
                                <Input.Password placeholder="Confirm your password" />
                            </Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Create Account
                            </Button>
                        </>
                    ) : (
                        <>
                            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                <Input.Password placeholder="Enter your password" />
                            </Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Login
                            </Button>
                        </>
                    )}
                    <Divider>Or continue with</Divider>
                    <div className="social-buttons">
                        <Button icon={<GoogleOutlined />} block>Google</Button>
                        <Button icon={<TwitterOutlined />} block>Twitter</Button>
                        <Button icon={<FacebookOutlined />} block>Facebook</Button>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                        {isRegisterMode ? 'Already have an account? ' : 'Don\'t have an account? '}
                        <a onClick={toggleMode} style={{ cursor: 'pointer', color: '#1890ff' }}>
                            {isRegisterMode ? 'Login' : 'Sign up'}
                        </a>
                    </p>
                </Form>
            </Modal>
        </>
    );
};

export default RegisterLoginForm;


