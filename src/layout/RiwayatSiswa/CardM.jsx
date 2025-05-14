import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import client from "../../router/Client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export const CardM = () => {
  const [izinCount, setIzinCount] = useState("");
  const [sakitCount, setSakitCount] = useState("");
  const [alphaCount, setAlphaCount] = useState("");

  useEffect(() => {
    client.get("izin").then(({ data }) => {
      setIzinCount(data.data.length);
    });

    client.get("sakit").then(({ data }) => {
      setSakitCount(data.data.length);
    });

    client.get("absen").then(({ data }) => {
      const alphaCount = data.data.filter(
        (item) => item.keterangan === "alpha"
      ).length;

      setAlphaCount(alphaCount);
    });
  }, []);

  const card_1 = (
    <Grid>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: 180,
          width: "180px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          alignItems: "center",
          borderRadius: 7,
          boxShadow: "0px 12px 24px #DDE9F9",
        }}
      >
        <Box
          sx={{
            marginLeft: 0,
            display: "flex",
            flexDirection: "row",
            textAlign: "start",
            height: "65%",
            alignItems: "center",
          }}
        >
          <EventAvailableIcon
            sx={{ fontSize: 70, color: "#2D8EFF", display: { xs: "none" } }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="caption"
                fontSize={20}
                sx={{
                  bgcolor: "#2D8EFF",
                  px: 10,
                  pt: 2,
                  pb: 0.5,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                }}
                fontWeight="semibold"
                color="#ffff"
              >
                Total ijin
              </Typography>
              <Typography
                variant="h5"
                color="#0175f8"
                sx={{ fontWeight: "bold", fontSize: 60, py: 1 }}
              >
                {izinCount}
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={20}
                fontWeight="semibold"
                color="#2D8EFF"
              >
                Hari
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
  const card_2 = (
    <Grid item xs={6} sm={6} md={3}>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: 180,
          width: "180px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          alignItems: "center",
          borderRadius: 7,
          boxShadow: "0px 12px 24px #DDE9F9",
        }}
      >
        <Box
          sx={{
            marginLeft: 0,
            display: "flex",
            flexDirection: "row",
            textAlign: "start",
            height: "65%",
            alignItems: "center",
          }}
        >
          <EventAvailableIcon
            sx={{ fontSize: 70, color: "#2D8EFF", display: { xs: "none" } }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="caption"
                fontSize={20}
                sx={{
                  bgcolor: "#00D8B6",
                  px: 10,
                  pt: 2,
                  pb: 0.5,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                }}
                fontWeight="semibold"
                color="#ffff"
              >
                Total Sakit
              </Typography>
              <Typography
                variant="h5"
                color="#0175f8"
                sx={{ fontWeight: "bold", fontSize: 60, py: 1 }}
              >
                {sakitCount}
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={20}
                fontWeight="semibold"
                color="#2D8EFF"
              >
                Hari
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
  const card_3 = (
    <Grid item xs={6}>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: 180,
          width: "180px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          alignItems: "center",
          borderRadius: 7,
          boxShadow: "0px 12px 24px #DDE9F9",
        }}
      >
        <Box
          sx={{
            marginLeft: 0,
            display: "flex",
            flexDirection: "row",
            textAlign: "start",
            height: "65%",
            alignItems: "center",
          }}
        >
          <EventAvailableIcon
            sx={{ fontSize: 70, color: "#2D8EFF", display: { xs: "none" } }}
          />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="caption"
                fontSize={18}
                sx={{
                  bgcolor: "#FFAE1F",
                  px: 10,
                  pt: 2,
                  pb: 0.5,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                }}
                fontWeight="semibold"
                color="#ffff"
              >
                Total Alpha
              </Typography>
              <Typography
                variant="h5"
                color="#0175f8"
                sx={{ fontWeight: "bold", fontSize: 60, py: 1 }}
              >
                {alphaCount}
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={20}
                fontWeight="semibold"
                color="#2D8EFF"
              >
                Hari
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={3} // Show 3 cards at a time
        spaceBetween={30} // Space between slides
        style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }} // Center the Swiper
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5, // Default 4.5, mengurangi modifier bisa mengurangi efek bayangan
          slideShadows: false,        }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination', // Target pagination
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background: #007bff; width: 12px; height: 12px; margin: 0 5px; border-radius: 50%;"></span>`;
            },
          }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <Box sx={{ display: 'flex', justifyContent: 'center',boxShadow: 'none'  }}>
        {card_1}
          </Box>
        </SwiperSlide>  
        <SwiperSlide>
        <Box sx={{ display: 'flex', justifyContent: 'center',boxShadow: 'none'  }}>
        {card_2}
          </Box>            
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ display: 'flex', justifyContent: 'center',boxShadow: 'none'  }}>
            {card_3}
          </Box>
        </SwiperSlide>
        {/* Duplicate slides for seamless swiping */}
        {/* <SwiperSlide>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {card_1}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ display: "flex", justifyContent: "center" }}>{card_2}</Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {card_3}
          </Box>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
