import axios from 'axios';
import {CHECKOUT_ENDPOINT_URL} from 'react-native-dotenv';

class CheckoutService {
  constructor() {
    this.auth = axios.create({
      baseURL: CHECKOUT_ENDPOINT_URL,
    });
  }

  sendCheckout(object) {
    //return this.auth.post('', object);
  }

  getCheckout() {
    return this.auth.get();
  }
}

const checkoutService = new CheckoutService();

export default checkoutService;
