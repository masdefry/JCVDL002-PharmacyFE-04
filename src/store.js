import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer
} from './Redux/Reducers/userReducer';

const reducer = combineReducers({
    userRegisterReducer,
    userLoginReducer,
    userUpdateReducer,
});

const middleware = [thunk];

const userInfoLocalStorage =
    localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo'))
        :
        null;

const initialState = {
    userLoginReducer: {
        userInfo: userInfoLocalStorage,
    }
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;