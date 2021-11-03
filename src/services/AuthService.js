import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: '', // auth service endpoint
    });
  }

  signUp(object) {
    return Promise.resolve(object);
  }

  logIn(object) {
    return Promise.resolve(object);
  }
}

const service = new AuthService();

export default service;
