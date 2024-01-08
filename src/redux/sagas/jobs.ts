import { call, put, takeLatest } from 'redux-saga/effects'
import {getJobByURIApi, getJobsApi} from "../../api";
import {JobResponse} from "../../interfaces";
import {types} from "../actions";
import {AxiosResponse} from "axios";




function *getJobsSaga(action: any){

    try {
        // @ts-ignore
        const response: AxiosResponse<JobsResponse> = yield call(getJobsApi, action.page, action.limit, action.query, 'ee5d991c-cdc6-4e83-b0b3-96f147208549')
        yield put({
            type: types.SET_JOBS,
            jobs: response.data.results.jobs,
            page: response.data.results.page,
            pages: response.data.results.pages,
            limit: response.data.results.limit,
            total: response.data.results.total
        })
    }catch (e){
        alert("Something went wrong!")
        console.log(e)
    }
}

function  *getJobByURISaga(action: any) {
    try{
        const response: AxiosResponse<JobResponse> =  yield call(getJobByURIApi, action.uri,'ee5d991c-cdc6-4e83-b0b3-96f147208549')
        yield put({
            type: types.SET_JOB,
            job: response.data.results
        })
    }catch (e){
        alert("Something went wrong!")
        console.log(e)
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    takeLatest(types.GET_JOBS, getJobsSaga),
    takeLatest(types.GET_JOB_BY_URI, getJobByURISaga)
]