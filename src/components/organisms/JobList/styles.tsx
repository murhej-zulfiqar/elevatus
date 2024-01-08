import {Button, ButtonProps, styled, TextField, TextFieldProps} from "@mui/material";


export const StyledTextField = styled(TextField)<TextFieldProps>(() =>({
    margin: "15px",
    '& .MuiOutlinedInput-input':{
       padding: "7px 10px"
    }
}))

export const StyledSearchButton =  styled(Button)<ButtonProps>(() =>({
    margin: "15px 25px"
}))