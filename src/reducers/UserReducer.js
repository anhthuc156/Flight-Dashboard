import { FETCH_USER_SUCCESS } from '../constants/ActionTypes';
var initialState = {

}
const user = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return action.data;
            
    
        default:
            return state;
    }
}

export default user;