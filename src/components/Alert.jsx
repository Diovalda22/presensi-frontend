import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function AlertMessage({ variant, severity, message, onClose }) {
  return (
    <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={2}>
      <Alert variant={variant} severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Stack>
  );
}
