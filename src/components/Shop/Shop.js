import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, ] = useState(first10);
    products.map(pd => pd.quantity = 1);
    
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const localStorageCart = getDatabaseCart();
        const keys = Object.keys(localStorageCart);
        
        const storedItems = keys.map(key => {
            const items = fakeData.find(pd => pd.key === key);
            items.quantity = localStorageCart[key];
            return items;
        })
        setCart(storedItems);
    },[])
    
    const handleProducts = (cartProduct) => {   
        let count = 1;
        const toBeAddedKey = cartProduct.key;

        const sameProduct = cart.find(cart => cart.key === toBeAddedKey);
        let newCart;
        if(sameProduct) {
            count = cartProduct.quantity + 1;
            cartProduct.quantity = count;
            const others = cart.filter(pd => pd.key === toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            cartProduct.quantity = 1;
            newCart = [...cart, cartProduct]
        }
        setCart(newCart);
        addToDatabaseCart(cartProduct.key, count)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(
                        (pd, idx) => <Product
                            key={idx}
                            showCartBtn = {true}
                            handleProducts = {handleProducts}
                            product={pd}>
                        </Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart checkOutBtn = {false} revBtnShow = {true} cart = {cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;