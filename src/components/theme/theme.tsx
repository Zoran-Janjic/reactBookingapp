import { Color } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Extend the TypeBackground interface to include custom colors
declare module "@mui/material/styles" {
  interface TypeBackground {
    backgroundGreenDark: string;
    footerPrimary: string;
  }
}

// Define your custom color
const BACKGROUND_GREEN_DARK = "#4F9393";
const FOOTER_PRIMARY = "#0a3333";
const PRIMARY_WHITE = "#ffffff";
const BUTTON_LIGHT_GREEN = "#44b7b7";

// Create a theme with the custom color
const theme = createTheme({
  palette: {
    background: {
      backgroundGreenDark: BACKGROUND_GREEN_DARK,
      footerPrimary: FOOTER_PRIMARY,
    },
  },
});

export default theme;
