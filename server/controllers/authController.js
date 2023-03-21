const router = require('express').Router();

const authService = require('../services/authService');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');


router.get('/register', (req, res) => {

  res.render('auth/register');

});

router.post('/register', async (req, res) => {
  const { email,firstName, lastName, password, repeatPassword } = req.body;

  try {
    const token = await authService.register(email,firstName, lastName, password, repeatPassword );

    res.cookie('auth', token);
    res.status(200)

  } catch (err) {
    return res
      .status(400), { error: getErrorMessage(err)}}});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);
    return token

  } catch (error) {
    return res.status(404)
  }
});

router.get('/logout', isAuth, (req, res) => {
  res.clearCookie('auth');
  res.redirect('/');
});

module.exports = router;