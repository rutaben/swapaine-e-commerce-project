const express = require('express');
const {
    getProductImages,
    uploadProductImage,
    deleteProductImage
} = require('../controllers/product-image-controller');
const uploadOne = require('../middlewares/image-upload-middleware');

const router = express.Router();

router.get('/', getProductImages);

router.post('/', uploadOne, uploadProductImage);

router.delete('/:id', deleteProductImage);

module.exports = router;

