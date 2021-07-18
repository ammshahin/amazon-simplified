import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const itemPrice = cart.reduce((total, ct) => total + ct.price, 0)

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
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {preciseNumber(itemPrice)}</p>
            <p><small>Shipping Cost: {shippingCost} </small></p>
            <p><small>VAT: {preciseNumber(tax)}</small></p>
            <p>Total Price: {preciseNumber(grandTotal) } </p>
        </div>
    );
};

export default Cart;