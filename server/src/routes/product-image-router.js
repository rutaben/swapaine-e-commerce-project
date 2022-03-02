// const express = require('express');
// const { uploadManyMiddleware } = require('../middlewares/file-upload-middleware');
// const { getProductImages, uploadProductImages } = require('../controllers/product-image-controller');


// const router = express.Router();

// router.get('/', getProductImages);

// // ikelti viena
// // router.post('/', uploadSingleMiddleware('image'), (req, res) => {
// // logika
// //     res.status(200).send('O.K.');
// // })

// router.post('/', uploadManyMiddleware('files'), uploadProductImages)

// // router.post('/', uploadManyMiddleware('files'), (req, res) => {
// // logika
// //     res.status(200).send('O.K.');
// // })

// // router.delete('/:id', deleteImage)

// module.exports = router;

const express = require('express');
const {
    getProductImages,
    uploadProductImage,
} = require('../controllers/product-image-controller');

const router = express.Router();

router.get('/', getProductImages);

router.post('/', uploadProductImage);

// router.get('/:id', getSize);

// router.delete('/:id', deleteSize);

// router.patch('/:id', updateSize);

// router.put('/:id', replaceSize);

module.exports = router;

