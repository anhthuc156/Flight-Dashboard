import { takeLatest, call, put, take, select } from 'redux-saga/effects';
import { FETCH_FORECAST, FETCH_DEPARTURE_SUCCESS, FETCH_FORECAST_SUCCESS } from '../constants/ActionTypes';
import TravelServiceApi from '../api/TravelServiceApi';

function* handleFetchForecast() {

    let departureDetail = yield select(state => state.departure);
    if(!departureDetail.date) {
        const actionData = yield take(FETCH_DEPARTURE_SUCCESS);
        departureDetail = actionData.data;
    }

    const forecastDetail = yield call(TravelServiceApi.getForecast, departureDetail.date);
    yield put({
        type: FETCH_FORECAST_SUCCESS,
        data: forecastDetail
    })
}

function* ForecastSaga() {
    yield takeLatest(FETCH_FORECAST, handleFetchForecast)
}

export default ForecastSaga;