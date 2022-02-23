const SizeModel = require('../models/size-model');
const SizeViewModel = require('../view-models/size-view-model');

const getSizes = async (req, res) => {
    const SizeDocs = await SizeModel.find();
    console.log(SizeDocs);
    const Sizes = SizeDocs.map(Size => new SizeViewModel(Size));
    res.status(200).json({ size: Sizes });
};

const createSize = async (req, res) => {
    const SizeDoc = await SizeModel(req.body);
    try {
        await SizeDoc.save();
        const Size = new SizeViewModel(SizeDoc);
        res.status(201).json(Size);
    } catch (error) {
        res.status(400).json({
            message: `Klaida: jau yra toks filtras`,
        });
    }
};

const getSize = async (req, res) => {
    const { id } = req.params;
    try {
        const SizeDoc = await SizeModel.findById(id);
        const Size = new SizeViewModel(SizeDoc);
        res.status(200).json(Size);
    } catch (error) {
        res.status(404).json({
            message: `Elementas kurio id ${id} nerastas`,
        });
    }
};

const deleteSize = async (req, res) => {
    const { id } = req.params;
    try {
        const SizeDoc = await SizeModel.findByIdAndDelete(id);
        const Size = new SizeViewModel(SizeDoc);
        res.status(200).json(Size);
    }
    catch (error) {
        console.log(error.message)
        res.status(404).json({
            message: 'Produktas nerastas'
        });
    }
};

const updateSize = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        await SizeModel.findById(id);

        try {
            const SizeDoc = await SizeModel.findByIdAndUpdate(
                id,
                { name, price },
                { new: true }
            );
            const Size = new SizeViewModel(SizeDoc);
            res.status(200).json(Size);
        } catch (error) {
            res.status(400).json({ message: 'Blogi parametrai' });
        }

    } catch (error) {
        res.status(404).json({ message: 'Produktas nerastas' });
    }
};

const replaceSize = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        await SizeModel.findById(id);

        try {
            const SizeDoc = await SizeModel.findOneAndReplace(
                id,
                { name, price },
                { new: true }
            );
            const Size = new SizeViewModel(SizeDoc);
            res.status(200).json(Size);
        } catch (error) {
            res.status(400).json({ message: 'Blogi parametrai' });
        }

    } catch (error) {
        res.status(404).json({ message: 'Produktas nerastas' });
    }
};

module.exports = {
    getSizes,
    createSize,
    getSize,
    deleteSize,
    updateSize,
    replaceSize,
}
