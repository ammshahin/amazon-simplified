import React from 'react';
import { Link } from 'react-router-dom';
import '../Product/Product.css'

const Cart = (props) => {
    const cart = props.cart;
    const checkedOut = props.checkedOut;
    const itemPrice = cart.reduce((total, ct) => total + ct.price*ct.quantity, 0)
    const revBtnShow = props.revBtnShow;
    const checkOutBtn = props.checkOutBtn;
    let shippingCost = 0;
    if(itemPrice > 40){
        shippingCost = 0;
    }
    else if(itemPrice > 15){
        shippingCost = 4.99;
    }
    else if(itemPrice > 0){
        shippingCost = 9.99;
    }

    let tax = (itemPrice / 10);

    let grandTotal = (itemPrice + shippingCost + tax);

    const preciseNumber = num => {
        const precise = num.toFixed(2);
        return Number(precise);
    }
    return (
        <div >
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {preciseNumber(itemPrice)}</p>
            <p><small>Shipping Cost: {shippingCost} </small></p>
            <p ><small>VAT: {preciseNumber(tax)}</small></p>
            <h4 style={{color:'#dc143c'}}>Total Price: {preciseNumber(grandTotal) } </h4>
            {revBtnShow && <Link to = '/order'> <button className = "cart-btn" >  Review Items</button></Link>}
            {checkOutBtn && <button className = "cart-btn" onClick={() => checkedOut()}>Checkout</button>}
        </div>
    );
};

export default Cart;