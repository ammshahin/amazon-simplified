import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleProducts = (cartProduct) => {
        
        const newCart = [...cart, cartProduct]
        setCart(newCart);
        const vcount = newCart.filter(pd => pd.key === cartProduct.key).length;
        addToDatabaseCart(cartProduct.key, vcount)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(
                        pd => <Product
                            showCartBtn = {true}
                            handleProducts = {handleProducts}
                            product={pd}>
                        </Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart revBtnShow = {true} cart = {cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;