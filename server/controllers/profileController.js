const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware')
const profileService = require('../services/profileService');
const {getErrorMessage} = require("../utils/errorUtils");


router.get('/profile/:userId', isAuth, async (req, res) =>{
    try{
        const userId = req.params.userId;
        const user = await profileService.getUser(userId);
        return res.status(200).json(user)
    } catch (error) {
        return res.status(404).json({error: getErrorMessage(error)})
    }
})

module.exports = router;