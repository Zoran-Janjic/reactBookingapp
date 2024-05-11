import { AlertColor } from "@mui/material/Alert";
import { PaletteMode } from "@mui/material";

export type AlertCompProps = {
  alertType: AlertColor;
  alertText: string;
};

export type NavbarCompProps = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};

export type ToggleColorModeProps = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};
