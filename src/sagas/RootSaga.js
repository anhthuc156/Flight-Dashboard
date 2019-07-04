import { takeLastest, fork } from 'redux-saga';
import UserSaga from './UserSaga';
import { LOAD_DASHBOARD } from './constants/ActionTypes';

function* RootSaga() {
    yield[
        fork(UserSaga),
        //takeLastest()
    ]
}

export default RootSaga;