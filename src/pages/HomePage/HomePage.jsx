import React from 'react';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import { TypeProduct } from '../../components/TypeProduct/TypeProduct';
import ProductShowcase from '../ProductShowcase/ProductShowcase'; // Import mới
import './HomePage.scss'; // Import file SCSS
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.png';
import VIPSubscription from '../../components/VIPSubscription/VIPSubscription';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import CategoryList from '../../components/CategoryList/CategoryList';

const HomePage = () => {

  return (
    <>
      {/* <div className="home-container">
        <div className="wrapper-type-product">
          {arr.map((item) => (
            <TypeProduct name={item} key={item} />
          ))}
        </div>
      </div> */}

      <div className="category-list">
        <CategoryList /> 
      </div>

      <div className="slider-container">
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>

      <div className="product-showcase-container">
        <ProductShowcase /> 
      </div>
      
      <div className="VIP-subscription-container">
        <VIPSubscription /> 
      </div>

      <div className="footer-component-container">
        <FooterComponent /> 
      </div>

    </>
  );
};

export default HomePage;
