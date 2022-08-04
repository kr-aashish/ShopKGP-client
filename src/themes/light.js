import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#fdd1f5",
    },
    secondary: {
      main: green[500],
    },
  },
});
