import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    productList: [],
};
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addProductToCart:(state, action)=>{
            state.productList =[...state.productList, action.payload];
            state.totalCount += 1 ;
        },
        removeProductFromCart: (state, action) => {
            const productId = action.payload;
            state.totalCount -= 1;
            state.productList = state.productList.filter(product => product.id !== productId);
        }

    },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
