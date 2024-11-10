import { Button } from 'antd';
import React from 'react';
import './ButtonComponent.scss'; // Import file SCSS

const ButtonComponent = ({ size, textButton, ...rest }) => {
    return (
        <Button
            className="button-component" // Thêm class cho Button
            size={size}
            type="primary" // Thay đổi loại nút thành primary
            {...rest}
        >
            <span className="text">{textButton}</span> {/* Sử dụng class cho span */}
        </Button>
    );
}

export default ButtonComponent;

