import React from "react";
import "./App.css";
import NavbarComp from "./components/navbar/NavbarComp.tsx";
import FooterComp from "./components/footer/FooterComp.tsx";
import LandingPage from "./pages/landing/LandingPage.tsx";
import DashboardPage from "./pages/dashboard/DashboardPage.tsx";
import { Box, Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage.tsx";

const user = { name: null, email: "example@example.com" };
function App() {
  return (
    <Box
      height={"100vh"}
      sx={{ backgroundColor: "lavender", margin: 0, padding: 0 }}
    >
      <nav>
        <NavbarComp />
      </nav>

      <Stack
        height={"100vh"}
        sx={{ backgroundColor: "yellow", padding: 1, minHeight: "100%" }}
      >
        <Routes>
          {/* Set the LandingPage as the index */}
          <Route index element={<LandingPage />} />

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Stack>

      <footer>
        <FooterComp />
      </footer>
    </Box>
  );
}

export default App;
