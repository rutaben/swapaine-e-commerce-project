const ColorModel = require('../models/color-model');
const ColorViewModel = require('../view-models/color-view-model');

const getColors = async (req, res) => {
    const ColorDocs = await ColorModel.find();
    console.log(ColorDocs);
    const Colors = ColorDocs.map(Color => new ColorViewModel(Color));
    res.status(200).json({ color: Colors });
};

const createColor = async (req, res) => {
    const ColorDoc = await ColorModel(req.body);
    try {
        await ColorDoc.save();
        const Color = new ColorViewModel(ColorDoc);
        res.status(201).json(Color);
    } catch (error) {
        res.status(400).json({
            message: `Klaida: jau yra toks filtras`,
        });
    }
};

const getColor = async (req, res) => {
    const { id } = req.params;
    try {
        const ColorDoc = await ColorModel.findById(id);
        const Color = new ColorViewModel(ColorDoc);
        res.status(200).json(Color);
    } catch (error) {
        res.status(404).json({
            message: `Elementas kurio id ${id} nerastas`,
        });
    }
};

const deleteColor = async (req, res) => {
    const { id } = req.params;
    try {
        const ColorDoc = await ColorModel.findByIdAndDelete(id);
        const Color = new ColorViewModel(ColorDoc);
        res.status(200).json(Color);
    }
    catch (error) {
        console.log(error.message)
        res.status(404).json({
            message: 'Spalva nerasta'
        });
    }
};

const updateColor = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
        await ColorModel.findById(id);

        try {
            const ColorDoc = await ColorModel.findByIdAndUpdate(
                id,
                { title },
                { new: true }
            );
            const Color = new ColorViewModel(ColorDoc);
            res.status(200).json(Color);
        } catch (error) {
            res.status(400).json({ message: 'Blogi parametrai' });
        }

    } catch (error) {
        res.status(404).json({ message: 'Spalva nerasta' });
    }
};

const replaceColor = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
        await ColorModel.findById(id);

        try {
            const ColorDoc = await ColorModel.findOneAndReplace(
                id,
                { title },
                { new: true }
            );
            const Color = new ColorViewModel(ColorDoc);
            res.status(200).json(Color);
        } catch (error) {
            res.status(400).json({ message: 'Blogi parametrai' });
        }

    } catch (error) {
        res.status(404).json({ message: 'Spalva nerasta' });
    }
};

module.exports = {
    getColors,
    createColor,
    getColor,
    deleteColor,
    updateColor,
    replaceColor,
}
