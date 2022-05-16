import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/user";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const signUp = () => {
        navigate('/signup');
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return;
        }
        signInWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='login-section'>
            <form onSubmit={formSubmit} className='login-form'>
                <h1>Log in</h1>
                <div className="input-group">
                    <label htmlFor="">Your email :</label>
                    <br />
                    <input type="text" onBlur={handleEmail} placeholder='example@gmail.com' required />
                </div>
                <div className="input-group">
                    <label htmlFor="">Your password :</label>
                    <br />
                    <input type="password" onBlur={handlePassword} placeholder='**********' required />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button>Submit</button>
                <div className="or">
                    <hr /><span>Or</span><hr />
                </div>
                <button className='google-btn' onClick={() => signInWithGoogle()}> <FaGoogle /> Sing in with Google</button>
                <p>Haven't account yet? {<span onClick={signUp} style={{ cursor: 'pointer', color: 'blue' }}>Sign up</span>}</p>
            </form>
        </div>
    );
};

export default Signin;