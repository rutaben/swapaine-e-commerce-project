const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');
//unikalių reikšmių validatorius

const productSchema = new Schema({
  name: {
    type: 'string',
    required: true,
  },
  price: {
    type: 'number',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  size: {
    type: Schema.Types.ObjectId,
    ref: 'Size'
  },
  color: {
    type: Schema.Types.ObjectId,
    ref: 'Color'
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand'
  },
}, {
  timestamps: true,
});

// productSchema.plugin(uniqueValidator);

const ProductModel = Mongoose.model('Product', productSchema);

module.exports = ProductModel;