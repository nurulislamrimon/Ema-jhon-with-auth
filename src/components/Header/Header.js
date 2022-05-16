import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                {/* <Link to="/Checkout">Checkout</Link> */}
                <Link to="/about">About</Link>
                {user ?
                    <Link to="/user">{user.displayName}</Link>
                    :
                    <Link to="/login">Log in</Link>
                }
            </div>
        </nav>
    );
};



export default Header;