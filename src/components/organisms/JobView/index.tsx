import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {JobReducer} from "../../../interfaces";
import {getJobByURIAction, getJobsAction} from "../../../redux/actions";
import {Button, CardActions, CardContent, Grid, Typography} from "@mui/material";
import JobCard from "../../molecules/JobCard";
import {useTranslation} from "react-i18next";
import {Heading, JobViewContainer, SideBarContainer, StyledChip} from "./styles";
import JobSummary from "../../molecules/JobSummary";


/**
 * A component to display the full job information and some other jobs
 * @constructor
 */
const JobView = ()=> {

    const {uri} = useParams()
    const {jobs, job} = useSelector((state: JobReducer) => state)
    const { t } = useTranslation(['common']);
    const dispatch = useDispatch()
    useEffect(() => {
        if(uri !== undefined){
            dispatch(getJobByURIAction(uri))
        }
        if(jobs.length === 0){
            dispatch(getJobsAction(0, 10,''))
        }
    }, [uri]);
   return  (

           <Grid container>
               <Grid item xs={12} md={9}>

                   {job && <JobViewContainer  elevation={3}>
                       <CardContent>
                           <Heading variant="h4" component="h3" >
                               {job.title}
                           </Heading>
                            <JobSummary job_type={job.job_type}
                                        salary={job.salary}
                                        career_level={job.career_level}
                                        degree={job.degree}
                                        location={job.location} posted_at={job.posted_at} industry={job.industry}
                                        years_of_experience={job.years_of_experience}/>
                           <Heading variant="h6" component="h4">
                               {t('description')}
                           </Heading>
                           <Typography variant="body1" component="p" dangerouslySetInnerHTML={{__html: job.description as string| TrustedHTML }} />
                           <Heading variant="h6" component="h4">
                               {t('requirements')}
                           </Heading>
                           <Typography variant="body1" component="p" dangerouslySetInnerHTML={{__html: job.requirements as string| TrustedHTML}} />
                           <Heading variant="h6" component="h4">
                               {t('skills')}
                           </Heading>
                           {job.skills.map((skill) => <StyledChip label={skill}  />)}


                       </CardContent>
                       <CardActions  >
                           <Button variant="contained" onClick={()=>{}}>{t('apply')}</Button>
                       </CardActions>
                   </JobViewContainer>}
               </Grid>
               <SideBarContainer item xs={12} md={3} >
               {jobs.filter(job => job.uri !== uri).map(job => (
                   <Grid item xs={12} >
                       <JobCard uri={job.uri} title={job.title} city={job.location.city} salary={job.salary} career_level={job.career_level} />
                   </Grid>
               ))}
           </SideBarContainer>
           </Grid>
   )
}

export default JobView