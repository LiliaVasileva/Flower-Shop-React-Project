exports.getToken = () => {
    const serializedAuth = localStorage.getItem("auth");
    console.log(typeof serializedAuth)
    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);
        return auth.token
    }else {
        return {}
    }
}