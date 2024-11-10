import Slider from 'react-slick';
import React from 'react';
import { Image } from 'antd';
import './SliderComponent.scss'; // Import file SCSS

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true, // Hiển thị các chấm điều hướng
        infinite: true, // Cho phép cuộn vô hạn
        speed: 500, // Tốc độ chuyển tiếp
        slidesToShow: 1, // Số slide hiển thị
        slidesToScroll: 1, // Số slide cuộn
        autoplay: true, // Tự động chuyển slide
        autoplaySpeed: 2000, // Thời gian tự động kéo qua (3000ms = 3 giây)
    };

    return (
        <div className="slider-component"> {/* Thêm class cho phần tử bao ngoài */}
            <Slider {...settings}>
                {arrImages.map((image, index) => {
                    return (
                        <Image
                            key={index} // Thêm key cho mỗi phần tử trong mảng
                            src={image}
                            alt="slider"
                            preview={false}
                            width="100%"
                            height="300px"
                        />
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderComponent;

