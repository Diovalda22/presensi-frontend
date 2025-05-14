import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Buat tema MUI Anda di sini
const theme = createTheme({
  // Konfigurasi tema sesuai kebutuhan Anda
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
