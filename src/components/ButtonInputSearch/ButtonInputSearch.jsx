import React from 'react';
import { Input } from 'antd';
import './ButtonInputSearch.scss';

const { Search } = Input;

const ButtonInputSearch = (props) => {
    const { size, placeholder, onSearch } = props;

    return (
        <div className="button-input-search">
            <Search
                placeholder={placeholder || "input search text"}
                allowClear
                onSearch={onSearch}
                style={{ width: 450 }}
                size={size}
            />
        </div>
    );
};

export default ButtonInputSearch;


