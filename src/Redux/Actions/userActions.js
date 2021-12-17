import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST
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

        localStorage.setItem("userInfo", JSON.stringify(data.data));

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