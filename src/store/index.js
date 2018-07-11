import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import trunk from 'redux-thunk';

import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        ...reducers
    }),
    composeEnhancers(applyMiddleware(trunk))
);

export default store;