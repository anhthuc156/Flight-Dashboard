import { FETCH_DEPARTURE_SUCCESS } from '../constants/ActionTypes';
var initialState = {};

const departureReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DEPARTURE_SUCCESS:
            return {
                ...action.data
            };
        default:
            return state;
    }
}

export default departureReducer;