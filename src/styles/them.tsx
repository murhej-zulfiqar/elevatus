import {createTheme} from "@mui/material";
import {blue, lightGreen} from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: lightGreen[500],
        },
    },
});