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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";
import theme from "../theme/theme";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAP1BMVEXZ3OFveH/c3+RsdXzf4udpcnnQ1Nlye4J/h425vsNkbnWgpqyLkpjDyM17g4mqr7WTmZ+zuL7JztOZn6WFjJL7SIMLAAAD9ElEQVR4nO2c23KDIBBAdbl4BdT4/99ayKVNkxhZAVdnOA/tTJ/OLO4CC7QoMplMJpPJZDKZTCaTyWQyqwC/A9QmywCHyXRD3w+dmeCYpgCymUXbCmZxv+dGwuFMuexqwconmKg7yam9/gGF0eyf5FWUaVMcKKCgdPvqeKPV6jCeYKq3SP5GtDJH8byIJUmHuFD73Ri+WlrPgdrQAmuWzpN83OH7iD/GndgTxsXkeYaNpJ4wLef4P81qovQE7WVpPTWhJjcLVf2d1pDNm3bIfS3LknDYfbL8AV2VxwTThZPGkneIYNpwdjRfJ3hm+QNG8nFC453mN9qGwhMu2GiSTJmyxmrWcn9LUKg8d1QEK3kYsZZlSbAAAVw5coiO4OPETEF3TYqJqEdmkM2hnkBzxmvOWTNrZs1fTpLp622EVyjaH2eZhQxe0+xveZalx0kWcluWxRTLd2xFIqlHBcfmkCDpz8CE1aRpz3BkDlU07QTkqNOMeXGWHtJZOnJn6W/yzr9bTNSPuwJ+JwTujID0iED5nmTQnrCCX1ES1OerXsWTrGT+Aeb9vP9lxBl1LK+eDft+UM1IusRv8GIoF0VFORTkI34H1PA5ooINx7lE4a6kTF0l3N2evw+SCVF105GupBS3q1LjMNe6shNoVel6HsZjXplyUnJSqmmUmmRxSMcHcIfaI5PJJAOeoZb5jC2TYKtm0zTjaH/YyglHq5zAeaHMMGv9u4ertJ4Ho4qj3DK2oyubrhbutu7rOtP+se4aWZB/AcDleNFCLN/fFEJfRkkaUyvZaba+eme6oxOFQvWtZ99DtL0iWdMBqP777uJFlPVq/28Upr7EdovLfucGDUiDieRfRM2e7Xeu5g2SV9FZ7bWBg2J1a76M3bTvk0og+42hvAe032PguaqDLK1nnX7gYdw+4A9Y8hvRMC7PiwhPkdYTTATJq2jK7heiib1GwiY3+F/M9vBMFc8tJ+jfSPN9QhOe48+wJH1PkL6nFt6eVYI6L/H3jlY95/jXY/H3INeJfkDImwSW1rOJWpZAppB0xP08Uwy5I+qwg0oj6Yh5hOD7egkP09Ek+RhxknylHSNlEch0wXThjJRFnqe8W4l1Ooy+ZYYj0lMNu2BPaWnDGWWp5P1IcStRHjeCSpjmN9oItZMPiYNpwzmE1ySJvk2KpwpOotg7i8+EJxH2xdoWWPACJHHRvGuGlk5QO1haz8BcR75M3Uroi1Yef6P2CTaHacIeko6gQQeZfAq60Qat5jj2ne9mzaAt5k4ZFJpDkH5Cv8HC/kMJ/onVRs2whxB7zEFXzTpA0m7W9rEsy5CNG0z7aQYcZ254urSVkDvSWROp+QPBZTJPykUrPQAAAABJRU5ErkJggg=="
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
