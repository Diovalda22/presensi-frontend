/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useEffect, useState } from "react";
import client from "../../router/Client";
import MailIcon from "@mui/icons-material/Mail";
import CancelIcon from "@mui/icons-material/Cancel";
import SkeletonCard from "../../components/SkeletonCard";

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedCardBox = styled(Box)`
  animation: ${slideInRight} 0.5s ease-out;
`;

export default function Card() {
  const [countSakit, setCountSakit] = useState("");
  const [countIzin, setCountIzin] = useState("");
  const [alphaCount, setAlphaCount] = useState("");
  const [telatCount, setTelatCount] = useState("");
  const [presenCount, setPresenCount] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.get("sakit").then(({ data }) => {
      const count = data.data.length;
      setCountSakit(count);
    });

    client.get("izin").then(({ data }) => {
      const count = data.data.length;
      setCountIzin(count);
    });

    client.get("presensi").then(({ data }) => {
      const alphaCount = data.data.filter(
        (item) => item.keterangan === "alpha"
      ).length;

      const telatCount = data.data.filter(
        (item) => item.keterangan === "telat"
      ).length;

      const presenCount = data.data.length;

      setTelatCount(telatCount);
      setAlphaCount(alphaCount);
      setPresenCount(presenCount);
    });
  }, []);

  const today = new Date();
  const Month = today.getMonth() + 1;
  const year = today.getFullYear();

  const dayInMonth = new Date(year, Month, 0).getDate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000ms = 3 detik

    // Bersihkan timer jika komponen unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedCardBox sx={{ paddingBottom: "40px" }}>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              height: 230,
              width: "full",
              display: "flex",
              justifyContent: isLoading ? "center" : "start",
              alignItems: "center",
              borderRadius: 7,
              boxShadow: "0px 12px 24px #DDE9F9",
            }}
          >
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <Box
                sx={{
                  marginLeft: 5,
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  textAlign: "start",
                  height: "65%",
                  alignItems: "start",
                }}
              >
                <EventAvailableIcon sx={{ fontSize: 65, color: "#2D8EFF" }} />
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box>
                    <Typography
                      variant="p"
                      fontWeight="semibold"
                      color="#5A6A85"
                    >
                      Total Presensi
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {presenCount}
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight="semibold"
                      color="#5A6A85"
                    >
                      Bulan ini
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginLeft: 5,
                      position: "relative",
                      display: "inline-flex",
                    }}
                  >
                    <CircularProgress
                      size={80}
                      thickness={4}
                      value={(presenCount / dayInMonth) * 100} // Menghitung persentase
                      variant="determinate"
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: "bold" }}
                      >
                        {presenCount + "/" + dayInMonth}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              height: 230,
              width: "full",
              display: "flex",
              justifyContent: isLoading ? "center" : "start",
              alignItems: "center",
              borderRadius: 7,
              boxShadow: "0px 12px 24px #DDE9F9",
            }}
          >
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <Box
                sx={{
                  marginLeft: 5,
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  textAlign: "start",
                  height: "65%",
                  alignItems: "start",
                }}
              >
                <MailIcon sx={{ fontSize: 65, color: "#00D8B6" }} />
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box>
                    <Typography
                      variant="p"
                      fontWeight="semibold"
                      color="#5A6A85"
                    >
                      Total Ijin/Sakit
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {countIzin + countSakit}
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight="semibold"
                      color="#5A6A85"
                    >
                      Bulan ini
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginLeft: 5,
                      position: "relative",
                      display: "inline-flex",
                    }}
                  >
                    <CircularProgress
                      size={80}
                      thickness={4}
                      value={(countIzin / dayInMonth) * 100} // Menghitung persentase
                      variant="determinate"
                      sx={{ color: "#00D8B6" }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: "bold" }}
                      >
                        {countSakit + countIzin + "/" + dayInMonth}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              height: 230,
              width: "full",
              display: "flex",
              justifyContent: isLoading ? "center" : "start",
              alignItems: "center",
              borderRadius: 7,
              boxShadow: "0px 12px 24px #DDE9F9",
            }}
          >
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <Box
                sx={{
                  marginLeft: 5,
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  textAlign: "start",
                  height: "65%",
                  alignItems: "start",
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 65, color: "#FFAE1F" }} />
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box>
                    <Typography
                      variant="p"
                      fontWeight="semibold"
                      color="#5A6A85"
                    >
                      Total Telat
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {telatCount}
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight="semibold"
                      color="#5A6A85"
                    >
                      Bulan ini
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginLeft: 5,
                      position: "relative",
                      display: "inline-flex",
                    }}
                  >
                    <CircularProgress
                      size={80}
                      thickness={4}
                      value={(telatCount / dayInMonth) * 100} // Menghitung persentase
                      variant="determinate"
                      sx={{ color: "#FFAE1F" }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: "bold" }}
                      >
                        {telatCount + "/" + dayInMonth}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              height: 230,
              width: "full",
              display: "flex",
              justifyContent: isLoading ? "center" : "start",
              alignItems: "center",
              borderRadius: 7,
              boxShadow: "0px 12px 24px #DDE9F9",
            }}
          >
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <Box
                sx={{
                  marginLeft: 5,
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  textAlign: "start",
                  height: "65%",
                  alignItems: "start",
                }}
              >
                <CancelIcon sx={{ fontSize: 65, color: "#DC3545" }} />
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box>
                    <Typography
                      variant="p"
                      fontWeight="semibold"
                      color="#5A6A85"
                    >
                      Total Alpha
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {alphaCount}
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight="semibold"
                      color="#5A6A85"
                    >
                      Bulan ini
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginLeft: 5,
                      position: "relative",
                      display: "inline-flex",
                    }}
                  >
                    <CircularProgress
                      size={80}
                      thickness={4}
                      value={(alphaCount / dayInMonth) * 100} // Menghitung persentase
                      variant="determinate"
                      sx={{ color: "#DC3545" }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: "bold" }}
                      >
                        {alphaCount + "/" + dayInMonth}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </AnimatedCardBox>
  );
}
