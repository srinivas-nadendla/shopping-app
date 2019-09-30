import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { StoreContextConsumer } from '../core/store-context';

class PDP extends Component {
    render() {
        return (
        <StoreContextConsumer>
            {context => {
                let data = context.items.filter((item) => item.id == this.props.match.params.id)[0];
                let currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                const deliveryDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
                return (
                    <Fragment>
                        <div className="pdp-container">
                            <div className="pdp-west-panel">
                                <img src={data.img} alt={data.title} className="list-item-image" />
                            </div>
                            <div className="pdp-east-panel inline-block">
                                <div className="card-content">
                                    <span className="list-item-title">{data.title}</span>
                                    <p>{data.description}</p>
                                    <p><span className="plp-price">₹{data.price}</span>
                                        <span className="plp-actual-price"> ₹{data.actualPrice} </span>
                                        <span className="plp-off">{(((data.actualPrice - data.price) / data.actualPrice) * 100).toFixed(0)}% off</span></p>
                                </div>
                                <p>Delivery By: {deliveryDate}</p>
                                <p>Size: </p>
                                <p>Colors:</p>
                                <p>Seller: KANEGAY </p>

                            </div>
                        </div>
                        
                        <Link to="/cart"><button onClick={() => { context.cartItems.push(data) }} className="pdp-addto-cart-btn"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button></Link>
                                
                    </Fragment>
                )
            }}
        </StoreContextConsumer>
        )



    }
};

export default PDP;