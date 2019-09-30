import React from 'react';
import { EmptyCart } from '../core/constants';
import {Link} from 'react-router-dom';

const EmptyCardPage = () => {
    return (
    <div className="empty-cart-container">
        <img src={EmptyCart} alt="Cart is empty" />
        <p>Looks like you have no items in your shopping cart.</p>
        <p>Click <Link to="/" className="cart-empty-link">here</Link> to continue shopping.</p>
        </div>
    )
};

export default EmptyCardPage;