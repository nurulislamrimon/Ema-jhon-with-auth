import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleRePassword = (event) => {
        setRePassword(event.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Please enter your password correctly*");
            return;
        }
        if (password !== rePassword) {
            setError("Both password didn't matched*");
            return;
        }
        createUserWithEmailAndPassword(email, password);
        // console.log(email, password, error);

    }
    const signIn = () => {
        navigate('/login')
    }

    return (
        <div className='login-section'>

            <form onSubmit={formSubmit} className='login-form'>
                <h1>Sign up</h1>
                <div className="input-group">
                    <label htmlFor="email">Your email :</label>
                    <br />
                    <input type="text" onBlur={handleEmail} placeholder='example@gmail.com' required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">New password :</label>
                    <br />
                    <input type="password" onBlur={handlePassword} placeholder='**********' required />
                </div>
                <div className="input-group">
                    <label htmlFor="re-password">Re-enter password :</label>
                    <br />
                    <input type="password" onBlur={handleRePassword} placeholder='**********' required />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button>Submit</button>

                <div className="or">
                    <hr /><span>Or</span><hr />
                </div>
                <p>Already a member? {<span onClick={signIn} style={{ cursor: 'pointer', color: 'blue' }}>Sign in</span>}</p>
            </form>

        </div>
    );
};
export default Signup;