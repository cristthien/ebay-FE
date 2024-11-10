import React, { useState } from 'react';
import { Card } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CardComponent.scss';

const CardComponent = ({ id, name, price, priceoriginal, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click được truyền lên thẻ Card
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Điều hướng tới trang chi tiết sản phẩm
  };

  return (
    <div className="card-container">
      <Card
        hoverable
        style={{ width: 240 }}
        bodyStyle={{ padding: '10px' }}
        cover={<img alt={name} src={image} />}
        onClick={handleCardClick} // Thêm sự kiện onClick để điều hướng
      >
        <span className="heart-icon" onClick={toggleFavorite}>
          {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </span>
        <div className="card-product-name">{name}</div>
        <div className="card-product-price">{price}</div>
        <div className="card-product-price-original">{priceoriginal}</div>
      </Card>
    </div>
  );
};

export default CardComponent;



