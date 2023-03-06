import React from 'react';
import {Link} from 'react-router-dom';
import trezlogo from '../components/images/trezlogo.png';
import shoppingCart from '../components/images/sc.png';

function Nav() {
    return ( 
        <div>
            <div className="nav" id="navid">
                <Link to={'/'} className="logo"><img src={trezlogo} alt="logo" height="60rem" width="auto"/>  </Link>
                <div className="navb">
                    <ul  className="list">
                        <li>
                            <Link to={'/shop'} className="navitems">Shop</Link>
                        </li>
                        <li>
                            <Link to={'/blog'} className="navitems">Blog</Link>
                        </li>
                        <li>
                            <Link to={'/faq'} className="navitems">FAQ</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className="navitems">Contact Us</Link>
                        </li>
                        <li>
                            <Link to={'/cart'}><img src={shoppingCart} alt="shopping-cart" height="30rem" width="35rem"/></Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Nav;
