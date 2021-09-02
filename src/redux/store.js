import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import csm from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = csm()
const middlewares = [logger, sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)
const persistor = persistStore(store)

export {store, persistor} 
