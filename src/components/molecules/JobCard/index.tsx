import React from 'react'
import {Button, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {StyledInfo, StyledJobCard, StyledJobTitle} from "./styles";



interface JobCardProps{
    uri: string
    title: string,
    city: string | null,
    salary: {
        min: number, max: number
    },
    career_level: string[]
}

/**
 * A component to display a brief of the job in the home page and the sidebar
 * @param uri
 * @param title
 * @param city
 * @param salary
 * @param career_level
 * @constructor
 */
const JobCard: React.FC<JobCardProps> = ({uri, title, city,salary,career_level}) => {

    const navigate = useNavigate();
    const {t} = useTranslation()
    return (<StyledJobCard  elevation={3}>
        <CardContent>
            <StyledJobTitle  variant="h6" component="h3">
                {title}
            </StyledJobTitle>
            <StyledInfo variant='body1' component="p" color="text.secondary">
                {salary && salary.max > 0 ?  `${salary.min} - ${salary.max}`: t('not_available')}
            </StyledInfo>
            <StyledInfo variant="body1" component="p">
                {city === null ? t('not_available') : city}
            </StyledInfo>
            <Typography variant="body1" component="p">
                {career_level && career_level.length > 0  ? career_level[0] : t('not_available') }
            </Typography>
        </CardContent>
        <CardActions >
            <Button variant="outlined" onClick={()=>navigate(`/job/${uri}`)} size="small">{t('view_job')}</Button>
        </CardActions>
    </StyledJobCard>

)
}
export default JobCard