import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const User = () => {
    const [user] = useAuthState(auth);
    const [showGmail, setShowGmail] = useState(false);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
    }
    const handleShowGmail = () => {
        setShowGmail(true)
    }
    const handleHideGmail = () => {
        setShowGmail(false)
    }
    !user && navigate('/login')
    return (
        <div className='user-section'>
            <h1>Hello, {user?.displayName}!</h1>
            {showGmail && <p>{user?.email}</p>}
            {showGmail ? <p onClick={handleHideGmail} className='show-hide-gmail'>Hide my Gmail</p> :
                <span onClick={handleShowGmail} className='show-hide-gmail'>Show my Gmail</span>}
            <br />
            <button onClick={() => logout()}>Log Out</button>
            <br />
            <em><b> Thanks for visiting my site</b>!
                <br />
                ♥Nurul Islam Rimon♥
            </em>
        </div>
    );
};

export default User;