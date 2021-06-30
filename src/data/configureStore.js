import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReduce from './rootReducer'
import rootSaga from './rootSaga';

export function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middleWare = [sagaMiddleware];
    if(process.env.NODE_ENV === 'development') {
        middleWare.push(logger);
    }
    const store = createStore(rootReduce, applyMiddleware(...middleWare));
    sagaMiddleware.run(rootSaga);
    return store;
}

export const store = configureStore();