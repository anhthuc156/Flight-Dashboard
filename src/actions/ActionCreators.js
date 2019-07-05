import { FETCH_USER_SUCCESS, FETCH_USER_FAIL, FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAIL, LOAD_DASHBOARD } from '../constants/ActionTypes';

export default {
    fetchUserSuccess: (user) => ({
        type: FETCH_USER_SUCCESS,
        data: user
    }),
    fetchUserFail: (error) => ({
        type: FETCH_USER_FAIL,
        data: error
    }),
    fetchDashboardSuccess: (forecast, flight, departure) => ({
        type: FETCH_DASHBOARD_SUCCESS,
        data: {
            forecast,
            flight,
            departure
        }

    }),
    fetchDashboardFail: (error) => ({
        type: FETCH_DASHBOARD_FAIL,
        data: error
    }),
    loadDashboard: () => ({
        type: LOAD_DASHBOARD
    })
}