import React, { useState } from 'react';
import { Card, Avatar } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './CardComponent.scss';

const { Meta } = Card;

const CardComponent = ({ id, name, price, priceoriginal, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card-container">
      <Card
        hoverable
        style={{ width: 270 }}
        cover={<img alt={name} src={image} />}
        onClick={handleCardClick}

      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title={name}
          description={
            <>
              <div className="card-product-price">{price}</div>
              <div className="card-product-price-original">{priceoriginal}</div>
            </>
          }
        />
        {/* Heart icon for favorite */}
        <span className="heart-icon" onClick={toggleFavorite}>
          {isFavorite ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
        </span>
      </Card>
    </div>
  );
};

export default CardComponent;



