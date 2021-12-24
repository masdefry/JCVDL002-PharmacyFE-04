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
    USER_PROFILE_DELETE
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
        localStorage.setItem('userInfoToken', JSON.stringify(payload.data.data));
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
            `${API_URL}/user/register`, { fullname, email, password }, config
        );

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: payload.data.data
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: payload.data.data
        });
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

export const userProfileUpdate = ({ data }) => async (dispatch, getState) => {
    try {

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

export const forgotPassword = (user) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_PROFILE_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await Axios.patch(`${API_URL}/user/forgotPassword`, user, config);

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.data,
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data.data,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const userLogout = () => async (dispatch) => {
    localStorage.removeItem('userInfoToken');
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_KEEP_LOGOUT });
    dispatch({ type: USER_PROFILE_DELETE });
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

        console.log(payload.data.data);

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