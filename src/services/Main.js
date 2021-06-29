import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const meerkatAPI = createApi({
    reducerPath: 'meerkatAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.49.66.98:30008/'
    }),
    endpoints: (builder) => ({
        getDetectedIssues: builder.query({
            query: (filters) => `detected_issue/read?start=${filters.start}&limit=${filters.limit}`,
            transformResponse : (response)=> response.map(data=>({...data,id:data.issue_id}))
        })
    })
});

export const { useGetDetectedIssuesQuery } = meerkatAPI;