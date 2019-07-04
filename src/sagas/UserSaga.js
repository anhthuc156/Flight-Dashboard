import { call,put } from 'redux-saga/effects';
import { loadUser as getUser  } from './LoadUser';
import ActionCreator from './action/ActionCreator';

export default function* UserSaga() {
    try {
        //get user info
        const user = yield call(getUser);
        
        //tell the store to save the user info & dispatch action for listener active loadDashboardSequence
        yield put (ActionCreator.loadUserSuccess(user));
    } catch(error) {
        yield put (ActionCreator.loadUserFail(error));
    }
}