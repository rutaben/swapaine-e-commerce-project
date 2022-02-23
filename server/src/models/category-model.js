const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const categorySchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
}, {
    timestamps: true,
});

const CategoryModel = Mongoose.model('Category', categorySchema);

module.exports = CategoryModel;