import { FETCH_FLIGHT_SUCCESS } from '../constants/ActionTypes';
var initialState = {};

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FLIGHT_SUCCESS:
            return {
                ...action.data
            };
        default:
            return state;
    }
}

export default flightReducer;