import React, { useRef, useState } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import './ProductShowcase.scss';
import { Card } from 'antd';

const ProductShowcase = () => {
  // Danh sách sản phẩm mẫu, tất cả có cùng một giá
  const products = Array.from({ length: 7 }, () => ({
    name: `Product`,
    price: `10.000.000 VND`,
    priceoriginal: `20.000.000 VND`,
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  }));

  const otherItems = ['Sale 15%', 'Trading Card', 'Pre-loved Luxury', 'Refurbished', 'P&A'];

  // Thiết lập các biến liên quan đến kéo
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // tốc độ kéo
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="product-showcase-container">
      <h2>Toys (Recommend for you):</h2>
      <div
        className="product-row"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {products.map((product, index) => (
          <CardComponent
            key={index}
            name={product.name}
            price={product.price}
            priceoriginal={product.priceoriginal}
            image={product.image}
          />
        ))}
      </div>

      {/* Sneaker  */}
      <h2>Sneaker (Trending today)</h2>
      <div
        className="product-row"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {products.map((product, index) => (
          <CardComponent
            key={index}
            name={product.name}
            price={product.price}
            priceoriginal={product.priceoriginal}
            image={product.image}
          />
        ))}
      </div>


      {/* Other items on amazing */}
      <h2>Other items on amazing:</h2>
      <div className="other-items">
        {otherItems.map((item, index) => (
          <Card key={index} className="circular-card">
            <div className="item-text">{item}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;


