import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Modal,
  Typography
} from "@mui/material";
import client from "../../router/Client";
import { formatDate } from "../../helpers/helper";

export default function TableAbsen() {
  const [presensi, setPresensi] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  useEffect(() => {
    client.get("presensi").then(({ data }) => {
      const updatedData = data.data.map((item) => {
        const dateObj = new Date(item.tanggal);
        const days = [
          "Minggu",
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
        ];
        const dayName = days[dateObj.getDay()];

        const waktuDatangFormatted = item.waktu_datang
          ? item.waktu_datang.substring(11, 16)
          : "tidak hadir";

        const waktuPulangFormatted = item.waktu_pulang
          ? item.waktu_pulang.substring(11, 16)
          : item.waktu_datang
          ? "belum pulang"
          : "tidak hadir";

        return {
          ...item,
          hari: dayName,
          waktu_datang: waktuDatangFormatted,
          waktu_pulang: waktuPulangFormatted,
        };
      });

      setPresensi(updatedData);
    });
  }, []);

  return (
    <Box
      sx={{
        width: {lg:"full", md:"100%", sm:"100%"},
        border: "1px",
        borderRadius: 2,
        p: 4,
        pt: 0,
        mb: 8,
        boxShadow: "2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)",
        marginTop: "12vh",
        
      }}
    >
      <Typography variant="h4" sx={{display:"flex", justifyContent:"center"}}>Table</Typography>
      <TableContainer
        component={Paper}
        sx={{ paddingTop: "20px", bgcolor: "transparent", overflowX: { sm: "auto" },  width: '100%', }}
      >
        <Table sx={{ minWidth: 700 }} >
          <TableHead>
            <TableRow >
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>Hari</TableCell>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>Tanggal</TableCell>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>Absen</TableCell>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>Pulang</TableCell>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>Keterangan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {presensi.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.hari}</TableCell>
                <TableCell>{row.tanggal}</TableCell>
                <TableCell>{row.waktu_datang}</TableCell>
                <TableCell>{row.waktu_pulang}</TableCell>
                <TableCell>{row.keterangan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleOpen} sx={{
          display: {lg:'none', md:'none', sm:'block'}}}>Buka Tabel</Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            width: "90vw",
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            overflowX: "scroll"
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: '400px', // Set a specific max height for the table body
              bgcolor: 'transparent',
              overflowY: 'auto', // Enable vertical scrolling
            }}
          >
            <Table stickyHeader>
              <TableBody>
                {/* Baris pertama: Hari */}
                <TableRow>
                  <TableCell style={{ backgroundColor: "#ADD8E6", padding: "4px", fontSize: "0.875rem" }}>
                    Hari
                  </TableCell>
                  {presensi.map((row, index) => (
                    <TableCell key={index} style={{ padding: "4px", fontSize: "0.875rem" }}>
                      {row.hari}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Baris kedua: Tanggal */}
                <TableRow>
                  <TableCell style={{ backgroundColor: "#ADD8E6", padding: "4px", fontSize: "0.875rem" }}>
                    Tanggal
                  </TableCell>
                  {presensi.map((row, index) => (
                    <TableCell key={index} style={{ padding: "4px", fontSize: "0.875rem" }}>
                      {formatDate(row.tanggal)}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Baris ketiga: Absen */}
                <TableRow>
                  <TableCell style={{ backgroundColor: "#ADD8E6", padding: "4px", fontSize: "0.875rem" }}>
                    Absen
                  </TableCell>
                  {presensi.map((row, index) => (
                    <TableCell key={index} style={{ padding: "4px", fontSize: "0.875rem" }}>
                      {row.waktu_datang}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Baris keempat: Pulang */}
                <TableRow>
                  <TableCell style={{ backgroundColor: "#ADD8E6", padding: "4px", fontSize: "0.875rem" }}>
                    Pulang
                  </TableCell>
                  {presensi.map((row, index) => (
                    <TableCell key={index} style={{ padding: "4px", fontSize: "0.875rem" }}>
                      {row.waktu_pulang}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Baris kelima: Keterangan */}
                <TableRow>
                  <TableCell style={{ backgroundColor: "#ADD8E6", padding: "4px", fontSize: "0.875rem" }}>
                    Keterangan
                  </TableCell>
                  {presensi.map((row, index) => (
                    <TableCell key={index} style={{ padding: "4px", fontSize: "0.875rem" }}>
                      {row.keterangan}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </Box>
      </Modal>
    </Box>
  );
}
