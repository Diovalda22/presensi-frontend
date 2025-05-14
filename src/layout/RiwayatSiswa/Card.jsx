import { Box, Grid, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { useEffect, useState } from "react";
import client from "../../router/Client";

export default function Card({ selectedDate }) {
  const [izinCount, setIzinCount] = useState(0);
  const [sakitCount, setSakitCount] = useState(0);
  const [alphaCount, setAlphaCount] = useState(0);

  // Determine year and month from selectedDate or current date
  const defaultDate = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
  const dateToFetch = selectedDate || defaultDate;
  const year = new Date(dateToFetch).getFullYear();
  const month = String(new Date(dateToFetch).getMonth() + 1).padStart(2, "0"); // Add leading zero to month

  useEffect(() => {
    // Fetching data with year and month parameters
    const fetchData = async () => {
      try {
        const izinResponse = await client.get(`izin?year=${year}&month=${month}`);
        setIzinCount(izinResponse.data.data.length);

        const sakitResponse = await client.get(`sakit?year=${year}&month=${month}`);
        setSakitCount(sakitResponse.data.data.length);

        const absenResponse = await client.get(`absen?year=${year}&month=${month}`);
        const alphaCount = absenResponse.data.data.filter(item => item.keterangan === "alpha").length;
        setAlphaCount(alphaCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [year, month]); // Re-run effect when year or month changes

  return (
    <Grid container spacing={2} sx={{ padding: "20px", flexDirection: "row" }}>
      <Grid item sm={4} sx={{ marginLeft: 0 }}>
        <Box
          sx={{
            bgcolor: "#DDE9F9",
            height: 250,
            width: 310,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <EventAvailableIcon sx={{ fontSize: 65, color: "#2D8EFF" }} />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {izinCount}
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Ijin
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item sm={4} sx={{ marginLeft: 0 }}>
        <Box
          sx={{
            bgcolor: "#E6FFFA",
            height: 250,
            width: 310,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 65, color: "#00D8B6" }} />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {sakitCount}
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Sakit
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item sm={4} sx={{ marginLeft: 0 }}>
        <Box
          sx={{
            bgcolor: "#FEF5E5",
            height: 250,
            width: 310,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 65, color: "#FFAE1F" }} />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {alphaCount}
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Alpha
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
