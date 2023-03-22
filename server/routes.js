const router = require('express').Router();

const authController = require('./controllers/authController');



router.get('/', (req, res) => {
    return res.status(200).json('true')
})

router.use(authController);


module.exports = router;