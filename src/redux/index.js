import cartReducer from "./CartSlice";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})