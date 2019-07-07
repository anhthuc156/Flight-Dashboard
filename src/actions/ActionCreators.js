import { 
    FETCH_USER,
    FETCH_DEPARTURE,
    FETCH_FLIGHT,
    FETCH_FORECAST
} from '../constants/ActionTypes';

export default {
    fetchUsers: () => ({
        type: FETCH_USER
    }),
    fetchDeparture: () => ({
        type: FETCH_DEPARTURE
    }),
    fetchFlight: () => ({
        type: FETCH_FLIGHT
    }),
    fetchForecast: () => ({
        type: FETCH_FORECAST
    }),    
}