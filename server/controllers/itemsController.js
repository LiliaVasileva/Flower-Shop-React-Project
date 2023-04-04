const router = require('express').Router();

const {isAuth} = require('../middlewares/authMiddleware');
const itemService = require('../services/itemsService');
const {getErrorMessage} = require('../utils/errorUtils');
const {get} = require("mongoose");


router.post('/item/create', isAuth, async (req, res) => {
    const {name, price, category, description, image} = req.body;

    const userId = req.user._id;

    try {
        const item = await itemService.create(userId, {
            name,
            price,
            category,
            description,
            image,
        });
        return res.status(200).json(item)

    } catch (error) {
        return res
            .status(404)
            .json({error: getErrorMessage(error)});
    }
});


router.post('/items/:itemId/edit', isAuth, async (req, res) => {

    const {name, price, category, description, image} = req.body;

    const itemId = req.params.itemId;

    try {
        const item = await itemService.edit(itemId, {
            name,
            price,
            category,
            description,
            image,
        });
        console.log(item)
        return res.status(200).json(item)

    } catch (error) {
        console.log(error.message)
        return res
            .status(404)
            .json({error: getErrorMessage(error)});
    }
}
)


router.get('/items', async (req, res) => {

    try {
        const items = await itemService.getAll()
        return res.status(200).json(items)

    } catch (error) {
        return res
            .status(404)
            .json({error: getErrorMessage(error)});
    }
});


router.get('/items/:itemId', async (req, res) => {


    try {
        const item = await itemService.getItem(req.params.itemId);

        return res.status(200).json(item);
    } catch (err) {
        return res.status(404).json({err: getErrorMessage(err)});
    }

})


module.exports = router;