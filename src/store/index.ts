import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import reducers from "./reducers";
import sagas from "./sagas"


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: false,
        serializableCheck: false
    }).concat(sagaMiddleware),
    devTools: true,
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export default store;
