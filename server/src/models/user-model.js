const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const userSchema = new Mongoose.Schema({
  email: {
    type: 'string',
    required: true,
    validate: {
      validator: isEmail,
      message: 'Netinkamas el. pašto formatas'
    },
    unique: true,
  },
  name: {
    type: 'string',
    required: true,
  },
  surname: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
    validate: [
      { validator: (value) => value.length >= 8, message: 'Min 8 characters' },
      { validator: (value) => value.length <= 32, message: 'Max 32 characters' },
      { validator: (value) => /^.*[0-9].*$/.test(value), message: 'At least one number' },
      { validator: (value) => /^.*[A-ZĄČĘĖĮŠŲŪŽ].*$/.test(value), message: 'At least one capital letter' },
    ]
  },
  //repeatPassword čia nekuriame, nes mes jo niekur nesiųsime, jį reikia patikrinti iš karto
  role: {
    type: 'string',
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  }
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator);

const UserModel = Mongoose.model('User', userSchema);

module.exports = UserModel;