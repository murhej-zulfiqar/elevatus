
type GeoLocation = {
    latitude: number,
    longitude: number
}
type Salary = {
    min: number,
    max: number
}
export interface Location {
    uuid?: string
    country: string | null,
    city: string | null,
    status?: boolean,
    name?: any
}

export interface JobsListType  {
    jobs: JobDetails[]
    total: number,
    limit: number,
    page: number,
    pages: number,
}

export interface JobReducer extends JobsListType{
    job: JobDetails | null
}
export interface JobDetails {
    uuid: string,
    title: string,
    company_uuid: string,
    url: string,
    is_top: boolean,
    gba: number,
    years_of_experience: string[],
    geolocation: GeoLocation,
    willing_to_travel: boolean,
    willing_to_relocate: boolean,
    owns_a_car: boolean,
    visa_sponsorship: boolean,
    salary: Salary,
    gender: string | null,
    description: string | null,
    requirements: string | null,
    translations: any,
    skills: string[],
    uri: string,
    posted_at: string,
    score: number,
    is_applied: boolean,
    applied_at: string | null,
    outside: boolean,
    has_profile: boolean,
    outside_ky: string | null,
    hidden_columns: string[],
    job_type: string[],
    degree: string[],
    industry: string[],
    major: string[],
    nationality: string[],
    career_level: string[],
    languages: string[],
    category: []
    location: Location
}

export interface Response {
    statusCode: number,
    message: string,
    dateTime: {
        date: string,
        timezone_type: string,
        timezone: string
    }
}

export interface JobsResponse extends Response{
    results: JobsListType
}
export interface JobResponse extends Response{
    results: JobDetails
}
export interface GeneralActionType {
    type: string,
}

