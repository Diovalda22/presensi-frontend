import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../layout/Navbar";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Mainpage() {
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
