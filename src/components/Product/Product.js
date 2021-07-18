import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className = "product-name">{name}</h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order now! </p>
                <button className="cart-btn" onClick={() => props.handleProducts(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>
            </div>
        </div>

    );
};

export default Product;