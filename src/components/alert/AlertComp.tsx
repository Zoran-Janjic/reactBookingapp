import React from "react";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { AlertCompProps } from "../../types/types";

/**
 * A functional component that renders a Material-UI Alert with customizable severity and dismissible feature.
 *
 * @param alertType - The severity level of the alert. It can be one of the following: 'error', 'warning', 'info', 'success'.
 * @param alertText - The text content of the alert.
 *
 * @returns A React component that renders a Material-UI Alert.
 */
export default function AlertComp({ alertType, alertText }: AlertCompProps) {
  /**
   * State variable to control the visibility of the alert.
   * Initially set to true to display the alert.
   */
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity={alertType}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alertText}
        </Alert>
      </Collapse>
    </Box>
  );
}
