import { Box } from "@mui/material";
import React from "react";
import { SignIn, SignInButton } from "@clerk/clerk-react";
export default function LandingPage() {
  return (
    <Box sx={{ backgroundColor: "purple" }}>
      <h1>LandingPage</h1>
      <SignInButton forceRedirectUrl="/dashboard" />
    </Box>
  );
}
