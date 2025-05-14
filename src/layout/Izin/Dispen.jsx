import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  FormLabel,
  Button,
  Grid,
  Alert,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import client from "../../router/Client";

export const Dispen = () => {
  const [message, SetMessage] = useState("");
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
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
      .post("dispen", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        SetMessage("Berhasil mengajukan dispen, tunggu konfirmasi guru");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Response Data: ", error.response.data);
          SetMessage("Terjadi kesalahan: " + error.response.data.message);
        } else {
          console.error("Error: ", error);
          alert("Terjadi kesalahan");
        }
      });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Grid
        sx={{
          border: "12px",
          borderRadius: 2,
          width: "67vh",
          height: "auto",
          boxShadow: "0px 0px 10px rgba(0.5, 0.1, 0.1, 0.1)",
          backgroundColor: "#FFF"
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
            padding: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>
            Form Request Dispen
          </Typography>
          <TextField
            label="deskripsi"
            name="deskripsi"
            variant="outlined"
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

export default Dispen;
