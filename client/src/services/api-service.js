import axios from 'axios';
import { appendUrlParams } from '../helpers/url-helpers';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getBrands = async () => {
  try {
    const response = await instance.get('/brands');
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCategories = async () => {
  try {
    const response = await instance.get('/categories');
    return response.data;
  } catch (error) {
    return error;
  }
};

const getColors = async () => {
  try {
    const response = await instance.get('/colors');
    return response.data;
  } catch (error) {
    return error;
  }
};

const getSizes = async () => {
  try {
    const response = await instance.get('/sizes');
    return response.data;
  } catch (error) {
    return error;
  }
};

const getProducts = async (params) => {
  const requestUrl = 'http://localhost:5000/api/products?';
  const generatedParams = appendUrlParams(requestUrl, params);
  try {
    const products = await axios.get(generatedParams);
    return products.data;
  } catch (error) {
    return error;
  }
};

const getProduct = async (id) => {
  try {
    const product = await instance.get(`/products/${id}`);
    return product.data;
  } catch (error) {
    return error;
  }
};

const API = {
  getProducts,
  getProduct,
  getBrands,
  getCategories,
  getColors,
  getSizes,
};

export default API;
