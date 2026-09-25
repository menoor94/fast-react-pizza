import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incItemQuantity(state, action) {
      const item = state.cart.find((i) => i.pizzaId === action.payload);

      if (!item) return;

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decItemQuantity(state, action) {
      const item = state.cart.find((i) => i.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incItemQuantity,
  decItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
