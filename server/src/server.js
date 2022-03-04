const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router.js');
const imageRouter = require('./routes/image-router');
const productImageRouter = require('./routes/product-image-router');

const productRouter = require('./routes/product-router');
const brandRouter = require('./routes/brand-router');
const categoryRouter = require('./routes/category-router');
const colorRouter = require('./routes/color-router');
const sizeRouter = require('./routes/size-router');

const server = express();
const {
  SERVER_DOMAIN,
  SERVER_PORT,
  DB_CONNECTION,
  PUBLIC_PATH,
} = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

// Middlewares
server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.static(PUBLIC_PATH));
server.use(express.json());

// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/images', imageRouter);
server.use('/api/product-images', productImageRouter);

server.use('/api/products', productRouter);
server.use('/api/brands', brandRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/colors', colorRouter);
server.use('/api/sizes', sizeRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://${SERVER_DOMAIN}:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});

