import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers";

const store = configureStore({reducer});

export type RootState = ReturnType<typeof reducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export default store;
