import {createContext, useContext, useState} from "react";
import * as authService from "../services/authService";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

import {useLocalStorage} from "../hooks/useLocalStorage";


export const AuthContext = createContext();

export const AuthProvider = ({children,}) => {

    const navigate = useNavigate()
    const [auth, setAuth] = useLocalStorage("auth", {});
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);

    const onLogout = async () => {

        try {
            await authService.logout()
            setAuth({});
            removeCookie('auth', {path: '/'})
            localStorage.removeItem("auth")
        } catch (error) {
            console.log(error);
        }

    }

    const onRegisterSubmit = async (values) => {
        try {
            const result = await authService.register(values);
            setAuth(result);
            setCookie('auth', result.token, {path: '/'})
            navigate('/catalog');

        } catch (error) {
            console.log(error);
        }
    }
    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);
            setAuth(result);
            setCookie('auth', result.token, {path: '/'})
            navigate('/catalog');

        } catch (error) {
            console.log(error)
        }

    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.token,
        email: auth.userEmail,
        isAuthenticated: !!auth.token,
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
}