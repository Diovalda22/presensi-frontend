import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { useEffect, useState } from "react";
import client from "../../router/Client";

export const Page = () => {
  return (
    <div>
        <Box sx={{ display:"flex", justifyContent: "center", margin:5,  }}>
        About This Web
        </Box>
    </div>
  )
}
