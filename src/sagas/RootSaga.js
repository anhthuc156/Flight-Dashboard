import { all , fork } from 'redux-saga/effects';

import UserSaga from './UserSaga';
import FlightSaga from './FlightSaga';
import DepartureSaga from './DepartureSaga';
import ForecastSaga from './ForecastSaga';

function* RootSaga() {
    yield all ([
        fork(UserSaga),
        fork(FlightSaga),
        fork(DepartureSaga),
        fork(ForecastSaga),
    ]);
}

export default RootSaga;