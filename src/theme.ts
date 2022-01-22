import { createTheme } from "@mui/material/styles";
import { COLORS } from "./constants";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.NOT_IN_THE_WORD,
    },
    success: {
      main: COLORS.COLLECT,
    },
    error: {
      main: COLORS.WRONG,
    },
  },
});

export default theme;
