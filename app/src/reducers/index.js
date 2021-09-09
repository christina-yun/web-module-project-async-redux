import { combineReducers } from "redux";

import { drinkReducer } from "./drinkReducer";
import { favoritesReducer } from "./favoritesReducer";

export default combineReducers({
    cocktail: drinkReducer,
    faves: favoritesReducer
});