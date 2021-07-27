import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.product;
    const showCartBtn = props.showCartBtn;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className = "product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order now! </p>
                {showCartBtn && <button className="cart-btn" onClick={() => props.handleProducts(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>}
            </div>
        </div>

    );
};

export default Product;