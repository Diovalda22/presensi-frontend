import React, { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import client from "../router/Client";
import Logo from "/assets/Logo.svg";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElSiswa, setAnchorElSiswa] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIzin, setSelectedIzin] = useState("Izin"); // State untuk dropdown Izin

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    if (option) {
      setSelectedIzin(option); // Set opsi yang dipilih
      setSelectedButton(option); // Set button yang aktif
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenSiswaMenu = (event) => {
    setAnchorElSiswa(event.currentTarget);
  };

  const handleCloseSiswaMenu = () => {
    setAnchorElSiswa(null);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (localStorage.getItem("token") == null) {
    return <Navigate to={"/"} />;
  }

  const logout = () => {
    client.post("auth/logout").then(() => {
      localStorage.clear();
      window.location.reload();
    });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", height: "90%" }}>
      <Typography variant="h6" sx={{ my: 2, marginLeft: 2 }}>
        <img src={Logo} alt="Logo" style={{ width: "120px" }} />
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <List sx={{ flexGrow: 1 }}>
          <ListItem button component={Link} to="dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="riwayat">
            <ListItemText primary="Riwayat" />
          </ListItem>
          <ListItem button component={Link} to="izin">
            <ListItemText primary="Izin" />
          </ListItem>
          <ListItem button component={Link} to="dispen">
            <ListItemText primary="Dispen" />
          </ListItem>
        </List>

        <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: 2 }}>
          <Tooltip title="Pengaturan">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
              }}
            >
              <Avatar
                sx={{ height: 56, width: 56 }}
                alt="Profil"
                src="https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  marginRight: 2,
                  marginLeft: { xs: 1 },
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "black" }}>
                  {localStorage.getItem("nama")}
                </Typography>
                <Typography sx={{ fontWeight: "light" }}>
                  {localStorage.getItem("email")}
                </Typography>
              </Box>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          px: 5,
          borderRadius: "0 0 50px 50px",
          boxShadow: "0px 12px 24px #DDE9F9",
          backgroundColor: 'white'
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", height: 90 }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <img src={Logo} style={{ height: "40px", paddingLeft: 25 }} alt="Logo" />
            </>
          ) : (
            <>
              <img src={Logo} alt="Logo" />
              <Box sx={{ display: "flex", gap: 4 }}>
                {["Dashboard", "Riwayat"].map((text) => (
                  <Link key={text} to={text.toLowerCase()}>
                    <Button
                      onClick={() => handleButtonClick(text)}
                      sx={{
                        fontWeight: "bold",
                        color: selectedButton === text ? "#2D8EFF" : "gray",
                        borderBottom: selectedButton === text ? "2px solid #2D8EFF" : "2px solid transparent",
                        "&:hover": {
                          color: "#2D8EFF",
                          borderBottom: "2px solid #2D8EFF",
                        },
                      }}
                    >
                      {text}
                    </Button>
                  </Link>
                ))}
                {/* Dropdown Izin */}
                <div>
                  <Button
                    onClick={handleClick}
                    sx={{
                      fontWeight: "bold",
                      color: selectedButton === "Izin" || selectedButton === "Dispen" ? "#2D8EFF" : "gray",
                      borderBottom:
                        selectedButton === "Izin" || selectedButton === "Dispen"
                          ? "2px solid #2D8EFF"
                          : "2px solid transparent",
                      "&:hover": {
                        color: "#2D8EFF",
                        borderBottom: "2px solid #2D8EFF",
                      },
                    }}
                  >
                    {selectedIzin}
                  </Button>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}>
                    <Link to="/siswa/izin">
                      <MenuItem onClick={() => handleClose("Izin")}>Izin</MenuItem>
                    </Link>
                    <Link to="/siswa/dispen">
                      <MenuItem onClick={() => handleClose("Dispen")}>Dispen</MenuItem>
                    </Link>
                  </Menu>
                </div>
              </Box>
            </>
          )}
          {!isMobile && (
            <Box>
              <Tooltip title="Pengaturan">
                <IconButton onClick={handleOpenUserMenu}>
                  <Box sx={{ display: "flex", flexDirection: "column", textAlign: "end", mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>{localStorage.getItem("nama")}</Typography>
                    <Typography sx={{ fontWeight: "light" }}>{localStorage.getItem("email")}</Typography>
                  </Box>
                  <Avatar
                    sx={{ height: 56, width: 56 }}
                    alt="Profil"
                    src="https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: 8 }}
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography fontWeight="semibold" textAlign="center">
                    <button onClick={logout}>Logout</button>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
              backgroundColor: "white",
              borderRadius: "0 0 0 0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
}
