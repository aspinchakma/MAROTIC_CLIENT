
import { useEffect, useState } from 'react';
import initializeAuthentication from './../firebase/firebase.init';

const useFirebase = () => {
    initializeAuthentication();
    const [products, setProducts] = useState([])





    // load products from database 
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return {
        products

    }

}

export default useFirebase;