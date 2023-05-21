import { createSlice } from "@reduxjs/toolkit";
import { IMenuItem } from "../../components/MenuItem";
import { ICartItem } from "../../components/CartItem";


export interface CartState {
  total: number;
  items: ICartItem[];
}

const initialState: CartState = {
  total: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem: ICartItem = {
        menuItem: { ...action.payload },
        quantity: 1,
      };
      
      // Only Push if Item is not already in cart
      let exists: boolean = false;
      exists = state.items.filter(item => item.menuItem.title === cartItem.menuItem.title).length > 0;
      if(!exists){
        state.total += cartItem.menuItem.price;
        state.items.push(cartItem);
      }

    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.menuItem.title === action.payload);
      if (index !== -1) {
        const removedItem = state.items[index];
        state.total -= removedItem.menuItem.price * removedItem.quantity;
        state.items.splice(index, 1);
        if(state.items.length === 0){
          state.total = 0;
        }
      }
    },
    incrementQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.menuItem.title === action.payload);
      if (index !== -1) {
        state.total += state.items[index].menuItem.price;
        state.items[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.menuItem.title === action.payload);
      if (index !== -1 && state.items[index].quantity > 1) {
        state.total -= state.items[index].menuItem.price;
        state.items[index].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
