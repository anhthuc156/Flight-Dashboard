import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '../constants/ActionTypes';

import TravelServiceApi from '../api/TravelServiceApi';

function* handleFetchUser() {
    try {
        //get user info
        const user = yield call(TravelServiceApi.getUser);
        
        //tell the store to save the user info & dispatch action for listener active loadDashboardSequence
        yield put ({
            type: FETCH_USER_SUCCESS,
            data: user
        });
    } catch(error) {
        yield put ({
            type: FETCH_USER_FAILED,
            data: error
        });
    }
}

function* UserSaga() {
    yield takeLatest(FETCH_USER, handleFetchUser)
}

export default UserSaga;