import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className="product">
            <img src={props.image} alt="product" />
            <p>{props.name}</p>
            <p>{props.price}$</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Product;
