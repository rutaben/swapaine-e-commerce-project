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
  let productImageDoc = await ProductImageModel(req.body);
  try {
    productImageDoc['src'] = req.file.path;
    await productImageDoc.save();
    const productImage = new ProductImageViewModel(productImageDoc);
    res.status(201).json(productImage);
  } catch (error) {
    res.status(400).json({
      message: `Error: Cannot upload the image. Make sure it is under 1MB and only one image is being 
      uploaded at a time`,
    });
  }
}

// const deleteProductImage = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const productImageDoc = await ProductImageModel.findById(id);

//* čia įgalinsiu trynimą (reikia pasirašyti script'ą, kuris ištrauktų public_id kiekvenai nuotraukai,
//* pagal kuriuos galėsiu trinti ir atnaujinti nuotraukas)

//     res.status(200).send({
//       message: 'Picture has been deleted',
//       id,
//     });


//   } catch (error) {
//     res.status(404).send({
//       message: 'Cannot find a picture',
//     })
//   }
// }

module.exports = {
  getProductImages,
  uploadProductImage,
  // deleteProductImage,
};
