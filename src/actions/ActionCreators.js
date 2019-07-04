import { LOAD_USER_SUCCESS, LOAD_USER_FAIL } from './../constants/ActionTypes';

export default {
    loadUserSuccess: (user) => ({
        type: LOAD_USER_SUCCESS,
        data: user
    }),
    loadUserFail: (error) => ({
        type: LOAD_USER_FAIL,
        data: error
    })
}