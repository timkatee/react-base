import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {useState} from "react";
//
const columns = [
    {field: 'date_created', headerName:"Date Created", flex:1},
    // {field: 'issue_id', headerName:"Issue Id", flex:1},
    {field: 'master_job', headerName:"Master JobID", flex:1},
    {field: 'rmop_name', headerName:"RMOP Name", flex:2},
    {field: 'issue_category', headerName:"Issue Category", flex:1},
    {field: 'issue_reason', headerName:"Issue Reason", flex:1},
    {field: 'issue_level', headerName:"Issue Level", flex:1}
]
//
const DetectedIssuesView = ({data}) => {
    // const {page, setPage} = useState(0)
    // const {rows, setRows} = useState([])
    //
    // setRows(data)
    //
    const handlePageChange = (params) => {
        console.log(params)
    }
    // console.log(data)
    return (
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            // checkboxSelection
            disableSelectionOnClick
            autoHeight
            // autoPageSize
            onPageChange={(params)=> handlePageChange(params)}
            paginationMode='server'
        />
    )
}

export default DetectedIssuesView