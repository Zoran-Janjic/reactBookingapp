import React from "react";
import "./App.css";
import FooterComp from "./components/footer/FooterComp.tsx";
import LandingPage from "./pages/landing/LandingPage.tsx";
import DashboardPage from "./pages/dashboard/DashboardPage.tsx";
import { Box, Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AuthGuard from "./components/auth/AuthGuard.tsx";

const user = { name: null, email: "example@example.com" };
function App() {
  return (
    <Box
      height={"100vh"}
      sx={{ backgroundColor: "lavender", margin: 0, padding: 0 }}
    >
      <Stack
        height={"100vh"}
        sx={{ backgroundColor: "yellow", padding: 1, minHeight: "100%" }}
      >
        <Routes>
          {/* Set the LandingPage as the index */}
          <Route index element={<LandingPage />} />
          {/* Protected routes with auth guard */}
          <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <DashboardPage />
              </AuthGuard>
            }
          />
        </Routes>
      </Stack>

      <footer>
        <FooterComp />
      </footer>
    </Box>
  );
}

export default App;
