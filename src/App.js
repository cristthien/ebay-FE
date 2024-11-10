// src/App.js
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailComponent from './pages/ProductDetailComponent/ProductDetailComponent';
import OrderTrackingPage from './pages/OrderTrackingPage/OrderTrackingPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import StorePricingPage from './pages/StorePricingPage/StorePricingPage';
import { routes } from './routes'; // Đảm bảo đã cập nhật file routes.js
import 'antd/dist/reset.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FilterPage from './pages/FilterPage/FilterPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* Route cho trang chi tiết sản phẩm */}
          <Route path="/" exact component={<HomePage/>} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/product/:id" element={<ProductDetailComponent />} />
          <Route path="/orders" element={<OrderTrackingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/store-pricing" element={<StorePricingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
