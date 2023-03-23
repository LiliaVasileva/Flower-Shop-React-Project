const router = require('express').Router();

const authService = require('../services/authService');
const {isAuth} = require('../middlewares/authMiddleware');
const {getErrorMessage} = require('../utils/errorUtils');
const {log} = require("winston");


router.post('/register', async (req, res) => {
    const {email, firstName, lastName, password, repeatPassword} = req.body;

    try {
        const {token, _id, userEmail} = await authService.register(email, firstName, lastName, password, repeatPassword);

        res.cookie('auth', token);

        return res.status(200).json({token, _id, userEmail})

    } catch (err) {
        return res
            .status(400).json({error: getErrorMessage(err)});
    }
});



router.post('/login', async (req, res) => {
    const {email, password} = req.body;


    try {
        const {token, _id, userEmail} = await authService.login(email, password);

        res.cookie('auth', token);

        return res.status(200).json({token, _id, userEmail})
    } catch (error) {
        return res.status(404).json({error: getErrorMessage(error)});
    }
});

router.get('/logout', isAuth, (req, res) => {

    res.clearCookie('auth');
    console.log(res.status)

});

module.exports = router;