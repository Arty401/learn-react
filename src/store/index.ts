import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import reducers from "./reducers";
import sagas from "./sagas"
import {composeWithDevTools} from "redux-devtools-extension";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof reducers>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export default store;
