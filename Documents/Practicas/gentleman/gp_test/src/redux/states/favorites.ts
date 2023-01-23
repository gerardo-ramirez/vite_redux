import { Person, localStorageType } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = []
//metodos:


//***

export const favoriteSlice = createSlice({
    name:"favotiteSlice",
    initialState:getLocalStorage(localStorageType.FAVORITES) ? JSON.parse(getLocalStorage(localStorageType.FAVORITES) as string):initialState,
    reducers:{
        addFavorite: (state,action)=>{
            setLocalStorage(localStorageType.FAVORITES,action.payload); 
          return action.payload;
        },
        deleteFavorite:(state,action)=>{
            const filterState = state.filter((p:Person )=> p.id !== action.payload.id); 
              setLocalStorage(localStorageType.FAVORITES,filterState);
           return filterState;

        }

    }
});

export const  { addFavorite, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer; 