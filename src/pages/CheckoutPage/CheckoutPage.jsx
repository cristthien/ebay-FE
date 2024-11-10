import React, { useState } from 'react';
import { Button, Input, Radio, Divider, Select } from 'antd';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './CheckoutPage.scss';

const { Option } = Select;

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'India',
  'China', 'France', 'Germany', 'Japan', 'South Korea', 'Vietnam', 
  'Brazil', 'Mexico', 'Italy', 'Russia', 'South Africa', 'New Zealand',
  'Singapore', 'Netherlands', 'Switzerland', // thêm các quốc gia khác nếu cần
];

const CheckoutPage = () => {
  const [isAddressEditable, setIsAddressEditable] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null); // State để lưu quốc gia đã chọn
  const [quantity, setQuantity] = useState(1); // State để quản lý số lượng sản phẩm
  const [note, setNote] = useState(''); // State để quản lý ghi chú cho người bán

  const toggleAddressEdit = () => {
    setIsAddressEditable(!isAddressEditable);
  };

  const handleSaveAddress = () => {
    setIsAddressEditable(false);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div>
      <HeaderComponent />
      <div className="checkout-page">
        <h1>Checkout</h1>

        {/* Pay with */}
        <div className="section">
          <h2>Pay with</h2>
          <Radio.Group>
            <Radio value="creditCard">Credit Card</Radio>
            <Radio value="paypal">PayPal</Radio>
            <Radio value="applePay">Apple Pay</Radio>
          </Radio.Group>
        </div>

        <Divider />

        {/* Ship to */}
        <div className="section">
          <h1>Ship to</h1>
          <p>Current Address: 123 Main St, City, Country</p>
          <Button type="link" className='Button-change' onClick={toggleAddressEdit}>Change address</Button>

          {isAddressEditable && (
            <div className="address-form">
              <Select
                placeholder="Select Country"
                value={selectedCountry}
                onChange={(value) => setSelectedCountry(value)}
                className="address-input"
              >
                {countries.map((country) => (
                  <Option key={country} value={country}>
                    {country}
                  </Option>
                ))}
              </Select>
              <div className="form-row">
                <Input placeholder="First Name" className="address-input" />
                <Input placeholder="Last Name" className="address-input" />
              </div>
              <Input placeholder="Street" className="address-input" />
              <div className="form-row">
                <Input placeholder="City" className="address-input" />
                <Input placeholder="State/Province/Region" className="address-input" />
              </div>
              <div className="form-row">
                <Input placeholder="Zip Code" className="address-input" />
                <Input placeholder="Phone Number" className="address-input" />
              </div>
              <Button type="primary" onClick={handleSaveAddress}>Save</Button>
            </div>
          )}
        </div>

        <Divider />

        {/* Review order */}
        <div className="section">
          <h2>Review order</h2>
          <p>Product Name XYZ</p>
          <div className="quantity-control">
            <p>Total: ${699.99 * quantity}</p>
            <Button onClick={decreaseQuantity}>-</Button>
            <span>{quantity}</span>
            <Button onClick={increaseQuantity}>+</Button>
          </div>
          <div className="note-for-seller">
            <h2>Note for seller:</h2>
            <Input.TextArea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note for the seller"
              rows={3}
            />
          </div>
        </div>

        <Divider />

        {/* Gift cards and coupon */}
        <div className="section">
          <h2>Gift cards and coupon</h2>
          <Input placeholder="Enter coupon code" style={{ width: '30%', marginRight: '10px' }} />
          <Button type="primary">Apply</Button>
        </div>

        <Divider />

        {/* Summary */}
        <div className="section">
          <h2>Summary</h2>
          <p>Items total: ${699.99 * quantity}</p>
          <p>Shipping: $20.00</p>
          <p><strong>Total: ${699.99 * quantity + 20.00}</strong></p>
          <Button type="primary" size="large" className="place-order-button">Place Order</Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
