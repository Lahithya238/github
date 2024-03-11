import { createContext, useContext, useState } from "react";
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const InitialValues = !!localStorage.getItem('token');
    const [islogin, setislogin] = useState(InitialValues);

    const login = (logindetails) => {
        console.log('logindetails', logindetails);
        fetchdata(logindetails);
    }

    const fetchdata = async (logindetails) => {
        const response = await axios.post('https://fakestoreapi.com/auth/login', logindetails)
        console.log("response", response);
        localStorage.setItem('token', response.data.token);
        setislogin(true);
    }


    const logout = () => {
        localStorage.clear('token');
        setislogin(false);
    }

    return (
        <AuthContext.Provider value={{ login, islogin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);