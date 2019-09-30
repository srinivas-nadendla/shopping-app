import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <header>
                <div className="header-logo">
                    <Link className="link" to='/'>Shoe Store</Link>
                </div>
                <div className="search-container" style={{display: 'none'}}>
                    <section className="search-box">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input className="search-input" id="search-input" placeholder="Search" />
                        <i className="fa fa-times-circle hide" aria-hidden="true"></i>
                    </section>
                </div>
                <div className="my-cart">
                    <Link className="link" to='/cart'>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Navbar;