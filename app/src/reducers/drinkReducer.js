import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions/drinkActions';

const initialState = {
    drinks:[],
    isFetching:false,
    error: ''
};

export const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                drinks: action.payload,
                isFetching: false,
                error: ''
            });
        case(FETCH_FAIL):
            return({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}