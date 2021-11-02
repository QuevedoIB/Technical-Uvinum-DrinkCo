import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateCartItem: (state, action) => {
      state.items = state.items.map(item =>
        item.item_id === action.payload.item_id
          ? { ...item, ...action.payload }
          : item,
      );
    },
    deleteCartItem: (state, action) => {
      state.items = state.items.filter(
        ({ item_id }) => item_id !== action.payload.item_id,
      );
    },
    setCart: (state, action) => {
      console.log(action);
      state.items = action.payload;
    },
  },
});

export const {
  addCartItem,
  updateCartItem,
  deleteCartItem,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
