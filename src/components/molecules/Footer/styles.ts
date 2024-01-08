import {Grid, GridProps, styled, Typography, TypographyProps} from "@mui/material";


export const StyledFooter = styled(Grid)<GridProps>(({theme}) => ({

    background: theme.palette.primary.main,
    height:"60px",
    position: 'relative',
    bottom: "0",
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    marginTop: "20px"
}))

export const FooterText = styled(Typography)<TypographyProps>(() => ({

    paddingTop: "20px"
}))