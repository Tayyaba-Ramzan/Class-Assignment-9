import { Cart } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const uuid = Math.floor(1000 + Math.random() * 9000);
      const newobj = { ...action.payload, uuid };
      state.push(newobj);
    },

    // Increment of item in cart
    addItem(state, action) {
      const obj = state.find(
        (value) =>
          value.id === action.payload.id &&
          value.color === action.payload.color &&
          value.size === action.payload.size
      );

      if (obj) {
        ++obj.quantity; // Increment quantity
        const newState = state.filter((value) => value.id !== obj?.id);
        state.splice(0, state.length, ...newState, obj); // Update state with new array
        return;
      }
    },

    // Decrement of item
    subItem(state, action) {
      const obj = state.find(
        (value) =>
          value.id === action.payload.id &&
          value.color === action.payload.color &&
          value.size === action.payload.size
      );

      if (obj !== undefined) {
        if (obj.quantity <= 1) {
          return state.filter((value) => value.uuid !== obj?.uuid);
        }
        --obj.quantity; // Decrement quantity
        const newState = state.filter((value) => value.uuid !== obj?.uuid);
        state.splice(0, state.length, ...newState, obj); // Update state with new array
        return;
      }
    },

    // Delete item from the cart
    deleteItem(state, { payload }) {
      return state.filter((value) => value.uuid !== payload);
    },
  },
});

export const { addToCart, deleteItem, addItem, subItem } = cartSlice.actions;

export default cartSlice.reducer;