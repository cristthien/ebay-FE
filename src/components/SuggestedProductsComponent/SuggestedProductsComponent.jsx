// src/components/SuggestedProductsComponent/SuggestedProductsComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../CardComponent/CardComponent';
import './SuggestedProductsComponent.scss';

const SuggestedProductsComponent = ({ suggestedProducts }) => {
  return (
    <div className="suggested-products">
      <h2>Similar Items</h2>
      <div className="suggested-products-list">
        {suggestedProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <CardComponent
              name={product.name}
              price={product.price}
              priceoriginal={product.priceoriginal}
              image={product.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProductsComponent;
