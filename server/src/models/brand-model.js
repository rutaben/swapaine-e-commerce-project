const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const brandSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
}, {
    timestamps: true,
});

const BrandModel = Mongoose.model('Brand', brandSchema);

module.exports = BrandModel;