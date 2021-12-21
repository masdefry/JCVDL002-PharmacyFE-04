import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_REQUEST,
    USER_KEEP_LOGIN_DATA,
    USER_KEEP_LOGIN_FAIL,
    USER_KEEP_LOGOUT,
    USER_PROFILE_DATA,
    USER_PROFILE_DELETE,
    USER_PROFILE_FAIL
} from '../../Supports/Constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return { userInfo: action.payload, checkStorage: true };
        case USER_REGISTER_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};

export const userKeepLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_KEEP_LOGIN_DATA:
            return { userLoginInfo: action.payload };
        case USER_KEEP_LOGIN_FAIL:
            return { error: action.payload };
        case USER_KEEP_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_PROFILE_DATA:
            return { userDetail: action.payload };
        case USER_PROFILE_FAIL:
            return { error: action.payload };
        case USER_PROFILE_DELETE:
            return {};
        default:
            return state;
    }
};

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return { profileReq: true };
        case UPDATE_PROFILE_SUCCESS:
            return { success: true };
        case UPDATE_PROFILE_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};