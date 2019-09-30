import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { StoreContextConsumer } from '../core/store-context';

class PLP extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listItem = this.props.items.map(item => {
            return (
                <StoreContextConsumer>
                    {context => {
                        return (
                            <div className="list-item" key={item.id}>
                                <div className="list-item-image-container">
                                    <Link to={`/pdp/${item.id}`}><img src={item.img} alt={item.title} className="list-item-image" /></Link>
                                    <Link to='/cart'><span className="plp-cart-icon" onClick={() => {
                                        context.cartItems.push(item);
                                    }}>
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </span>
                                    </Link>
                                </div>

                                <div className="card-content plp-titile-card">
                                    <span className="list-item-title">{item.title}</span>
                                    <p>{item.description}</p>
                                    <p><span className="plp-price">₹{item.price}</span>
                                        <span className="plp-actual-price"> ₹{item.actualPrice} </span>
                                        <span className="plp-off">{(((item.actualPrice - item.price) / item.actualPrice) * 100).toFixed(0)}% off</span></p>
                                </div>
                            </div>
                        )

                    }}

                </StoreContextConsumer>

            )
        })

        return (
            <div className="plp-list-item">
                {listItem}
            </div>
        )
    }
}


export default withRouter(PLP);