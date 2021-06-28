import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import NavigationSlice from "./slices/NavigationSlice";
import {meerkatAPI} from "../services/Main";


export const store = configureStore({
    reducer : {
        navigation:NavigationSlice,
        [meerkatAPI.reducerPath] : meerkatAPI.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(meerkatAPI.middleware)
})

setupListeners(store.dispatch)