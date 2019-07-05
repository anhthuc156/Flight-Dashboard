import { FETCH_USER_SUCCESS } from '../constants/ActionTypes';

var initialState = {

}
export const dashboard = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}