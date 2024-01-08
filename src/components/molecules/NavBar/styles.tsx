import {Button, styled, Typography} from "@mui/material";


export const LanguageButton = styled(Button)(({theme})=>({

    color: theme.palette.primary.contrastText
}))

export const NavBarLink =  styled(Typography)(({theme}) => ({
    marginLeft: "20px",
    marginRight: "20px",
    '& a':{
        textDecoration: 'none',
        color: theme.palette.primary.contrastText
    }
}))