const router = require('express').Router();

const authController = require('./controllers/authController');
const itemsController = require('./controllers/itemsController')
const profileController = require('./controllers/profileController')



router.get('/', (req, res) => {
    return res.status(200).json('true')
})

router.use(authController);
router.use(itemsController);
router.use(profileController);


module.exports = router;