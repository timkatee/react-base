import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const meerkatAPI = createApi({
    reducerPath:'meerkatAPI',
    baseQuery:fetchBaseQuery({baseUrl:'http://10.49.66.98:30008/'}),
    endpoints : (builder) => ({
        getDetectedIssues
    })
})