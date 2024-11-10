import React from 'react';
import { Input } from 'antd';
import './ButtonInputSearch.scss';

const ButtonInputSearch = (props) => {
    const { size, placeholder } = props;

    return (
        <div className="button-input-search">
            <Input.Search 
                size={size} 
                placeholder={placeholder} 
                className="input-component" 
                enterButton // Thêm nút vào bên phải
                allowClear // Cho phép xóa
                onSearch={(value) => console.log(value)} // Xử lý sự kiện tìm kiếm
            />
        </div>
    );
}

export default ButtonInputSearch;

