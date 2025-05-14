import { useState } from "react";
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  FormControl,
  FormLabel,
  Button,
  Grid,
  Alert,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import client from "../../router/Client";

export const Izin = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    keterangan: "",
    deskripsi: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("keterangan", formData.keterangan);
    formDataToSend.append("deskripsi", formData.deskripsi);
    if (file) {
      formDataToSend.append("image", file);
    }

    client
      .post("izin", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setMessage("Berhasil mengajukan izin, tunggu konfirmasi guru");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Response Data: ", error.response.data);
          setMessage("Terjadi kesalahan: " + error.response.data.message);
        } else {
          console.error("Error: ", error);
          setMessage("Terjadi kesalahan");
        }
      });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Grid
        container
        justifyContent="center"
        sx={{
          border: "12px",
          borderRadius: 2,
          width: { xs: "100%", sm: "80vh", md: "67vh" }, // Responsive width
          height: "auto",
          boxShadow: "0px 0px 10px rgba(0.5, 0.1, 0.1, 0.1)",
          bgcolor: "#fff",
          padding: { xs: 2, sm: 3, md: 4 }, // Padding responsive
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            gap: 2,
            maxWidth: 600,
            margin: "10px auto 0 auto",
            padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>
            Form Request Izin
          </Typography>
          <FormControl
            component="fieldset"
            sx={{
              display: "flex",
              justifyContent: "start",
              width: { xs: "100%", sm: "60vh" },
            }}
          >
            <FormLabel component="legend">Keterangan</FormLabel>
            <RadioGroup
              aria-label="keterangan"
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
            >
              <FormControlLabel value="izin" control={<Radio />} label="Izin" />
              <FormControlLabel
                value="sakit"
                control={<Radio />}
                label="Sakit"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Deskripsi"
            variant="outlined"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={6}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FormLabel component="legend">Lampiran</FormLabel>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-file"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="upload-file">
              <Button component="span">
                <UploadFileIcon />
              </Button>
            </label>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
          {message && (
            <Alert severity="info" sx={{ marginTop: 2 }}>
              {message}
            </Alert>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default Izin;
