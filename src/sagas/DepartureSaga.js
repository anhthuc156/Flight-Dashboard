import { takeLatest, call, put, take, select } from 'redux-saga/effects';
import TravelServiceApi from '../api/TravelServiceApi';
import { FETCH_DEPARTURE_SUCCESS, FETCH_USER_SUCCESS, FETCH_DEPARTURE } from '../constants/ActionTypes';

function* handleFetchDeparture() {
    try {
        let user = yield select(state => state.user);
        if(!user.email) {
            const actionData = yield take(FETCH_USER_SUCCESS)
            user = actionData.data;
        }
        
        let departureDetail = yield call(TravelServiceApi.getDeparture, user);
        yield put ({
            type: FETCH_DEPARTURE_SUCCESS,
            data: departureDetail
        });
    } catch (error) {
        
    }
}


function* DepartureSaga() {
    yield takeLatest(FETCH_DEPARTURE, handleFetchDeparture)
}

export default DepartureSaga;