import React, { useEffect, useState } from "react";
import Header from "../../layout/DashboardSiswa/Header";
import { Box } from "@mui/material";
import Card from "../../layout/DashboardSiswa/Card";
import Cardd from "../../layout/DashboardSiswa/Cardd";
import TableAbsen from "../../layout/DashboardSiswa/TableAbsen";
import Kotak from "../../layout/Dashboard/Kotak";
import Mainpages from "../../layout/DashboardSiswa/Mainpages";
import { useMediaQuery } from "react-responsive";

const Dashsiswa = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  return (
    <Box sx={{ width: "full", px: 5, mt: 6 }}>
      <Header />
      {isMobile ? <Cardd /> : <Card />}
      <TableAbsen />
    </Box>
  );
};

export default Dashsiswa;
