import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0, // Ensure this is a number
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      // Ensure the price is a number
      const priceAsNumber = Number(newItem.price);

      if (existingItem) {
        existingItem.totalQuantity++;
        existingItem.totalPrice += priceAsNumber; // Ensure totalPrice is updated as a number
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: priceAsNumber, // Store price as a number
          totalQuantity: 1,
          totalPrice: priceAsNumber, // Initial total price as a number
          img: newItem.img,
        });
      }

      state.totalPrice += priceAsNumber; // Update totalPrice as a number
      state.totalQuantity++; // Update totalQuantity
    },
    removeCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        state.totalPrice -= existingItem.totalPrice; // Deduct totalPrice as a number
        state.totalQuantity -= existingItem.totalQuantity; // Deduct totalQuantity

        // Remove the item from the products array
        state.products = state.products.filter((item) => item.id !== newItem.id);
      }
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        existingItem.totalQuantity++;
        existingItem.totalPrice += existingItem.price; // Ensure this is a number
        state.totalPrice += existingItem.price; // Update totalPrice as a number
        state.totalQuantity++; // Update totalQuantity
      }
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.totalQuantity > 1) {
          existingItem.totalQuantity--;
          existingItem.totalPrice -= existingItem.price; // Ensure this is a number
          state.totalPrice -= existingItem.price; // Update totalPrice as a number
          state.totalQuantity--; // Update totalQuantity
        } else {
          // If quantity is 1, remove the item
          state.totalPrice -= existingItem.totalPrice; // Adjust totalPrice as a number
          state.totalQuantity--; // Adjust totalQuantity
          state.products = state.products.filter((item) => item.id !== id); // Remove item from cart
        }
      }
    },
  },
});

export const { addToCart, removeCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
