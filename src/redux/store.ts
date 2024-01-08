import {configureStore} from "@reduxjs/toolkit";
import {jobsReducer} from "./reducers/jobReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: jobsReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
