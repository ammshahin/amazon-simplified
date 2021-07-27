import React from 'react';
import './ReviewItems.css';
import '../Product/Product.css'
const ReviewItems = (props) => {
    console.log(props.product);
    const {name, price, seller, quantity} = props.product;
    return (
        <div className = "items">
            <h4 className="product-name">{name}</h4>
            <h6 className="price">$ {price}</h6>
            <h4>Quantity: {quantity}</h4> 
            <button className = "cart-btn">Remove</button>
        </div>
    );
};

export default ReviewItems;