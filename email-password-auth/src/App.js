import './App.css';
import { useState } from 'react';
import auth from './firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

function App() {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');


  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleNewPassword = (e) => {
    setPassword(e.target.value);
  }
  const handleRePassword = (e) => {
    setRePassword(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <div className="input-group">
          <label htmlFor="">Email</label>
          <br />
          <input type="text" onBlur={handleEmail} />
        </div>
        <div className="input-group">
          <label htmlFor="">New Password</label>
          <br />
          <input type="text" onBlur={handleNewPassword} />
        </div>
        <div className="input-group">
          <label htmlFor="">Re-type Password</label>
          <br />
          <input type="text" onBlur={handleRePassword} />
        </div>
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
