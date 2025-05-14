import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Jam from "./ComponentCard/Jam"; // Assuming Jam is your component
import client from "../../router/Client";

import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import jam icon
import LoadingSpin from "../../components/LoadingSpin";
import AlertMessage from "../../components/Alert";

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

const flyLeft = keyframes`
    0% { transform: translateX(0); opacity: 0; }
    50% { transform: translateX(-20px); opacity: 1; }
    100% { transform: translateX(0); opacity: 0; }
  `;

const flyRight = keyframes`
    0% { transform: translateX(0); opacity: 0; }
    50% { transform: translateX(20px); opacity: 1; }
    100% { transform: translateX(0); opacity: 0; }
  `;

const AnimatedCardBox = styled(Box)`
  animation: ${slideInDown} 0.5s ease-out;
  position: relative;
`;

const CircleIcon = styled(Box)`
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    props.size === "large" ? "80px" : "60px"}; /* 4x for large, 3x for medium */
  height: ${(props) => (props.size === "large" ? "80px" : "60px")};
  background-color: #2d8eff;
  animation: ${(props) => (props.left ? flyLeft : flyRight)} 2s infinite;
  animation-delay: 0.5s;
  svg {
    color: white;
    font-size: ${(props) => (props.size === "large" ? "40px" : "30px")};
  }
`;

const AbsenButton = styled.button`
  padding: 16px;
  border-radius: 30px;
  width: 300px;
  height: 100px;
  font-size: 24px;
  background-color: ${(props) =>
    props.absenStatus === "datang"
      ? "#FFA500" // Warna oranye untuk status "Pulang"
      : props.disabled
      ? "#999999" // Warna abu-abu saat tombol dinonaktifkan
      : "#1e88e5"}; // Warna biru untuk status "Datang"
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s, cursor 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Card() {
  const [absenMessage, setAbsenMessage] = useState("");
  const [absenStatus, setAbsenStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = () => {
    setOpenAlert(false);
    setErrorMessage("");
    setAbsenMessage("");
  };

  useEffect(() => {
    const fetchAbsenStatus = async () => {
      setIsLoading(true); // Aktifkan loading sebelum request
      try {
        const { data } = await client.get("check");
        setAbsenStatus(data.status); // Update status absen dari API
      } catch (error) {
        setErrorMessage("Gagal memuat status absen.");
        setOpenAlert(true);
      } finally {
        setIsLoading(false); // Matikan loading setelah selesai request
      }
    };

    fetchAbsenStatus();
  }, []);

  const handleAbsen = async (event) => {
    event.preventDefault();
    setIsButtonDisabled(true); // Matikan tombol selama request
    setIsLoading(true); // Set loading state saat request dimulai

    try {
      const { data } = await client.post("presensi");
      setAbsenStatus(data.status); // Update status sesuai respons
      setAbsenMessage(data.message); // Tampilkan pesan sukses
      setOpenAlert(true); // Tampilkan alert
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setOpenAlert(true); // Tampilkan alert error
    } finally {
      setIsLoading(false); // Matikan loading setelah selesai request
      setIsButtonDisabled(false); // Aktifkan tombol kembali
    }
  };

  return (
    <AnimatedCardBox
      sx={{
        minHeight: { md: "68vh", sm: "20vh", xs: "20vh" },
        mb: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Icon and other UI components */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <Box>
          <Jam />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "4px" }}
        >
          {isLoading ? (
            <LoadingSpin />
          ) : absenStatus === "pulang" ? (
            <div className="text-center text-xl text-green-600">
              Anda sudah absen hari ini
            </div>
          ) : (
            <AbsenButton
              onClick={handleAbsen}
              disabled={isButtonDisabled}
              absenStatus={absenStatus}
            >
              {absenStatus === "datang" ? "Pulang" : "Datang"}
            </AbsenButton>
          )}
        </Box>

        {/* Alert component */}
        {openAlert && errorMessage ? (
          <AlertMessage
            variant="filled"
            message={errorMessage}
            severity="error"
            onClose={handleAlertClose}
          />
        ) : openAlert && absenMessage ? (
          <AlertMessage
            variant="filled"
            message={absenMessage}
            severity="success"
            onClose={handleAlertClose}
          />
        ) : (
          <Typography
            sx={{
              justifyContent: "center",
              paddingTop: "20px",
              display: {mb:"flex", sm:"flex", xs:"none"}
            }}
          >
            Absen kamu akan disesuaikan dengan waktu yang tertera!
          </Typography>
        )}
      </Box>
    </AnimatedCardBox>
  );
}
