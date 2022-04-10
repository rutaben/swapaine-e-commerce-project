const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require('multer');

const cloudinary = require('../middlewares/cloudinary-configure-middleware');
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "product-images",
    },
    format: async (req, file) => {
        "jpg", "png";
    },
});

const limits = {
    files: 1,
    fileSize: 2048 * 2048,
};

const upload = multer({
    storage: storage,
    limits: limits,
});
const uploadOne = upload.single('src');

module.exports = uploadOne;
