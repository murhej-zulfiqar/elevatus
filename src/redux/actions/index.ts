

export const types = Object.freeze({

    GET_JOBS: 'GET_JOBS',
    SET_JOBS: 'SET_JOBS',
    GET_JOB_BY_URI: "GET_JOB_BY_URI",
    SET_JOB: "SET_JOB"

})


export const getJobsAction = (page: number, limit: number, query: string): any => ({
    type: types.GET_JOBS,
    page,limit, query
})

export const getJobByURIAction = (uri:string): any => ({
    type: types.GET_JOB_BY_URI, uri
})
