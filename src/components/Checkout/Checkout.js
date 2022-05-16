import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAddress from '../../hooks/useAddress';

const Checkout = () => {
    const [addressData, setAddressData] = useAddress({})
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

    const handleMobile = (event) => {
        setMobile(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (mobile.length === '11') {
            setError("Please enter your mobile number correctly*");
            return;
        }
        setName(user?.displayName);
        setEmail(user?.email);
        setAddressData({ name, email, mobile, address })
    }
    addressData.mobile && navigate('/ordersubmitted');
    // addressData.mobile && console.log(addressData.mobile);


    return (
        <div>
            <form onSubmit={formSubmit} className='login-form'>
                <h1>Enter a shipping address</h1>
                <div className="input-group">
                    <label htmlFor="name">Name :</label>
                    <br />
                    <input type="text" value={user?.displayName} readOnly />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your email :</label>
                    <br />
                    <input type="text" value={user.email} readOnly />
                </div>
                <div className="input-group">
                    <label htmlFor="mobile">Mobile :</label>
                    <br />
                    <input type="text" onBlur={handleMobile} placeholder='01XXXXXXXXX' required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address :</label>
                    <br />
                    <textarea type="text" onBlur={handleAddress} placeholder='Noakhali,Bangladesh' required />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button>Submit</button>
            </form>
        </div>
    );
};

export default Checkout;