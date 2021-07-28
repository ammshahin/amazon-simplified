import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Order = () => {
    const [orderCart, setOrderCart] = useState([]);

    useEffect(() => {
        const products = getDatabaseCart();
        const productKeys = Object.keys(products);


        const items = productKeys.map(pd => {
            const cartItems = fakeData.find(product => product.key === pd);
            cartItems.quantity = products[pd];
            return cartItems;
        })
        setOrderCart(items);

    }, [])
    let review = {
        width: '70%',
    };
    let cartStyle = {
        borderLeft: '1px solid lightgray',
        padding: '10px',
        
    };
    return (
        <div style={{display: 'flex'}}>
            <div style={review}>
                <h1>Ordered Products: {orderCart.length}</h1>
                {
                    orderCart.map((pd, idx) => <ReviewItems key={idx} product={pd} ></ReviewItems>)
                }
            </div>
            <div style = {cartStyle}>
                <Cart revBtnShown={false} cart = {orderCart} ></Cart>
            </div>

        </div>
    );
};

export default Order;