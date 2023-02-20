import {createSlice} from '@reduxjs/toolkit';
import { cartEmpty } from '../models/cart.model';

export const CartSlice = createSlice({
    name:"cartSlice",
    initialState: cartEmpty,
    reducers:{
            addProductToCart: (state, action) => {
                state.productList = [...state.productList, action.payload];
                state.totalCount += 1

            },
            removeProductFromCart: (state, action) => {
                const list = state.productList.filter(product => product.id !== action.payload);
                state.productList = list;
                state.totalCount -= 1

            },
            resetCart:()=>{
                return cartEmpty;
            }
}}); 
export const { addProductToCart, removeProductFromCart, resetCart} = CartSlice.actions;

export default CartSlice.reducer; 