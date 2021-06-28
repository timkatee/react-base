import {configureStore} from "@reduxjs/toolkit";
import NavigationSlice from "./slices/NavigationSlice";
import {meerkatAPI} from "../services/Main";


export default configureStore({
    reducer : {
        navigation:NavigationSlice,
        [meerkatAPI.reducerPath] : meerkatAPI.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(meerkatAPI.middleware)
})