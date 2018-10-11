import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';


import reducers from './reducers';

// import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  //intitial state
  {auth: { authenticated: localStorage.getItem('token') }},
  //applies redux thunk and devtools
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Welcome} />
            <Route path="/signup" component={Signup} />
            <Route path="/feature" component={Feature} />
            <Route path="/signin" component={Signin} />
            <Route path="/signout" component={Signout} />
        </App>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
