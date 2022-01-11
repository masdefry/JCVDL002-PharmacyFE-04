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
    USER_PROFILE_FAIL,
    USERNAME_UPDATE_SUCCESS,
    USERNAME_UPDATE_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_REQUEST,
    USER_FETCH_ADDRESS,
    USER_FETCH_ADDRESS_FAIL,
    USER_ADDRESS_DELETE,
    USER_PAYMENT_ORDER_ID,
    USER_ACTIVE_ADDRESS,
    USER_ACTIVE_ADDRESS_FAIL,
    USER_PRESRIPTION_ORDER,
    USER_PRESRIPTION_ORDER_FAIL,
    USER_PAYMENT_DETAILS,
    USER_PAYMENT_DETAILS_FAIL,
    ADMIN_PRESCRIPTION_ORDER,
    ADMIN_PRESCRIPTION_ORDER_FAIL
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

export const usernameUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USERNAME_UPDATE_SUCCESS:
            return { success: true };
        case USERNAME_UPDATE_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};

export const changePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_SUCCESS:
            return { success: true };
        case CHANGE_PASSWORD_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};

export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case RESET_PASSWORD_REQUEST:
            return { resetReq: true };
        case RESET_PASSWORD_SUCCESS:
            return { success: true };
        case RESET_PASSWORD_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};

export const fetchAddressReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FETCH_ADDRESS:
            return { userAddress: action.payload };
        case USER_FETCH_ADDRESS_FAIL:
            return { error: action.payload };
        case USER_ADDRESS_DELETE:
            return {};
        default:
            return state;
    }
};

export const activeAddressReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ACTIVE_ADDRESS:
            return { activeAddress: action.payload };
        case USER_ACTIVE_ADDRESS_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};

export const paymentIDReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_PAYMENT_ORDER_ID:
            return { userPaymentID: action.payload };
        default:
            return state;
    }
};

export const userPrescriptionTransReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_PRESRIPTION_ORDER:
            return { presOrderUser: action.payload };
        case USER_PRESRIPTION_ORDER_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};

export const paymentDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_PAYMENT_DETAILS:
            return { paymentDetails: action.payload };
        case USER_PAYMENT_DETAILS_FAIL:
            return { error: action.payload };
        default:
            return {};
    }
};

export const adminPresTransReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_PRESCRIPTION_ORDER:
            return { adminPresOrder: action.payload };
        case ADMIN_PRESCRIPTION_ORDER_FAIL:
            return { error: action.payload };
        default:
            return {};
    }
};