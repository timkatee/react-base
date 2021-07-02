import DetectedIssuesView from "./DetectedIssuesView";
import {useGetDetectedIssuesQuery} from "../../services/Main";
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
export function DetectedIssuesContainer(){
    const [pageNumber, setPageNumber] = useState(0);
    const [dataQueryLimit, setDataQueryLimit] = useState(10);
    const [startQueryNumber, setStartQueryNumber] = useState(0);
    //
    const {data, error, isLoading} = useGetDetectedIssuesQuery({start:startQueryNumber,limit:dataQueryLimit})
    //
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.log(error);
        return <div>Oops, an error occurred</div>;
    }
    //
    const mutateDataTableState = (params) => {
        if('page' in params) {
            setPageNumber(params.page)
            setStartQueryNumber(params.page * dataQueryLimit)
        }
    }
    //
    return <DetectedIssuesView
        data={data.data.map(data=>({...data,id:data.issue_id}))}
        columns={columns}
        dataProperties={data.properties}
        onTableChanges={(params)=>mutateDataTableState(params)}
        tableLastState={{pageNumber:pageNumber,dataQueryLimit:dataQueryLimit, loading:isLoading}}
    />
}