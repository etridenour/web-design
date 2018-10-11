
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

export default combineReducers({
    //auth is the same as auth:auth in ES6
    auth,
    form: formReducer
});