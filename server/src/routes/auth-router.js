const express = require('express');
const {
  register,
  login,
  auth,
  checkEmail
} = require('../controllers/auth-controller');
const authConfigureMiddleware = require('../middlewares/auth-congifure-middleware');

const router = express.Router();
router.use(authConfigureMiddleware);


router.post('/', auth);

router.post('/register', register);

router.post('/login', login);

router.get('/check-email', checkEmail);

module.exports = router;