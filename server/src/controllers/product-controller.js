const ProductModel = require('../models/product-model');
const ProductViewModel = require('../view-models/product-view-model');
const upload = require('multer')();

const getProducts = async (req, res) => {
  const {
    page = 1,
    limit = 9,
    category,
    brand,
    size,
    color
  } = req.query;
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

  const productDocs = await ProductModel
    .find(filterObject)
    .populate('category')
    .populate('brand')
    .populate('size')
    .populate('color')
    .populate('productImages')
    .limit(limit * 1)
    .skip((page - 1) * limit)

  const products = productDocs.map(product => new ProductViewModel(product));

  const allProducts = await ProductModel
    .find(filterObject)
    .populate('category')
    .populate('brand')
    .populate('size')
    .populate('color')
    .populate('productImages')
  const allProductsCount = allProducts.map((product) => new ProductViewModel(product)).length;

  res.status(200).json({
    data: products,
    totalPages: Math.ceil(allProductsCount / limit),
    currentPage: page,
  });
};

const createProduct = async (req, res) => {
  console.log(req.body);
  const { name, price, category, size, color, brand, productImages } = req.body;
  const productDoc = await ProductModel({
    name,
    price,
    category,
    size,
    color,
    brand,
    productImages,
  });

  try {
    await productDoc.save();
    const product = new ProductViewModel(productDoc);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra toks produktas`,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await ProductModel
      .findById(id)
      .populate('brand')
      .populate('category')
      .populate('color')
      .populate('size')
      .populate('productImages')
    const product = new ProductViewModel(productDoc);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await ProductModel.findByIdAndDelete(id);
    const product = new ProductViewModel(productDoc);
    res.status(200).json(product);
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
      const productDoc = await ProductModel.findByIdAndUpdate(
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
      const product = new ProductViewModel(productDoc);
      res.status(200).json(product);
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
      const productDoc = await ProductModel.findOneAndReplace(
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
      const product = new ProductViewModel(productDoc);
      res.status(200).json(product);
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
