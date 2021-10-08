
const initialState = {
    favorites:[]
};

export const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case('ADD_FAVORITE'): {
            return {
                ...state,
                favorites:[...state.favorites,
                // {
                //     title:action.payload
                // }
            ]
            };
        }
        case('REMOVE_FAVORITE'): {
            return {
                ...state,
                // favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        }
        default:
            return state;
    }
};

