const ProductModel = require('../models/product-model');
const ProductViewModel = require('../view-models/product-view-model');

const getProducts = async (req, res) => {
  const { category, brand, size, color } = req.query;
  const filterObject = {};

  if (category) {
    filterObject.category = { $in: [].concat(category) };
  }
  if (brand) {
    filterObject.brand = { $in: [].concat(brand) };
  }
  if (size) {
    filterObject.size = { $in: [].concat(size) };
  }
  if (color) {
    filterObject.color = { $in: [].concat(color) };
  }

  const ProductDocs = await ProductModel
    .find(filterObject)
    .populate('category')
    .populate('brand')
    .populate('size')
    .populate('color')
  const Products = ProductDocs.map(Product => new ProductViewModel(Product));
  res.status(200).json({ Products });
};

// const getProducts = async (req, res) => {
//   //priimti query parametrus ir is ju suformuoti filtru objekta, tinkanti find metodui
//   // if (req.query.brand !== undefined | req.query.category !== undefined | req.query.color !== undefined | req.query.size !== undefined) {
//   const ProductDocs = await ProductModel
//     .find({
//       // $or: [
//       //   {
//       $or: [
//         { brand: req.query.brand },
//         { color: req.query.color },
//         { category: req.query.category },
//         { size: req.query.size },
//         {
//           $and: [
//             { brand: req.query.brand }, { color: req.query.color },
//           ]
//         },
//         {
//           $and: [
//             { brand: req.query.brand }, { category: req.query.category },
//           ]
//         },
//         {
//           $and: [
//             { size: req.query.size }, { category: req.query.category },
//           ]
//         },
//         {
//           $and: [
//             { color: req.query.color }, { category: req.query.category },
//           ]
//         },
//         {
//           $and: [
//             { brand: req.query.brand }, { size: req.query.size },
//           ]
//         },
//         {
//           $and: [
//             { color: req.query.color }, { size: req.query.size },
//           ]
//         },
//         {
//           $and: [
//             { brand: req.query.brand }, { size: req.query.size }, { color: req.query.color },
//           ]
//         },
//         {
//           $and: [
//             { brand: req.query.brand }, { size: req.query.size }, { category: req.query.category },
//           ]
//         },
//         {
//           $and: [
//             { brand: req.query.brand }, { color: req.query.size }, { category: req.query.category },
//           ]
//         },
//         {
//           $and: [
//             { color: req.query.color }, { color: req.query.size }, { category: req.query.category },
//           ]
//         },
//         {
//           $and: [
//             { brand: req.query.brand }, { size: req.query.size }, { category: req.query.category }, { color: req.query.color },
//           ]
//         },
//       ]
//     })
//     .populate('brand')
//     .populate('category')
//     .populate('color')
//     // .populate('occasions')
//     .populate('size')
//   const Products = ProductDocs.map(Product => new ProductViewModel(Product));
//   res.status(200).json({ Products });
//   // } else {
//   //   const ProductDocs = await ProductModel
//   //     .find()
//   //     .populate('brand')
//   //     .populate('category')
//   //     .populate('color')
//   //     // .populate('occasions')
//   //     .populate('size')
//   //   const Products = ProductDocs.map(Product => new ProductViewModel(Product));
//   //   res.status(200).json({ Products });
//   // }
// };

const createProduct = async (req, res) => {
  const { name, price, category, size, color, brand } = req.body;
  const ProductDoc = await ProductModel({
    name,
    price,
    category,
    size,
    color,
    brand,
  });

  try {
    await ProductDoc.save();
    const Product = new ProductViewModel(ProductDoc);
    res.status(201).json(Product);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra toks produktas`,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const ProductDoc = await ProductModel
      .findById(id)
      .populate('brand')
      .populate('category')
      .populate('color')
      .populate('size')
    const Product = new ProductViewModel(ProductDoc);
    res.status(200).json(Product);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const ProductDoc = await ProductModel.findByIdAndDelete(id);
    const Product = new ProductViewModel(ProductDoc);
    res.status(200).json(Product);
  }
  catch (error) {
    console.log(error.message)
    res.status(404).json({
      message: 'Produktas nerastas'
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name,
    price,
    category,
    size,
    color,
    brand, } = req.body;
  try {
    await ProductModel.findById(id);

    try {
      const ProductDoc = await ProductModel.findByIdAndUpdate(
        id,
        {
          name,
          price,
          category,
          size,
          color,
          brand,
        },
        { new: true }
      );
      const Product = new ProductViewModel(ProductDoc);
      res.status(200).json(Product);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Produktas nerastas' });
  }
};

const replaceProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await ProductModel.findById(id);

    try {
      const ProductDoc = await ProductModel.findOneAndReplace(
        id,
        {
          name,
          price,
          category,
          size,
          color,
          brand,
        },
        { new: true }
      );
      const Product = new ProductViewModel(ProductDoc);
      res.status(200).json(Product);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Produktas nerastas' });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  replaceProduct,
};
