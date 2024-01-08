import {GeneralActionType, JobReducer, JobsListType} from "../../interfaces";


const INITIAL_STATE: JobReducer = {
    jobs: [],
    page:0,
    pages: 0,
    limit: 10,
    total: 0,
    job:null,
}



export function jobsReducer(state: JobReducer = INITIAL_STATE, action: any) {
    switch (action.type) {

        case 'SET_JOBS':
            return {...state, jobs: action.jobs, page: action.page, pages: action.pages, limit: action.limit, total: action.total}
        case 'SET_JOB':
            return {...state, job: action.job}
        default:
            return state

    }

}