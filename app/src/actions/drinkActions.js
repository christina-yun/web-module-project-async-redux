import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (searchTerm) => {
    return({type: FETCH_SUCCESS, payload:searchTerm});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload:error});
}