import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootSaga from '../sagas/RootSaga';
import RootReducer from './reducers/RootReducer';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

export default store;