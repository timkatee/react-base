import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
//

//
const DetectedIssuesView = ({data, dataProperties, columns, onTableChanges, tableLastState}) => {
    return (
        <DataGrid
            loading={tableLastState.loading}
            page={tableLastState.pageNumber}
            rows={data}
            columns={columns}
            pageSize={tableLastState.dataQueryLimit}
            rowCount={dataProperties.count}
            // checkboxSelection
            disableSelectionOnClick
            autoHeight
            pagination
            onPageChange={(params)=> onTableChanges(params)}
            paginationMode='server'
        />
    )
}

export default DetectedIssuesView