import {Card, CardProps, Chip, ChipProps, Grid, GridProps, styled, Typography, TypographyProps} from "@mui/material";


export  const Heading = styled(Typography)<TypographyProps>(() => ({
    fontWeight: 'bold',
    marginBottom: '10px',
    padding: '5px 0'

}));




export const StyledChip = styled(Chip)<ChipProps>(() =>({
    margin: '0 5px'
}))

export const SideBarContainer = styled(Grid)<GridProps>(() =>({
    maxHeight: "80vh",
    overflowY: "auto"
}))

export const JobViewContainer = styled(Card)<CardProps>(() =>({
    minHeight: '200px', margin:'15px', padding:"10px"
}))