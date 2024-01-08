
import aplClient from "./aplClient";
import {AxiosResponse} from "axios";
import {JobResponse, JobsResponse} from "../interfaces";

const host = 'https://devapi-indexer.elevatustesting.xyz/api/v1'

const endpoints =  Object.freeze({
    GET_JOBS: `${host}/jobs`,
    GET_BY_URI: `${host}/jobs/uri`
})


export function getJobsApi (page:number, limit: number, query: string, lang_id: string): Promise<AxiosResponse<JobsResponse>>{

    const params = [`page=${page}`, `limit=${limit}`, `language_profile_uuid=${lang_id}`]
    if(query !==''){
        params.push(`itemQuery=${query}`)
    }
    return aplClient.get(`${endpoints.GET_JOBS}?${params.join('&')}`)

}

export function getJobByURIApi (uri: string, lang_id: string): Promise<AxiosResponse<JobResponse>>{
    const params = [`uri=${uri}`, `language_profile_uuid=${lang_id}`]
    return aplClient.get(`${endpoints.GET_BY_URI}?${params.join('&')}`)
}