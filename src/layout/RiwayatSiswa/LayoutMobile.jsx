/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import TableRiwayat from "./TableRiwayat";
import Card from "./Card";
import Kalender from "./Kalender";
import { TanggalContext } from "./TanggalPIlih"; // Pastikan impor benar
import { CardM } from "./CardM";
import { TanggalProvider } from "../../layout/RiwayatSiswa/TanggalPIlih";
import { useMediaQuery } from "react-responsive";

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCardBox = styled(Box)`
  animation: ${slideInRight} 0.5s ease-out;
`;

const AnimatedTableBox = styled(Box)`
  animation: ${slideInUp} 0.5s ease-out;
`;

const AnimatedKalenderGrid = styled(Grid)`
  animation: ${slideInDown} 0.5s ease-out;
`;

export default function LayoutMobile() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { selectedDate } = useContext(TanggalContext); // Mengambil selectedDate dari context

  const todos = {
    "2024-07-03": ["Todo 1", "Todo 2"],
    "2024-07-04": ["Todo A", "Todo B"],
    // Tambahkan todo list lainnya berdasarkan tanggal
  };

  const formatDate = (date) => {
    return date ? date.format("YYYY-MM-DD") : null;
  };

  return (
    <Box sx={{ height: "100vh", width: "auto", margin: 2 }}>
      <Box
        sx={{
          height: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        u
      >
        <Typography variant="h6" sx={{ mb: 0 }}>
          Riwayat
        </Typography>
      </Box>
      <Grid sx={{ height: "20%" }}>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingRight: 2,
          }}
        >
          <AnimatedKalenderGrid
            item
            xs={4}
            sx={{
              display: "flex",
              height: "20%",
              width: "100%",
              border: "1px",
              flexDirection: "column",
              borderRadius: 2,
              justifyContent: "center",
              bgcolor: "#2D8EFF",
              boxShadow: "2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)",
              marginLeft: { md: 0, sm: 0, xs: 2 },
              mb: 3,
            }}
          >
            <Grid sx={{ height: "20%", marginTop: 2 }}>
              <Kalender />
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              <Box
                sx={{
                  width: "89%",
                  height: "20%",
                  bgcolor: "white",
                  padding: 2,
                  boxSizing: "border-box",
                  borderRadius: "6px",
                  border: "1px",
                }}
              >
                <Typography variant="p" sx={{ marginBottom: 2 }}>
                  Catatan {formatDate(selectedDate) || "Select a Date"}
                </Typography>
                <List>
                  {(todos[formatDate(selectedDate)] || []).map(
                    (todo, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={todo} />
                      </ListItem>
                    )
                  )}
                </List>
              </Box>
            </Box>
          </AnimatedKalenderGrid>
          <AnimatedCardBox
            sx={{
              display: "flex",
              height: "35%",
              width: "120%",
              border: "1px",
              flexDirection: "column",
              // borderRadius: 2,
              justifyContent: "center",
              // bgcolor: "#2D8EFF",
              // boxShadow: "2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)",
              marginLeft: { md: 0, sm: 0, xs: 2 },
              mb: "30px",
            }}
          >
            <CardM />
          </AnimatedCardBox>
          <AnimatedTableBox
            sx={{
              height: "50.5%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              // paddingTop: "120px",
              width: "99%",
              border: "1px",
              borderRadius: 2,
              boxShadow: "2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)",
              margin: "2px",
            }}
          >
            <Box
              sx={{
                height: "70%",
                display: "flex",
                width: "95%",
                border: "1px",
                borderRadius: 2,
                // boxShadow: "2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)",
              }}
            >
              {/* Pass the formatted selectedDate as a prop to TableRiwayat */}
              <TableRiwayat selectedDate={formatDate(selectedDate)} />
            </Box>
          </AnimatedTableBox>
        </Grid>
      </Grid>
    </Box>
  );
}
