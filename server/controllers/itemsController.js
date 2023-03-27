const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const itemService = require('../services/itemsService');
const { getErrorMessage } = require('../utils/errorUtils');



router.post('/create', isAuth, async (req, res) => {
  const { name, price, category, description, image } = req.body;

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
      .json({ error: getErrorMessage(error) });
  }
});


router.get('/items', async (req, res) => {

  try {
    const items = await itemService.getAll()
    console.log(items)
    return res.status(200).json(items)

  } catch (error) {
    console.log(error)
    return res
      .status(404)
      .json({ error: getErrorMessage(error) });
  }
});


module.exports = router;