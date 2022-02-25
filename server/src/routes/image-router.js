const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/file-upload-middleware');
const { getImages, uploadImages, deleteImage } = require('../controllers/image-controller');
// const { uploadManyMiddleware, uploadSingleMiddleware } = require('../middlewares/file-upload-middleware');


const router = express.Router();

router.use(authMiddleware);

router.get('/', getImages);

// ikelti viena
// router.post('/', uploadSingleMiddleware('image'), (req, res) => {
// logika
//     res.status(200).send('O.K.');
// })

//* ikelti nuotrauku masyva
router.post('/', uploadManyMiddleware('files'), uploadImages)

// router.post('/', uploadManyMiddleware('files'), (req, res) => {
// logika
//     res.status(200).send('O.K.');
// })

router.delete('/:id', deleteImage)

module.exports = router;
