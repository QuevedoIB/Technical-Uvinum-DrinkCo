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
    Promise.resolve(Alert.alert(i18n.t('cart.success')));
  }

  getCheckout() {
    return Promise.resolve(data);
  }
}

const service = new CheckoutService();

export default service;

// {
//   item_id: 1,
//   name: "Martin Miller's Gin",
//   country: 'Inglaterra',
//   price: 20.35,
//   qty: 2,
//   image:
//     'https://media-verticommnetwork1.netdna-ssl.com/wines/martin-millers-gin-437525_e.jpg',
// },
// {
//   item_id: 2,
//   name: 'Lan Reserva 2014',
//   country: 'Rioja',
//   price: 12.5,
//   qty: 1,
//   image:
//     'https://media-verticommnetwork1.netdna-ssl.com/wines/lan-reserva-1643435_e.jpg',
// },
// {
//   item_id: 3,
//   name: 'Cair Cuvée',
//   country: 'Ribera del Duero',
//   price: 9.95,
//   qty: 4,
//   image:
//     'https://media-verticommnetwork1.netdna-ssl.com/wines/cair-cuvee-1643394_e.jpg',
// },
// {
//   item_id: 4,
//   name: 'Zárate Albariño 2019',
//   country: 'Rías Baixas',
//   price: 11.6,
//   qty: 1,
//   image:
//     'https://media-verticommnetwork1.netdna-ssl.com/wines/zarate-albarino-1642835_e.jpg',
// },
