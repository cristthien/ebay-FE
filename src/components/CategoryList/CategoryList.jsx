// src/components/CategoryList.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import './CategoryList.scss'; // Import file SCSS cho CategoryList

const categories = [
    'Electronics',
    'Collectibles',
    'Gardens',
    'Toys',
    'Fashion',
    'Sporting Goods',
    'Business & Industrial',
    'Jewelry & Watches'
];

const CategoryList = () => {
    return (
        <div className="category-list-container">
            <div className="category-items">
                {categories.map((category, index) => (
                    <Link key={index} to={`/filter?category=${category}`} className="category-item">
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;

