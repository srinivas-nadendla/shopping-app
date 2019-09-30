import React from 'react';
import EmptyCartPage from './EmptyCart';
import { StoreContextConsumer } from '../core/store-context';

class Cart extends React.Component {
    
    render() {
        return (
            <StoreContextConsumer>
                {
                    context => {
                        if (context.cartItems.length > 0) {
                            let totalPrice = 0;
                            context.cartItems.forEach((val) => {
                                totalPrice += val.price;
                            });
                            return (
                                <div className="cart-conatiner">
                                    <div className="cart-west">
                                        <div className="cart-header">My Cart ({context.cartItems.length})</div>
                                        {context.cartItems.map((item) => {
                                            return (
                                                <div className="cart-list" key={item.id}>
                                                    <div className="cart-img-container"><img src={item.img} alt={item.title} className="cart-list-image" /></div>
                                                    <div className="cart-list-details">
                                                        <span className="list-item-title">{item.title}</span>
                                                        <p>Size: 10,Blue</p>
                                                        <p>Seller: KANNERGAY</p>
                                                        <p><span className="plp-price">₹{item.price}</span>
                                                            <span className="plp-actual-price"> ₹{item.actualPrice} </span>
                                                            <span className="plp-off">{(((item.actualPrice - item.price) / item.actualPrice) * 100).toFixed(0)}% off</span></p>
                                                    </div>
                                                    <div className="cart-delivery">
                                                        Delivery by Sat Oct 2  | <span style={{ textDecoration: 'line-through' }}>Free</span>₹40
                                                </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                    <div className="cart-east">
                                        <div className="price-header">Price Details</div>
                                        <div className="price-inner">
                                            <div>
                                                <div className="inline-block">Price ({context.cartItems.length}item)</div>
                                                <div className="float-right plp-price">₹{totalPrice}</div>
                                            </div>
                                            <div className="delivery-section">
                                                <div className="inline-block">Delivery </div>
                                                <div className="float-right plp-price">Free</div>
                                            </div>
                                            <div>
                                                <span className="inline-block">Total Payable </span>
                                                <span className="float-right plp-price">₹{totalPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        } else {
                            return (
                                <EmptyCartPage />
                            )
                        }
                    }
                }

            </StoreContextConsumer>
        )
    }
}

export default Cart;