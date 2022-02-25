const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const imageSchema = new Schema({
  src: {
    type: 'string',
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true,
});

imageSchema.plugin(uniqueValidator);

const ImageModel = Mongoose.model('Image', imageSchema);

module.exports = ImageModel;
