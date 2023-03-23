import {useContext, useEffect} from "react";
import {Navigate} from "react-router-dom";

import {AuthContext} from "../../context/authContext";

function Logout() {

    const {onLogout} = useContext(AuthContext);


    useEffect(() => {
        onLogout();
    }, [onLogout])

    return (
        <Navigate to="/" />
    )
}

export default Logout;