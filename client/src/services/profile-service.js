import axios from 'axios';
import AuthService from './auth-service';
import store from '../store';
import { updateUser } from '../store/auth';

const ProfileService = new (class ProfileService {
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Can not get user images without authentication');
    }

    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async updateUserData(body) {
    const token = ProfileService.validateToken();
    const { data } = await this.requester.patch('/users/', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    store.dispatch(updateUser({ user: data.user }));
  }

  // async getUserImages() {
  //   const token = ProfileService.validateToken();

  //   const { data } = await this.requester.get('/images/', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return data.images;
  // }

  // async uploadImages(files) {
  //   const token = ProfileService.validateToken();

  //   const formData = new FormData();
  //   for (let i = 0; i < files.length; i += 1) {
  //     formData.append('files', files[i]);
  //   }

  //   const { data } = await this.requester.post('/images/', formData, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });

  //   return data.images;
  // }

  // async deleteImage(id) {
  //   const token = ProfileService.validateToken();

  //   await this.requester.delete(`images/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  // }

  // async setMainImage(id) {
  //   const token = ProfileService.validateToken();

  //   const { data } = await this.requester.patch(`users/mainImg/${id}`, null, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });

  //     store.dispatch(updateUser({ user: data.user }));
  // return true;
  //   }
})();

export default ProfileService;
