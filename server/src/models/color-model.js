const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const colorSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
}, {
    timestamps: true,
});

const ColorModel = Mongoose.model('Color', colorSchema);

module.exports = ColorModel;