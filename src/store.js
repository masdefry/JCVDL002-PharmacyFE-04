import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
    userKeepLoginReducer,
    userDetailReducer,
    usernameUpdateReducer,
    forgotPasswordReducer,
    fetchAddressReducer,
    paymentIDReducer,
    activeAddressReducer,
    userPrescriptionTransReducer,
    paymentDetailReducer,
    adminPresTransReducer
} from './Redux/Reducers/userReducer';

const reducer = combineReducers({
    userRegisterReducer,
    userLoginReducer,
    userUpdateReducer,
    userKeepLoginReducer,
    userDetailReducer,
    usernameUpdateReducer,
    forgotPasswordReducer,
    fetchAddressReducer,
    paymentIDReducer,
    activeAddressReducer,
    userPrescriptionTransReducer,
    paymentDetailReducer,
    adminPresTransReducer
});

const middleware = [thunk];

const userInfoLocalStorage =
    localStorage.getItem('userInfoToken') ?
        JSON.parse(localStorage.getItem('userInfoToken'))
        :
        null;

const initialState = {
    userLoginReducer: {
        userInfo: userInfoLocalStorage
    },
    userKeepLoginReducer: {
        userLoginInfo: userInfoLocalStorage,
    },
    userDetailReducer: {
        userDetail: userInfoLocalStorage,
    },
    fetchAddressReducer: {
        userAddress: userInfoLocalStorage,
    },
    activeAddressReducer: {
        activeAddress: userInfoLocalStorage,
    },
    paymentIDReducer: {
        userPaymentID: userInfoLocalStorage,
    },
    userPrescriptionTransReducer: {
        presOrderUser: userInfoLocalStorage,
    },
    paymentDetailReducer: {
        paymentDetails: userInfoLocalStorage,
    },
    adminPresTransReducer: {
        adminPresOrder: userInfoLocalStorage
    }
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;