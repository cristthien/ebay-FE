import React, { useState } from 'react';
import { Switch, Input, Select, Button, Divider, Upload, DatePicker, TimePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './StorePricingPage.scss';

const { Option } = Select;

const StorePricingPage = () => {
    const [auctionEnabled, setAuctionEnabled] = useState(true);
    const [buyItNowEnabled, setBuyItNowEnabled] = useState(false);
    const [buyItNowPrice, setBuyItNowPrice] = useState('');
    const [startTimeOption, setStartTimeOption] = useState('Start immediately');
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [reservePriceOption, setReservePriceOption] = useState('Not selected');
    const [reservePrice, setReservePrice] = useState('');

    const handleAuctionToggle = (checked) => {
        setAuctionEnabled(checked);
    };

    const handleBuyItNowToggle = (checked) => {
        setBuyItNowEnabled(checked);
        if (!checked) {
            setBuyItNowPrice('');
        }
    };

    const handlePriceChange = (e) => {
        setBuyItNowPrice(e.target.value);
    };

    const handleStartTimeOptionChange = (value) => {
        setStartTimeOption(value);
        if (value !== 'Schedule a time') {
            setStartDate(null);
            setStartTime(null);
        }
    };

    const handleReservePriceOptionChange = (value) => {
        setReservePriceOption(value);
        if (value !== 'Set a reserve price') {
            setReservePrice('');
        }
    };

    const handleReservePriceChange = (e) => {
        setReservePrice(e.target.value);
    };

    return (
        <div> 
            <HeaderComponent />
            <div className="pricing-page">
                <div className="header">
                    <h2>Pricing</h2>
                    <Button type="link">Done</Button>
                </div>

                <Divider />

                {/* Product Details Section */}
                <div className="section">
                    <div className="section-title">
                        <h3>Product Details</h3>
                    </div>

                    {/* Upload Image */}
                    <div className="input-group">
                        <label>Product Image</label>
                        <Upload
                            name="productImage"
                            listType="picture"
                            maxCount={1}
                            beforeUpload={() => false}
                        >
                            <Button icon={<UploadOutlined />}>Upload Product Image</Button>
                        </Upload>
                    </div>

                    {/* Product Name */}
                    <div className="input-group">
                        <label>Product Name</label>
                        <Input placeholder="Enter product name" />
                    </div>

                    {/* Product Description */}
                    <div className="input-group">
                        <label>Product Description</label>
                        <Input.TextArea placeholder="Enter product description" rows={4} />
                    </div>

                    {/* Product Category */}
                    <div className="input-group">
                        <label>Product Category</label>
                        <Select placeholder="Select a category">
                            <Option value="electronics">Electronics</Option>
                            <Option value="fashion">Fashion</Option>
                            <Option value="home">Home</Option>
                            <Option value="toys">Toys</Option>
                            <Option value="sports">Sports</Option>
                        </Select>
                    </div>
                </div>

                <Divider />

                {/* Auction Section */}
                <div className="section">
                    <div className="section-title">
                        <h3>Auction</h3>
                        <Switch checked={auctionEnabled} onChange={handleAuctionToggle} />
                    </div>
                    <p>Set a starting amount and let buyers compete for your item.</p>

                    {auctionEnabled && (
                        <>
                            <div className="input-group">
                                <label>Starting bid</label>
                                <Input placeholder="Enter a starting bid" />
                            </div>

                            <div className="input-group">
                                <label>Auction duration</label>
                                <Select defaultValue="7 days">
                                    <Option value="1 day">1 day</Option>
                                    <Option value="3 days">3 days</Option>
                                    <Option value="5 days">5 days</Option>
                                    <Option value="7 days">7 days</Option>
                                    <Option value="10 days">10 days</Option>
                                </Select>
                            </div>

                            <div className="input-group">
                                <label>Offers</label>
                                <Select defaultValue="Allow offers">
                                    <Option value="Allow offers">Allow offers</Option>
                                    <Option value="Do not allow offers">Do not allow offers</Option>
                                </Select>
                            </div>

                            <div className="input-group">
                                <label>Reserve price</label>
                                <Select 
                                    value={reservePriceOption} 
                                    onChange={handleReservePriceOptionChange}
                                >
                                    <Option value="Not selected">Not selected</Option>
                                    <Option value="Set a reserve price">Set a reserve price</Option>
                                </Select>
                            </div>

                            {/* Input for Reserve Price */}
                            {reservePriceOption === 'Set a reserve price' && (
                                <div className="input-group">
                                    <label>Reserve Price</label>
                                    <Input
                                        placeholder="Enter reserve price"
                                        value={reservePrice}
                                        onChange={handleReservePriceChange}
                                    />
                                </div>
                            )}

                            <div className="input-group">
                                <label>Scheduled start time</label>
                                <Select 
                                    value={startTimeOption} 
                                    onChange={handleStartTimeOptionChange}
                                >
                                    <Option value="Start immediately">Start immediately</Option>
                                    <Option value="Schedule a time">Schedule a time</Option>
                                </Select>
                            </div>

                            {startTimeOption === 'Schedule a time' && (
                                <div className="input-group">
                                    <label>Set start date and time</label>
                                    <DatePicker 
                                        onChange={(date) => setStartDate(date)} 
                                        placeholder="Select start date" 
                                    />
                                    <TimePicker 
                                        onChange={(time) => setStartTime(time)} 
                                        placeholder="Select start time" 
                                        format="HH:mm"
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>

                <Divider />

                {/* Buy It Now Section */}
                <div className="section">
                    <div className="section-title">
                        <h3>Buy It Now</h3>
                        <Switch checked={buyItNowEnabled} onChange={handleBuyItNowToggle} />
                    </div>
                    <p>Buyers can purchase immediately at this price.</p>

                    {buyItNowEnabled && (
                        <div className="input-group">
                            <label>Buy It Now Price</label>
                            <Input
                                placeholder="Enter Buy It Now price"
                                value={buyItNowPrice}
                                onChange={handlePriceChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StorePricingPage;
