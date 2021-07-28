import React from 'react';
import './ReviewItems.css';
import '../Product/Product.css'
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
const ReviewItems = (props) => {
    
    const {name, price, seller, quantity} = props.product;
    function refreshPage() {
        window.location.reload(false);
      }
    return (
        <div className = "items">
            <h4 className="product-name">{name}</h4>
            <h6 className="price">$ {price}</h6>
            <p>sold by: {seller}</p>
            <h4>Quantity: {quantity}</h4> 
            <button className = "cart-btn" onClick={() => {removeFromDatabaseCart(props.product.key);refreshPage()}}>Remove</button>
        </div>
    );
};

export default ReviewItems;