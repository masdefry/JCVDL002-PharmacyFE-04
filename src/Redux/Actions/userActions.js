import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    USER_KEEP_LOGIN_DATA,
    USER_KEEP_LOGIN_FAIL,
    USER_KEEP_LOGOUT,
    USER_PROFILE_DATA,
    USER_PROFILE_FAIL,
    USER_PROFILE_DELETE,
    USERNAME_UPDATE_SUCCESS,
    USERNAME_UPDATE_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_SUCCESS,
    USER_FETCH_ADDRESS,
    USER_FETCH_ADDRESS_FAIL,
    USER_ADDRESS_DELETE,
    USER_PAYMENT_ORDER_ID,
    USER_ACTIVE_ADDRESS,
    USER_ACTIVE_ADDRESS_FAIL,
    USER_PRESRIPTION_ORDER,
    USER_PRESRIPTION_ORDER_FAIL,
    USER_PAYMENT_DETAILS_FAIL,
    USER_PAYMENT_DETAILS,
    ADMIN_PRESCRIPTION_ORDER,
    ADMIN_PRESCRIPTION_ORDER_FAIL,
    ADMIN_REQ_ORDER,
    ADMIN_REQ_ORDER_FAIL
} from '../../Supports/Constants/userConstants';
import { API_URL } from '../../Supports/Constants/UrlAPI';
import Axios from 'axios';

export const Login = (email, password) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        console.log(email);

        const payload = await Axios.post(
            `${API_URL}/user/login`, { email, password }, config
        );

        console.log(payload.data.data);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: payload.data.data
        });

        dispatch(keepLogin());
        dispatch(profileDetail());
        dispatch(fetchAddress());
        dispatch(fetchActiveAddress());
        localStorage.setItem('userInfoToken', JSON.stringify(payload.data.data));
        window.location.replace('/');
    } catch (err) {
        console.log(err);
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message
                :
                err.message,
        });
    }
};

export const userRegister = (fullname, email, password) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const payload = await Axios.post(
            `${API_URL}/user/registerUser`, { fullname, email, password }, config
        );

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: payload.data.data
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: payload.data.data
        });
        dispatch(keepLogin());
        localStorage.setItem('userInfoToken', JSON.stringify(payload.data.data));
    } catch (err) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message
                :
                err.message,
        });
    }
};

export const userProfileUpdate = (name, gender, birthDate, phone, weight, height) => async (dispatch, getState) => {
    try {
        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.patch(
            `${API_URL}/user/updateprofile`, { name, gender, birthDate, phone, weight, height }, config
        );

        console.log(payload.data.data);

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: payload.data.data
        });

        dispatch(profileDetail());
    } catch (err) {
        console.log(err);
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message
                :
                err.message,
        });
    }
};

export const userLogout = () => async (dispatch) => {
    localStorage.removeItem('userInfoToken');
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_KEEP_LOGOUT });
    dispatch({ type: USER_PROFILE_DELETE });
    dispatch({ type: USER_ADDRESS_DELETE });
    console.log('Jalan nih');
};

export const keepLogin = () => async (dispatch) => {
    try {
        console.log('Jalan nih action');

        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);
        console.log('ini parse' + userDataParse);
        console.log(userDataParse.token);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };
        console.log('userkeeplogin action');
        const payload = await Axios.get(`${API_URL}/user/userkeeplogin`, config);

        console.log("keeplogin" + payload.data.data);

        dispatch({
            type: USER_KEEP_LOGIN_DATA,
            payload: payload.data.data
        });
    } catch (err) {
        dispatch({
            type: USER_KEEP_LOGIN_FAIL,
            payload:
                err.response && err.response.data.message ?
                    err.response.data.message
                    :
                    err.message
        });
    }
};

export const profileDetail = () => async (dispatch) => {
    try {

        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.get(`${API_URL}/user/userprofiledetail`, config);

        // console.log(payload.data.data);

        dispatch({
            type: USER_PROFILE_DATA,
            payload: payload.data.data
        });

    } catch (err) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload:
                err.response && err.response.data.message ?
                    err.response.data.message
                    :
                    err.message
        });
    }
};

