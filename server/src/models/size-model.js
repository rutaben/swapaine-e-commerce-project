const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const sizeSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
}, {
    timestamps: true,
});

const SizeModel = Mongoose.model('Size', sizeSchema);

module.exports = SizeModel;