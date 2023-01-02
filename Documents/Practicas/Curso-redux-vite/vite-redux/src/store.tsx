import { configureStore } from '@reduxjs/toolkit';


//reducer se van a encargar de actualizar al state

import  userReducer  from '../src/reducers/user/userSlice';
import cartReducer from '../src/reducers/cart/cartSlice';

export default configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer
    }
});

