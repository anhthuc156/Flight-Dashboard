import { takeLatest , fork } from 'redux-saga/effects';

import { loadDashboardSequenced } from './loadDashboardSequenced';
import { loadUser } from './UserSaga';
import { LOAD_DASHBOARD } from '../constants/ActionTypes';

function* RootSaga() {
    yield[
        fork(loadUser),
        takeLatest(LOAD_DASHBOARD, loadDashboardSequenced)
    ]
}

export default RootSaga;