import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {JobsListType} from "../../../interfaces";
import {getJobsAction} from "../../../redux/actions";
import {Grid, Pagination} from "@mui/material";
import JobCard from "../../molecules/JobCard";
import {SearchOutlined} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import {StyledSearchButton, StyledTextField} from "./styles";


/**
 * A component to retrieve and show a list of jobs and to search in this jobs by name
 * @constructor
 */
const JonList: React.FC = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const {jobs, pages} = useSelector((state: JobsListType) => state)
    const {t} = useTranslation(['common']);
    useEffect(() => {

        if(jobs.length ===0 ) {
            dispatch(getJobsAction(0, 12, ''))
        }
    }, []);


    const searchHandle = () => dispatch(getJobsAction(0, 12,search))
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <StyledTextField placeholder={t('text_box_placeholder')} fullWidth InputProps={{
                        startAdornment: <SearchOutlined/>
                    }} variant='outlined' value={search} onChange={(e) => setSearch(e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={1} sm={2}>
                    <StyledSearchButton variant="contained" onClick={searchHandle}>
                        {t('search')}
                    </StyledSearchButton>
                </Grid>
            </Grid>

            <Grid container>
                {jobs.map(job => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <JobCard uri={job.uri} title={job.title} city={job.location.city} salary={job.salary}
                                 career_level={job.career_level}/>
                    </Grid>
                ))}
            </Grid>

            <Grid container justifyContent="center">
                <Grid item>
            <Pagination color="primary" count={pages} onChange={(e, page) => {
                dispatch(getJobsAction(page - 1, 12, search))
            }}/>
                </Grid>
            </Grid>
        </>
    )
}
export default JonList