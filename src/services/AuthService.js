import axios from 'axios';
import { CHECKOUT_ENDPOINT_URL } from 'react-native-dotenv';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: CHECKOUT_ENDPOINT_URL,
    });
  }

  signUp(object) {
    //Save checkout api call
    Promise.resolve(object);
  }

  logIn(object) {
    return Promise.resolve(object);
  }
}

const service = new AuthService();

export default service;
