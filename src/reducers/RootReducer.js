import { combineReducers } from 'redux';

import user from './UserReducer';
import { dashboard } from './DashboardReducer';
const RootReducer = combineReducers({
    user,
    dashboard
});

export default RootReducer;