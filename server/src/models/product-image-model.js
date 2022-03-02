const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const productImageSchema = new Schema({
  src: {
    type: 'string',
    unique: true,
  },
}, {
  timestamps: true,
});

productImageSchema.plugin(uniqueValidator);

const ProductImageModel = Mongoose.model('Product-Image', productImageSchema);

module.exports = ProductImageModel;
