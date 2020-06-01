import {
  ADD_CART_ITEM,
  UPDATE_CART_ITEM,
  DELETE_CART_ITEM,
  REPLACE_CART,
} from '../actions/types';

const initialState = {
  items: [
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
  ],
};

const cartReducer = (state = initialState, {payload, type}) => {
  switch (type) {
    case REPLACE_CART:
      return {...state, items: payload};
    case ADD_CART_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        items: state.items.map(cartItem => {
          if (cartItem.item_id === payload.item_id)
            return {...cartItem, ...payload};
          return cartItem;
        }),
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        items: state.items.filter(({item_id}) => item_id !== payload.item_id),
      };
    default:
      return state;
  }
};

export default cartReducer;
