import { call,put } from 'redux-saga/effects';
import { loadUser as getUser } from './apiCalls';
import ActionCreators from '../actions/ActionCreators';

export function* loadUser() {
    try {
        //get user info
        const user = yield call(getUser);
        
        //tell the store to save the user info & dispatch action for listener active loadDashboardSequence
        yield put (ActionCreators.fetchUserSuccess(user));
    } catch(error) {
        yield put (ActionCreators.fetchUserFail(error));
    }
}