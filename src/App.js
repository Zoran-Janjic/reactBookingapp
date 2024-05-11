import React from "react";
import "./App.css";
import NavbarComp from "./components/navbar/NavbarComp.tsx";
import FooterComp from "./components/footer/FooterComp.tsx";
import LandingPage from "./pages/landing/LandingPage.tsx";
import DashboardPage from "./pages/dashboard/DashboardPage.tsx";
import { Box, Stack } from "@mui/material";

const user = { name: null, email: "example@example.com" };
function App() {
  return (
    <Box sx={{ backgroundColor: "lavender", margin: 0, padding: 0 }}>
      <nav>
        <NavbarComp />
      </nav>
      <main>
        <main>{user.name == null ? <LandingPage /> : <DashboardPage />}</main>
      </main>
      <footer>
        <FooterComp />
      </footer>
    </Box>
  );
}

export default App;
