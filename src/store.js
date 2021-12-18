import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
    userKeepLoginReducer
} from './Redux/Reducers/userReducer';

const reducer = combineReducers({
    userRegisterReducer,
    userLoginReducer,
    userUpdateReducer,
    userKeepLoginReducer,
});

const middleware = [thunk];

const userInfoLocalStorage =
    localStorage.getItem('userInfoToken') ?
        JSON.parse(localStorage.getItem('userInfoToken'))
        :
        null;

const initialState = {
    userLoginReducer: {
        userInfo: userInfoLocalStorage,
        checkStorage: false,
    },
    userKeepLoginReducer: {
        userLoginInfo: userInfoLocalStorage,
    },
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;