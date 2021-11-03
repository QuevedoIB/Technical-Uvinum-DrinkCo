import axios from 'axios';
import { Alert } from 'react-native';
import { CHECKOUT_ENDPOINT_URL } from 'react-native-dotenv';

import i18n from '../../i18n';

import data from './data.json';

class CheckoutService {
  constructor() {
    this.auth = axios.create({
      baseURL: CHECKOUT_ENDPOINT_URL,
    });
  }

  saveCheckout(object) {
    //Save checkout api call
    return Promise.resolve(Alert.alert(i18n.t('cart.success')));
  }

  getCheckout() {
    return Promise.resolve(data);
  }
}

const service = new CheckoutService();

export default service;
