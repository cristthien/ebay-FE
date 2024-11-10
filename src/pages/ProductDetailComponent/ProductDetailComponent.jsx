// src/components/ProductDetailComponent/ProductDetailComponent.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Rate, Modal, Input } from 'antd';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import SuggestedProductsComponent from '../../components/SuggestedProductsComponent/SuggestedProductsComponent';
import AboutItemComponent from '../../components/AboutItemComponent/AboutItemComponent';
import './ProductDetailComponent.scss';
import FooterComponent from '../../components/FooterComponent/FooterComponent';

const ProductDetailComponent = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState('https://via.placeholder.com/600');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const product = {
    id,
    name: `Product Name ${id}`,
    price: '10,000,000 VND',
    originalPrice: '12,000,000 VND',
    description: 'This is a detailed description of the product, highlighting its features and benefits.',
    images: ['https://via.placeholder.com/600'],
    additionalImages: [
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
    timeRemaining: '4 days 3 hours 20 minutes',
  };

  const itemDetails = {
    responsibility: 'Seller assumes all responsibility for this listing.',
    itemNumber: '387531456033',
    lastUpdated: 'Oct 24, 2024 06:45:21 PDT',
    specifics: {
      Condition: 'New/Factory Sealed',
      'Convention/Event': 'Yu-Gi-Oh! TCG World Championship',
      'Card Size': 'Standard',
      Autographed: 'No',
      Set: '2017',
      Configuration: 'Box',
      Character: 'Joey Wheeler, Maximillion Pegasus, Seto Kaiba, Yami Yugi',
      'Number of Boxes': '10',
      Material: 'Aluminum, Cardboard, Paper',
      'Year Manufactured': '2017',
      'Age Level': '6+',
      Vintage: 'Yes',
      Game: 'Yu-Gi-Oh! TCG',
      Language: 'English',
      Manufacturer: 'Konami',
      Features: '1st Edition, Limited Edition, Starter Deck',
      'Country/Region of Manufacture': 'United States',
    },
  };

  const suggestedProducts = [
    { id: '1', name: 'Similar Product 1', price: '8,000,000 VND', priceoriginal: '9,500,000 VND', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Similar Product 2', price: '7,500,000 VND', priceoriginal: '8,500,000 VND', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Similar Product 3', price: '6,000,000 VND', priceoriginal: '7,000,000 VND', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Similar Product 4', price: '6,000,000 VND', priceoriginal: '7,000,000 VND', image: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Similar Product 5', price: '6,000,000 VND', priceoriginal: '7,000,000 VND', image: 'https://via.placeholder.com/150' },
  ];

  const handleBidClick = () => {
    setIsModalVisible(true);
  };

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="product-detail">
      <HeaderComponent />

      <nav className="breadcrumb">
        <span>Fashion</span> &gt; <span>Women</span>
      </nav>

      <div className="advertisement-bar">
        <span>Advertising Content Here</span>
      </div>

      <div className="product-content">
        <div className="product-images">
          <div className="additional-images">
            {product.additionalImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Additional Image ${index + 1}`}
                className="small-image"
                onClick={() => setMainImage(src)}
              />
            ))}
          </div>
          <div className="large-image">
            <img src={mainImage} alt="Product Large" className="main-image" />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <div className="pricing">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{product.originalPrice}</span>
          </div>
          <Rate allowHalf defaultValue={4.5} disabled />
          <p className="description">{product.description}</p>
          <div className="bid-info">
            <p>Kết thúc đấu giá trong: {product.timeRemaining}</p>
            <Button type="primary" className="bid-button" onClick={handleBidClick}>Place Bid</Button>
            <Button type="primary" className="buy-now-button" onClick={handleBuyNow}>Buy it now</Button>
            <Button type="default" className="watchlist-button">Add to Watchlist</Button>
          </div>
        </div>
      </div>

      <SuggestedProductsComponent suggestedProducts={suggestedProducts} />
      <AboutItemComponent itemDetails={itemDetails} />
      <div className="footer-component-container">
        <FooterComponent /> 
      </div>

      <Modal
        title="Place your bid"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        <div className="bid-details">
          <p>AU $425 + AU $49.95 shipping</p>
          <p>35 bids · 4d 12h left</p>

          {/* Các nút giá gợi ý */}
          <div className="suggested-bids">
            <Button type="default" className="bid-suggest">Bid AU $430</Button>
            <Button type="default" className="bid-suggest">Bid AU $450</Button>
            <Button type="default" className="bid-suggest">Bid AU $500</Button>
          </div>

          {/* Thang ngang */}
          <div className="divider">or</div>


          {/* Nhập giá tuỳ chọn */}
          <p>Your max bid</p>
          <div className="custom-bid">
            <Input placeholder="AU $" style={{ width: '70%' }} />
            <Button type="default" className="bid-custom-button">Bid</Button>
          </div>

          {/* Chú thích */}
          <p className="divider">
            By selecting Bid, you are committing to buy this item if you are the winning bidder.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetailComponent;






