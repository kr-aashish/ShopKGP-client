import {createTheme} from "@mui/material/styles";
import {green} from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "rgba(26,55,82,0.71)",
        },
        secondary: {
            main: green[500],
        },
    },
});
