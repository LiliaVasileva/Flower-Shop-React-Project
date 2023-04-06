exports.getToken = () => {
    const serializedAuth = localStorage.getItem("auth");
    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);
        return auth.token
    }else {
        return {}
    }
}