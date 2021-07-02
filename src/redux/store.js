import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import UiSlice from "./slices/UiSlice";
import {meerkatAPI} from "../services/Main";


export const store = configureStore({
    reducer : {
        ui:UiSlice,
        [meerkatAPI.reducerPath] : meerkatAPI.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(meerkatAPI.middleware)
})

setupListeners(store.dispatch)