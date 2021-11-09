
import initializeAuthentication from './../firebase/firebase.init';

const useFirebase = () => {
    initializeAuthentication();
    const myName = 'Aspin Chakma';





    return {
        myName,

    }

}

export default useFirebase;