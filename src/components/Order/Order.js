import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImg from '../../images/giphy.gif';

const Order = () => {
    const [orderCart, setOrderCart] = useState([]);
    const [ordered, setOrdered] = useState(false);

    const checkedOut = () => {
        if(orderCart.length === 0 ){
            window.alert('Please add some items to cart first!');
        }
        else{
            setOrdered(true);
        }
        
        processOrder();
        
        setOrderCart([]);
        
    }
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
                {
                    orderCart.map((pd, idx) => <ReviewItems key={idx} product={pd} ></ReviewItems>)
                }
                {
                    ordered && <img src={happyImg} alt="" />
                }
            </div>
            <div style = {cartStyle}>
                <Cart checkOutBtn = {true} checkedOut = {checkedOut} revBtnShown={false} cart = {orderCart} ></Cart>
            </div>

        </div>
    );
};

export default Order;