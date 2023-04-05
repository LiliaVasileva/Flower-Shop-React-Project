const jwt = require('../lib/jsonwebtoken');


const SECRET = 'mysecretkeyishere';

exports.authentication = async (req, res, next) => {

    const token = req.headers['x-authorization'];


    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            res.cookie('auth', token);
            req.user = decodedToken;
            res.locals.isAuthenticated = true;
            res.locals.user = decodedToken;
        } catch (err) {
            res.clearCookie('auth');
            return res.status(401)
        }
    }

    next();
};


exports.isAuth = (req, res, next) => {
    if (!req.user) {
        console.log("There is no user")
        return "There is no user"
    }
    next()
};