import cakeReducer from "./cake/cakeReducer";
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../components/FetchReducer'
import thunk from 'redux-thunk'

import logger from 'redux-logger'



const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(logger, thunk)
))

export default store