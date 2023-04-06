import {createContext, useContext, useEffect, useState} from "react";

import * as userService from "../services/userService";
import {useAuthContext} from "./authContext";


export const UserContext = createContext();

export const UserProvider = ({children,}) => {

    const {userId} = useAuthContext()
    const [user, setUser] = useState({});

    useEffect(() => {
        userService.getUser(userId)
            .then(result => {
                setUser(result)
            })
    }, [userId]);


    const context = {
        user,
    }

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )

}

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}