const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleWare = require('../middlewares/admin-middleware');
const {
  getUsers,
  updateUser,
  updateUserMainImage,
} = require('../controllers/user-controller');

const router = express.Router();

//* middlewares

//jei neveiktu, iskelti router.use(authMiddleware, ir router get palikt admin ir getUsers);
router.use(authMiddleware);

router.get('/', adminMiddleWare, getUsers);

router.patch('/', updateUser);

router.patch('/mainImg/:mainImg', updateUserMainImage);

module.exports = router;