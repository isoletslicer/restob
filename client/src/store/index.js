import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers/root'
import { logger } from './middlewares/logger'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store