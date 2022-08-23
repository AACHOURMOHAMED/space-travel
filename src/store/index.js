import { configureStore, compose } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({
    reducer: rootReducer,
    middleware: [logger]
})(composeEnhancers())

export default store