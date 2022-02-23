const express = require('express');
const {
  getSizes,
  createSize,
  getSize,
  deleteSize,
  updateSize,
  replaceSize,
} = require('../controllers/size-controller');

const router = express.Router();

router.get('/', getSizes);

router.post('/', createSize);

router.get('/:id', getSize);

router.delete('/:id', deleteSize);

router.patch('/:id', updateSize);

router.put('/:id', replaceSize);

module.exports = router;
