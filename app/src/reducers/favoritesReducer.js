import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteActions";
const initialState = {
    favorites:[],
    isFavorite: false
};

export const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_FAVORITE): {
            return {
                ...state,
                favorites:[...state.favorites,
                action.payload
                ],
                isFavorite: true
            };
        }
        case(REMOVE_FAVORITE): {
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id)),
                isFavorite: false
            }
        }
        default:
            return state;
    }
};

