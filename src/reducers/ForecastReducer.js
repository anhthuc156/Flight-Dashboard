import { FETCH_FORECAST_SUCCESS } from '../constants/ActionTypes';
var initialState = {};

const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FORECAST_SUCCESS:
            return {
                ...action.data
            };
        default:
            return state;
    }
}

export default forecastReducer;