
import { useEffect, useState } from 'react';
import initializeAuthentication from './../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

const useFirebase = () => {
    initializeAuthentication();
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();


    // sign in 
    const handleLoginWithEmailAndPassword = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);

                setError('');

            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('wrong-password.');
                }
            })
    }

    // create user by email and password

    const handleCreateAccount = (name, email, password, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    const newUser = { displayName: result.user.displayName, email: result.user.email }

                    setUser(newUser)
                    insertUser(newUser);
                    history.push('/')
                    setError('');
                })
            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setError('Email already in use.')
                }
            })
    }

    // observer 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    }, [auth])
    const insertUser = (newUser) => {
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
    }




    // load products from database 
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return {
        products,
        handleLoginWithEmailAndPassword,
        handleCreateAccount,
        handleLogOut,
        user,
        error,
        setError,


    }

}

export default useFirebase;