import DetectedIssuesView from "./DetectedIssuesView";
import {useGetDetectedIssues} from "services/Main";

export function DetectedIssuesContainer(){
    // console.log(useGetDetectedIssues('10'))
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     console.log(error);
    //     return <div>Oops, an error occured</div>;
    // }
    return <DetectedIssuesView/>
}