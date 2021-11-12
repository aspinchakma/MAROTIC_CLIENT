
import { useEffect, useState } from 'react';
import initializeAuthentication from './../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

const useFirebase = () => {
    initializeAuthentication();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modifiedCount, setModifiedCount] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();


    // sign in 
    const handleLoginWithEmailAndPassword = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)

            .then(result => {
                setUser(result.user);

                const uri = location.state?.from || '/home';
                history.push(uri)
                setError('');

            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('wrong-password.');
                }
            })
            .finally(() => setIsLoading(false))
    }

    // create user by email and password

    const handleCreateAccount = (name, email, password, history) => {
        setIsLoading(true)
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
            .finally(() => setIsLoading(false))
    }

    // observer 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
            return () => unsubscribed;
        })
    }, [auth])
    const insertUser = (newUser) => {
        fetch('https://infinite-crag-35075.herokuapp.com/user', {
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
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
            .finally(setIsLoading(false))
    }




    // load products from database 
    useEffect(() => {
        fetch('https://infinite-crag-35075.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        fetch(`https://infinite-crag-35075.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);

            })
    }, [user.email])

    return {
        products,
        handleLoginWithEmailAndPassword,
        handleCreateAccount,
        handleLogOut,
        user,
        error,
        setError,
        isLoading,
        modifiedCount,
        setModifiedCount,
        isAdmin,


    }

}

export default useFirebase;