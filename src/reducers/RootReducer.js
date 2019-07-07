import { combineReducers } from 'redux';
import departureReducer from './DepartureReducer';
import flightReducer from './FlightReduce';
import forecastReducer from './ForecastReducer';
import user from './UserReducer';

const RootReducer = combineReducers({
    user,
    departure: departureReducer,
    flight: flightReducer,
    forecast: forecastReducer
});

export default RootReducer;