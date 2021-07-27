import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Order = () => {
    const [orderCart, setOrderCart] = useState([]);

    useEffect(() => {
        const products = getDatabaseCart();
        const productKeys = Object.keys(products);
        

        const items =  productKeys.map( pd => {
           const cartItems =  fakeData.find(product => product.key === pd);
           cartItems.quantity = products[pd];
           return cartItems;
        })
        setOrderCart(items); 
        
    },[])
    
    return (
        <div>
            <h1>Ordered Products: {orderCart.length}</h1>
            {
                orderCart.map((pd, idx) => <ReviewItems key = {idx} product = {pd} ></ReviewItems>)
            }
        </div>
    );
};

export default Order;