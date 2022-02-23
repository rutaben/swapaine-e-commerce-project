const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleWare = require('../middlewares/admin-middleware');
const {
  getUsers } = require('../controllers/user-controller');

const router = express.Router();

//* middlewares

//jei neveiktu, iskelti router.use(authMiddleware, ir router get palikt admin ir getUsers);
router.use(authMiddleware);

router.get('/', adminMiddleWare, getUsers);

module.exports = router;