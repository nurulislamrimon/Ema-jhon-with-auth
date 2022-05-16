import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase.init';
import { useState } from 'react';


const useFirebase = () => {
    const [user, setUser] = useState();
    // const [user, setUser] = useState();

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(res => setUser(res.user));
    }
    return { user, setUser, signInWithGoogle }
}
export default useFirebase;