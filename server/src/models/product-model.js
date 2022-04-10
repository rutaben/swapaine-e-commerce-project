const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: 'string',
    required: true,
  },
  price: {
    type: 'string',
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
  productImages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product-Image',
    }
  ]
}, {
  timestamps: true,
});

const ProductModel = Mongoose.model('Product', productSchema);

module.exports = ProductModel;