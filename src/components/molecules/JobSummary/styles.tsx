import {Grid, GridProps, styled, Typography, TypographyProps} from "@mui/material";


export const SummaryHeading = styled(Typography)<TypographyProps>(() => ({
    fontWeight: 'bold',


}));

export const SummaryContainer = styled(Grid)<GridProps>(() =>({
    border: '1px solid #dadada', padding: "8px", borderRadius: '5px'
}))