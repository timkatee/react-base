import DetectedIssuesView from "./DetectedIssuesView";
import {useGetDetectedIssuesQuery} from "../../services/Main";

export function DetectedIssuesContainer(){
    const {data, error, isLoading} = useGetDetectedIssuesQuery({start:0,limit:15})
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.log(error);
        return <div>Oops, an error occured</div>;
    }
    return <DetectedIssuesView data={data}/>
}