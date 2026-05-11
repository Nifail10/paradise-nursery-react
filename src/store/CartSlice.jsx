import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.totalQuantity += 1;
        state.totalAmount += action.payload.cost;
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalAmount -= itemToRemove.cost * itemToRemove.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.cost;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (item) {
        if (item.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (i) => i.id !== action.payload
          );
          state.totalQuantity -= 1;
          state.totalAmount -= item.cost;
        } else {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalAmount -= item.cost;
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
