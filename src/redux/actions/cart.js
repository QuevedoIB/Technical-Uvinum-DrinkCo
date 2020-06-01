import {
  ADD_CART_ITEM,
  UPDATE_CART_ITEM,
  DELETE_CART_ITEM,
  REPLACE_CART,
} from '../actions/types';

export const addCartItem = payload => ({
  type: ADD_CART_ITEM,
  payload,
});

export const updateCartItem = payload => ({
  type: UPDATE_CART_ITEM,
  payload,
});

export const deleteCartItem = payload => ({
  type: DELETE_CART_ITEM,
  payload,
});

export const replaceCart = payload => ({
  type: REPLACE_CART,
  payload,
});
