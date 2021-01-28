import { useState, useContext, useEffect  } from 'react';
import { } from 'react-router-dom';

import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser))
            } else {
                localStorage.removeItem('authUser');
                setUser(null)
            }
        })
        return () => listener();
    }, [])

    return { user };
}