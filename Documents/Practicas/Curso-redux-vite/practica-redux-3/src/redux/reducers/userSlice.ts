import { createSlice } from '@reduxjs/toolkit';
import { userEmpty } from '../models';

export const UserSlice = createSlice({
    name:"userSlice",
    initialState: userEmpty,
    reducers:{
        setUser:(state, action)=>{
            state.username = action.payload.username,
            state.email = action.payload.email,
            state.token = action.payload.token,
            state.password = action.payload.password
        },
        unsetUser:()=>{
            return userEmpty
        }

    }
});

export const { setUser, unsetUser } = UserSlice.actions;

export default UserSlice.reducer; 