import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = (props) => {
    let {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    
    return (
        <div>
            <h1>Product Detail:</h1>
            <Product showCartBtn = {false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;