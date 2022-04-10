import axios from 'axios';
import AuthService from './auth-service';

const ProductService = new (class ProductService {
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('No token found');
    }

    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async createProduct(formattedData) {
    try {
      const token = ProductService.validateToken();

      const formData = new FormData();

      const formattedDataArr = Object.entries(formattedData);
      formattedDataArr.forEach(([name, data]) => {
        if (data instanceof Array) {
          data.forEach((y) => {
            formData.append(name, y);
          });
        } else {
          formData.append(name, data);
        }
      });

      const { data } = await this.requester.post('/products', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
})();

export default ProductService;
