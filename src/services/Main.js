import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const meerkatAPI = createApi({
    reducerPath: 'meerkatAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.49.66.98:30008/'
    }),
    endpoints: (builder) => ({
        getDetectedIssues: builder.query({
            query: (start) => `detected_issue/read?start=${start}&limit=10`
        })
    })
});


export const {useGetDetectedIssues} = meerkatAPI