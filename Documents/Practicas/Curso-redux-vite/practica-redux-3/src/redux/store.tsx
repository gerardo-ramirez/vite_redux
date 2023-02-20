import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice';
import cartReducer from './reducers/cartSlice'


export default configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer
    }
});
