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
    // console.log('Duomenu objektas', formattedData);
    const token = ProductService.validateToken();
    // brand: "6202b15d87dac037fdce5ff0"
    // category: "6202ca772ee32bcfba828e5f"
    // color: "6202b94de25b46a27b809d02"
    // name: "Ruta"
    // price: 7
    // productImages: (4)[{… }, {… }, {… }, {… }]
    // size: "6202bcf6a34e4e38fd0008c7"

    const body = new FormData();

    Object.entries(formattedData).forEach(([name, data]) => {
      if (data instanceof Array) {
        body.append(name, data);
      } else {
        body.append(name, data);
      }
    });

    const { data } = await this.requester.post('/products', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
})();

export default ProductService;
