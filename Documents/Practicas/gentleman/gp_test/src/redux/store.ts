import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './states/favorites';
import peopleReducer from './states/people';

export interface AppStore{
    people: Person[];
    favorites: Person[];

}

export default configureStore<AppStore>({

    reducer:{
        people: peopleReducer,
        favorites: favoriteReducer

    }
});