export const usernameUpdate = (username) => async (dispatch) => {
    try {

        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.patch(`${API_URL}/user/usernameUpdate`, { username }, config);

        dispatch({
            type: USERNAME_UPDATE_SUCCESS,
            payload: payload.data.data
        });

        dispatch(profileDetail());
    } catch (err) {
        dispatch({
            type: USERNAME_UPDATE_FAIL,
            payload:
                err.response && err.response.data.message ?
                    err.response.data.message
                    :
                    err.messsage
        });
    }
};

export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
    try {

        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.patch(`${API_URL}/user/changePassword`, { oldPassword, newPassword }, config);

        dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: payload.data.data
        });

    } catch (err) {
        dispatch({
            type: CHANGE_PASSWORD_FAIL,
            payload:
                err.response && err.response.data.message ?
                    err.response.data.message
                    :
                    err.messsage
        });
    }
};

export const resetPassword = (password, token) => async (dispatch) => {
    try {

    } catch (err) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload:
                err.response && err.response.message ?
                    err.response.message
                    :
                    err.message
        });
    }
};

export const fetchAddress = () => async (dispatch) => {
    try {
        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.get(`${API_URL}/user/fetchAddress`, config);

        dispatch({
            type: USER_FETCH_ADDRESS,
            payload: payload.data.data
        });
    } catch (err) {
        dispatch({
            type: USER_FETCH_ADDRESS_FAIL,
            payload:
                err.response && err.response.message ?
                    err.response.message
                    :
                    err.message
        });
    }
};

export const fetchActiveAddress = () => async (dispatch) => {
    try {
        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.get(`${API_URL}/user//fetchActiveAddress`, config);

        dispatch({
            type: USER_ACTIVE_ADDRESS,
            payload: payload.data.data
        });
    } catch (err) {
        dispatch({
            type: USER_ACTIVE_ADDRESS_FAIL,
            payload:
                err.response && err.response.message ?
                    err.response.message
                    :
                    err.message
        });
    }
};

export const userPaymentID = (ID) => async (dispatch) => {
    dispatch({
        type: USER_PAYMENT_ORDER_ID,
        payload: ID
    });
};

export const fetchUserPrescriptionOrder = () => async (dispatch) => {
    try {
        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.get(`${API_URL}/admin/fetchPrescription`, config);

        dispatch({
            type: USER_PRESRIPTION_ORDER,
            payload: payload.data.data
        });
    } catch (err) {
        dispatch({
            type: USER_PRESRIPTION_ORDER_FAIL,
            payload:
                err.response && err.response.message ?
                    err.response.message
                    :
                    err.message
        });
    }
};

export const userPaymentDetail = () => async (dispatch) => {
    try {
        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`,
            },
        };

        const payload = await Axios.get(`${API_URL}/user/transactionDetails`, config);

        dispatch({
            type: USER_PAYMENT_DETAILS,
            payload: payload.data.data
        });
        localStorage.setItem('userPaymentDetails', JSON.stringify(payload.data.data));
    } catch (err) {
        dispatch({
            type: USER_PAYMENT_DETAILS_FAIL,
            payload:
                err.response && err.response.message ?
                    err.response.message
                    :
                    err.message
        });
    }
};

export const fetchUserPrescriptionAdmin = (email) => async (dispatch) => {
    try {
        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);
        console.log('Jalan fetch Admin');
        console.log('ini email di dispatch' + email);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.post(`${API_URL}/admin/fetchUserPrescription`, { email }, config);

        dispatch({
            type: ADMIN_PRESCRIPTION_ORDER,
            payload: payload.data.data
        });
    } catch (err) {
        dispatch({
            type: ADMIN_PRESCRIPTION_ORDER_FAIL,
            payload:
                err.response && err.response.message ?
                    err.response.message
                    :
                    err.message
        });
    }
};

export const fetchReqOrderAdmin = () => async (dispatch) => {
    try {
        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': `${userDataParse.token}`
            }
        };

        const payload = await Axios.get(`${API_URL}/admin/fetchReqOrder`, config);

        dispatch({
            type: ADMIN_REQ_ORDER,
            payload: payload.data.data
        });
    } catch (err) {
        dispatch({
            type: ADMIN_REQ_ORDER_FAIL,
            payload:
                err.response && err.response.message ?
                    err.response.message
                    :
                    err.message
        });
    }
};