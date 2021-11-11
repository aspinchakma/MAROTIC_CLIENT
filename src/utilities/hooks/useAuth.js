import { useContext } from "react";
import { AuthenticationContext } from "../ContextProvider/ContextProvider";


const useAuth = () => {
    return useContext(AuthenticationContext);
}
export default useAuth;