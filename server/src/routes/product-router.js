const express = require('express');
const {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  replaceProduct,
} = require('../controllers/product-controller');

const router = express.Router();

router.get('/', getProducts);

router.post('/', createProduct);

router.get('/:id', getProduct);

router.delete('/:id', deleteProduct);

router.patch('/:id', updateProduct);

router.put('/:id', replaceProduct);

module.exports = router;
