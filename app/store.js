import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'remote-redux-devtools'

const middleware = [thunkMiddleware, loggingMiddleware]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
