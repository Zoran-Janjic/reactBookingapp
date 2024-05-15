import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";
import theme from "../theme/theme";
import Constants from "../utils/Constants";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

import { NavbarItemsTeacher } from "../utils/namespace/NavbarItemsTeacher";
import { NavbarItemsStudent } from "../utils/namespace/NavbarItemsStudent";
import { NavbarItemsAdmin } from "../utils/namespace/NavbarItemsAdmin";

const testUser = {
  name: "John",
  phone: 1234567890,
  theme: "dark",
  role: 1,
};

export default function NavbarComp() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("Ola");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderNavbarItems = (handleCloseNavMenu: () => void) => {
    if (testUser.role === 1) {
      // Admin
      return Object.keys(NavbarItemsAdmin.Items).map((key) => {
        const itemKey =
          NavbarItemsAdmin.Items[key as keyof typeof NavbarItemsAdmin.Items];
        const itemData = NavbarItemsAdmin.Data[itemKey];
        return (
          <MenuItem key={`admin_${itemData.id}`} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{itemData.title}</Typography>
          </MenuItem>
        );
      });
    } else if (testUser.role === 2) {
      // Teacher
      return Object.keys(NavbarItemsTeacher.Items).map((key) => {
        const itemKey =
          NavbarItemsTeacher.Items[
            key as keyof typeof NavbarItemsTeacher.Items
          ];
        const itemData = NavbarItemsTeacher.Data[itemKey];
        return (
          <MenuItem key={`teacher_${itemData.id}`} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{itemData.title}</Typography>
          </MenuItem>
        );
      });
    } else if (testUser.role === 3) {
      // Student
      return Object.keys(NavbarItemsStudent.Items).map((key) => {
        const itemKey =
          NavbarItemsStudent.Items[
            key as keyof typeof NavbarItemsStudent.Items
          ];
        const itemData = NavbarItemsStudent.Data[itemKey];
        return (
          <MenuItem key={`student_${itemData.id}`} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{itemData.title}</Typography>
          </MenuItem>
        );
      });
    }
    return null; // Add a return statement to handle cases where role is not 1, 2, or 3
  };

  return (
    <AppBar
      sx={{ backgroundColor: theme.palette.background.backgroundGreenDark }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TranslateIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Language School
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Navbar links */}
              {renderNavbarItems(handleCloseNavMenu)}
            </Menu>
          </Box>
          {/* Small screen */}
          <TranslateIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Language School
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {renderNavbarItems(handleCloseNavMenu)}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={Constants.Images.defaultUserAvatarUrl}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
