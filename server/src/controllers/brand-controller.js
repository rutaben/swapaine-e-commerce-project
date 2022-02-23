const BrandModel = require('../models/brand-model');
const BrandViewModel = require('../view-models/brand-view-model');

// const ColorModel = require('../models/color-model');
// const ColorViewModel = require('../view-models/color-view-model');

// const OccasionModel = require('../models/occasion-model');
// const OccasionViewModel = require('../view-models/occasion-view-model');

// const SizeModel = require('../models/size-model');
// const SizeViewModel = require('../view-models/size-view-model');

const getBrands = async (req, res) => {
    const BrandDocs = await BrandModel.find();
    console.log(BrandDocs);
    const Brands = BrandDocs.map(Brand => new BrandViewModel(Brand));
    res.status(200).json({ brand: Brands });

    // const ColorDocs = await ColorModel.find();
    // console.log(ColorDocs);
    // const Colors = ColorDocs.map(Color => new ColorViewModel(Color));
    // res.status(200).json({ Colors });

    // const OccasionDocs = await OccasionModel.find();
    // console.log(OccasionDocs);
    // const Occasions = OccasionDocs.map(Occasion => new OccasionViewModel(Occasion));
    // res.status(200).json({ Occasions });

    // const SizeDocs = await SizeModel.find();
    // console.log(SizeDocs);
    // const Sizes = SizeDocs.map(Size => new SizeViewModel(Size));
    // res.status(200).json({ Sizes });
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
