export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (drink) => {
    return ({type: ADD_FAVORITE, payload: drink})
}

export const removeFavorite = () => {
    return({type: REMOVE_FAVORITE })
}