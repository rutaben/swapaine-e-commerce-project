import axios from 'axios';
import AuthService from './auth-service';

const ProductImageService = new (class ProductImageService {
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

  async uploadImages(image) {
    console.log(image);
    const token = ProductImageService.validateToken();

    const formData = new FormData();
    formData.append('src', image);

    const { data } = await this.requester.post(
      '/product-images/',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return data;
  }

  async deleteImage(id) {
    console.log(id);
    const token = ProductImageService.validateToken();

    await this.requester.delete(`product-images/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
})();

export default ProductImageService;
