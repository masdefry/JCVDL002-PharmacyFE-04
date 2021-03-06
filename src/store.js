import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
    userKeepLoginReducer,
    userDetailReducer
} from './Redux/Reducers/userReducer';

const reducer = combineReducers({
    userRegisterReducer,
    userLoginReducer,
    userUpdateReducer,
    userKeepLoginReducer,
    userDetailReducer,
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
    }
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;