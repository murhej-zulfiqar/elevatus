import React from 'react'
import {SummaryContainer, SummaryHeading} from "./styles";
import {Grid, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Location} from "../../../interfaces";


interface JobSummaryProps {
    job_type: string[],
    salary: {min:number, max: number},
    industry: string[],
    years_of_experience: string[],
    posted_at: string,
    location: Location,
    degree: string[],
    career_level: string[]
}

/**
 * a summary about the job that contains many details of the job
 * @param job_type
 * @param salary
 * @param industry
 * @param years_of_experience
 * @param posted_at
 * @param location
 * @param degree
 * @param career_level
 * @constructor
 */
const JobSummary:React.FC<JobSummaryProps> = ({job_type,salary, industry, years_of_experience, posted_at, location, degree, career_level }) => {

    const {t} = useTranslation()
    return (
        <SummaryContainer container justifyContent="space-evenly" >
            <Grid item xs={12} md={5} >
                <Grid container>
                    <Grid item xs={6}>
                        <SummaryHeading component="span">{t('job_type')} </SummaryHeading>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  component="span" >{job_type && job_type.length > 0  ? job_type[0] : t('not_available')}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <SummaryHeading  component="span">{t('salary_range')}</SummaryHeading>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  component="span">{salary ? `${salary.min} - ${salary.max}` : t('not_available')}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <SummaryHeading   component="span">{t('industry')}  </SummaryHeading>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  component="span">{industry && industry.length > 0 ? industry[0] : t('not_available')}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <SummaryHeading   component="span">{t('experience')}  </SummaryHeading>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  component="span">{years_of_experience && years_of_experience.length >0 ? years_of_experience[0]  : t('not_available')}</Typography>
                    </Grid>
                </Grid>


            </Grid>
            <Grid item xs={12} md={5}>

                <Grid container>
                    <Grid item xs={6}>
                        <SummaryHeading  component="span">{t('posted_at')} </SummaryHeading>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  component="span" >{posted_at !== null  ? posted_at : t('not_available')}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <SummaryHeading  component="span">{t('office')} </SummaryHeading>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  component="span" >{location && location.city !== null  ? location.city : t('not_available')}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <SummaryHeading   component="span">{t('degree')} </SummaryHeading>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  component="span">{degree && degree.length > 0 ? degree[0]  : t('not_available')}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <SummaryHeading  component="span">{t('seniority')}  </SummaryHeading>

                    </Grid>
                    <Grid item xs={6}>
                        <Typography  component="span">{career_level && career_level.length >0 ? career_level[0]  : t('not_available')}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </SummaryContainer>
    )
}

export default JobSummary