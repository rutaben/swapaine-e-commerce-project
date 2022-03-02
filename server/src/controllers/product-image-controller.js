const ProductImageModel = require('../models/product-image-model');
const ProductImageViewModel = require('../view-models/product-image-view-model');
// const { deleteFile } = require('../helpers/file-helpers');

const getProductImages = async (req, res) => {
  const productImageDocs = await ProductImageModel.find();
  console.log(productImageDocs);
  const productImages = productImageDocs.map(productImage => new ProductImageViewModel(productImage));
  res.status(200).json({ productImages });
};

const uploadProductImage = async (req, res) => {
  const productImageDoc = await ProductImageModel(req.body);
  try {
    await productImageDoc.save();
    const productImage = new ProductImageViewModel(productImageDoc);
    res.status(201).json(productImage);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra toks filtras`,
    });
  }
};

// const uploadProductImages = async (req, res) => {
//   const userDoc = await UserModel.findOne({ email: req.user.email });
//   const productImgData = req.files.map(({ filename }) => ({
//     src: filename,
//   }));

//   const productImgDocs = await ProductImageModel.insertMany(productImgData);
//   const productImages = productImgDocs.map(x => new ProductImageViewModel(x));

//   res.status(200).send({
//     productImages,
//     product: productDoc.id,
//   });
// };


// const deleteProductImage = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const imageDoc = await ImageModel.findById(id);
//         await UserModel.findOneAndUpdate({ mainImg: id }, { mainImg: null });
//         const { PUBLIC_PATH, IMG_FOLDER_NAME } = process.env;
//         const imgPath = `${PUBLIC_PATH}/${IMG_FOLDER_NAME}/${imageDoc.src}`;
//         deleteFile(imgPath);

//         await imageDoc.delete();

//         res.status(200).send({
//             message: 'Picture has been deleted',
//             id,
//         });


//     } catch (error) {
//         res.status(404).send({
//             message: 'Cannot find a picture',
//         })
//     }
// }

module.exports = {
  getProductImages,
  uploadProductImage,
  // deleteProductImage,
}
