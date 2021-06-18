import {configureStore} from "@reduxjs/toolkit";
import NavigationSlice from "./slices/NavigationSlice";


export default configureStore({
    reducer : {
        navigation:NavigationSlice
    }
})