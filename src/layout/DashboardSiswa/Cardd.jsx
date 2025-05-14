import { Box, Grid, Typography, CircularProgress, useMediaQuery  } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import MailIcon from "@mui/icons-material/Mail";
import { alpha, useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from 'react';
import { formatDate } from '../../helpers/helper';
import client from '../../router/Client';

export default function Cardd() {
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container spacing={isMobile ? 4 : 7}>
          <>
          <Grid item xs={6} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: isMobile ? 130 : 230,
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                overflow: 'hidden',
                alignItems: 'center',
                borderRadius: 7,
                boxShadow: "0px 12px 24px #DDE9F9",
              }}
            >
            <Box sx={{ marginLeft: 0, display: 'flex', flexDirection: 'row', textAlign: 'start', height: '65%', alignItems: 'center' }}>
              <EventAvailableIcon sx={{ fontSize: 70, color: '#2D8EFF', display:{xs: 'none'} }} />
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ textAlign:'center' }}>
                  <Typography variant="caption" fontSize={18} sx={{ bgcolor:'#2D8EFF', px: 3.5, pt: 2, pb: 0.5 }} fontWeight="semibold" color="#ffff">
                    Presensi
                  </Typography>
                  <Typography variant="h5" color="#0175f8" sx={{ fontWeight: 'bold', fontSize: 40 }}>
                  {presenCount}
                  </Typography>
                  <Typography variant="subtitle2" fontSize={18} fontWeight="semibold" color="#2D8EFF">
                    Hari
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: isMobile ? 130 : 230,
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                overflow:'hidden',
                borderRadius: 7,
                boxShadow: "0px 12px 24px #DDE9F9",
              }}
            >
            <Box sx={{ marginLeft: 0, display: 'flex', flexDirection: 'row', textAlign: 'start', height: '65%', alignItems: 'center' }}>
              <MailIcon sx={{ fontSize: 70, color: '#00D8B6', display:{xs: 'none'} }} />
              <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
                <Box sx={{ textAlign:'center' }}>
                  <Typography variant="caption" fontSize={18} sx={{ bgcolor:'#00D8B6', px: 6, pt: 2, pb: 0.5 }} fontWeight="semibold" color="#ffff">
                    Izin
                  </Typography>
                  <Typography variant="h5" color="#00d8b6" sx={{ fontWeight: 'bold', fontSize: 40 }}>
                  {countIzin + countSakit}
                  </Typography>
                  <Typography variant="subtitle2" fontSize={18} fontWeight="semibold" color="#01f8d3">
                    Kali
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: isMobile ? 130 : 230,
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                borderRadius: 7,
                overflow: 'hidden',
                boxShadow: "0px 12px 24px #DDE9F9",
              }}
            >
            <Box sx={{ marginLeft: 0, display: 'flex', flexDirection: 'row', textAlign: 'start', height: '65%', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ fontSize: 70, color: "#FFAE1F",  display:{xs: 'none'} }} />
              <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
                <Box sx={{ textAlign:'center' }}>
                  <Typography variant="caption" fontSize={18} sx={{ bgcolor:'#FFAE1F', px: 5.2, pt: 2, pb: 0.5 }} fontWeight="semibold" color="#ffff">
                    Telat
                  </Typography>
                  <Typography variant="h5" color="#ffa201" sx={{ fontWeight: 'bold', fontSize: 40 }}>
                  {telatCount}
                  </Typography>
                  <Typography variant="subtitle2" fontSize={18} fontWeight="semibold" color="#ffae1f">
                    Kali
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: isMobile ? 130 : 230,
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: 7,
                boxShadow: "0px 12px 24px #DDE9F9",
              }}
            >
            <Box sx={{ marginLeft: 0, display: 'flex', flexDirection: 'row', textAlign: 'start', height: '65%', alignItems: 'center' }}>
              <CancelIcon sx={{ fontSize: 70, color: "#DC3545",  display:{xs: 'none'} }} />
              <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
                <Box sx={{ textAlign:'center' }}>
                  <Typography variant="caption" fontSize={18} sx={{ bgcolor:'#DC3545', px: 4.6, pt: 2, pb: 0.5 }} fontWeight="semibold" color="#ffff">
                    Alpha
                  </Typography>
                  <Typography variant="h5" color="#ff0b21" sx={{ fontWeight: 'bold', fontSize: 40 }}>
                  {alphaCount}
                  </Typography>
                  <Typography variant="subtitle2" fontSize={18} fontWeight="semibold" color="#dc3545">
                    Kali
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
          
          </>
      </Grid>
    </>
  );  
}
