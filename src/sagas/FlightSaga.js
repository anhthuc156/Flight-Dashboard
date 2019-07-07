import { takeLatest, call, put, select, take } from 'redux-saga/effects';
import { FETCH_FLIGHT, FETCH_DEPARTURE_SUCCESS, FETCH_FLIGHT_SUCCESS } from '../constants/ActionTypes';
import TravelServiceApi from '../api/TravelServiceApi';

function* handleFetchFlight() {
    try {
        
        let departureDetail = yield select(state => state.departure);

        if(!departureDetail.flightID) {
            const actionData = yield take(FETCH_DEPARTURE_SUCCESS)
            departureDetail = actionData.data;
        }
        //yield take(FETCH_DEPARTURE_SUCCESS);
        //let departureDetail = select(state => state.departureDetail);
        
        let flightDetail = yield call(TravelServiceApi.getFlight, departureDetail.flightID);
        
        yield put ({
            type: FETCH_FLIGHT_SUCCESS,
            data: flightDetail
        });
        
    } catch(e) {

    }
}

function* FlightSaga() {
    yield takeLatest(FETCH_FLIGHT, handleFetchFlight);
}

export default FlightSaga;