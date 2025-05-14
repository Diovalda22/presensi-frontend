import React from "react";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Mainpages() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          overflowX: "hidden",
          px: "10px",
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </>
  );
}
