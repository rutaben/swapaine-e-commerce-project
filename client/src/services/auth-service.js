import axios from 'axios';
import SessionService from './session-service';
import reduxStore from '../store/index';
import { login, logout, authFailed } from '../store/auth';

// Singleton pattern + klase i karto iskviesti;
const AuthService = new (class AuthService {
  constructor() {
    const token = SessionService.get('auth_token ');

    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (token) {
      this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.authenticate(token);
    } else {
      reduxStore.dispatch(authFailed());
    }
  }

  setAuth(token) {
    this.token = token;
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  getToken() {
    return this.token;
  }

  // po login, iskart nustatom useriui token, ir grazinam useri.
  // Login page dabar negausim token, o iskart user.
  async login({ email, password }) {
    try {
      const { data: { user, token } } = await this.requester.post('/login', { email, password });
      SessionService.set('auth_token', token);
      this.setAuth(token);
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  logout() {
    SessionService.clear('auth_token');
    delete this.requester.defaults.headers.common.Authorization;
    reduxStore.dispatch(logout());
  }

  async register(formData) {
    try {
      const response = await this.requester.post('/register', formData);
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async authenticate(token) {
    try {
      const { data: user } = await this.requester.post('/', { token });
      reduxStore.dispatch(login({ user }));
      this.setAuth(token);
    } catch (error) {
      reduxStore.dispatch(authFailed());
      throw new Error(error.message);
    }
  }

  async checkEmail(email) {
    try {
      const { data } = await this.requester.get(`/check-email?email=${email}`);
      return data.available;
    } catch (error) {
      throw new Error(error.message);
    }
  }
})();

// const deleteAuth = () => {
//   delete requester.defaults.headers.common.Authorization;
// };

export default AuthService;
