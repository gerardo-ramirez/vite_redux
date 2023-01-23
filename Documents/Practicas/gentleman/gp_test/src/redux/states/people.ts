import { Person, localStorageType } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = []
//metodos:


//***

export const peopleSlice = createSlice({
    name:"peopleSlice",
    initialState:getLocalStorage(localStorageType.PEOPLE) ? JSON.parse(getLocalStorage(localStorageType.PEOPLE) as string):initialState,
    reducers:{

        addPeople: (state,action)=>{
          setLocalStorage(localStorageType.PEOPLE,state); 
          return action.payload;

        }

    }
});

export const  { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer; 