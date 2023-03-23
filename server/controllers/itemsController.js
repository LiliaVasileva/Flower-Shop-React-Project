const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const itemService = require('../services/itemsService');
const { getErrorMessage } = require('../utils/errorUtils');



router.post('/create', isAuth, async (req, res) => {
  console.log(req.body)
  const { name, price, category, description, image } = req.body;

  const userId = req.user._id;

  try {

    await itemService.create(userId, {
      name,
      price,
      category,
      description,
      image,
    });
    return res.status(200).json('This is temp message')

  } catch (error) {

    console.log(error)
    return res
      .status(404)
      .json({ error: getErrorMessage(error) });
  }
});



module.exports = router;