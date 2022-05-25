const BrandModel = require('../models/brand-model');
const BrandViewModel = require('../view-models/brand-view-model');

const getBrands = async (req, res) => {
  const BrandDocs = await BrandModel.find();
  console.log(BrandDocs);
  const Brands = BrandDocs.map(Brand => new BrandViewModel(Brand));
  res.status(200).json({ brand: Brands });
};

const createBrand = async (req, res) => {
  const BrandDoc = await BrandModel(req.body);
  try {
    await BrandDoc.save();
    const Brand = new BrandViewModel(BrandDoc);
    res.status(201).json(Brand);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra toks filtras`,
    });
  }
};

const getBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const BrandDoc = await BrandModel.findById(id);
    const Brand = new BrandViewModel(BrandDoc);
    res.status(200).json(Brand);
  } catch (error) {
    res.status(404).json({
      message: `Elementas kurio id ${id} nerastas`,
    });
  }
};

const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const BrandDoc = await BrandModel.findByIdAndDelete(id);
    const Brand = new BrandViewModel(BrandDoc);
    res.status(200).json(Brand);
  }
  catch (error) {
    console.log(error.message)
    res.status(404).json({
      message: 'Produktas nerastas'
    });
  }
};

const updateBrand = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await BrandModel.findById(id);

    try {
      const BrandDoc = await BrandModel.findByIdAndUpdate(
        id,
        { name, price },
        { new: true }
      );
      const Brand = new BrandViewModel(BrandDoc);
      res.status(200).json(Brand);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Produktas nerastas' });
  }
};

const replaceBrand = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await BrandModel.findById(id);

    try {
      const BrandDoc = await BrandModel.findOneAndReplace(
        id,
        { name, price },
        { new: true }
      );
      const Brand = new BrandViewModel(BrandDoc);
      res.status(200).json(Brand);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Produktas nerastas' });
  }
};

module.exports = {
  getBrands,
  createBrand,
  getBrand,
  deleteBrand,
  updateBrand,
  replaceBrand,
}
