import {Card, styled, Typography, TypographyProps} from "@mui/material";


export const StyledJobCard = styled(Card)(() => ({
    minHeight: '200px', margin:'15px', padding: "10px"
}))

export const StyledJobTitle =  styled(Typography)<TypographyProps>(() =>({
    marginBottom: "15px", maxWidth: "250px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"
}))

export const StyledInfo = styled(Typography)<TypographyProps>(() => ({
    borderBottom: "1px solid #dadada", padding: "5px 0"
}))