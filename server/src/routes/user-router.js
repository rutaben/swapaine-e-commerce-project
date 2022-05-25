const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleWare = require('../middlewares/admin-middleware');
const {
  getUsers,
  updateUser,
} = require('../controllers/user-controller');

const router = express.Router();

router.use(authMiddleware);

router.get('/', adminMiddleWare, getUsers);

router.patch('/', updateUser);


module.exports = router;