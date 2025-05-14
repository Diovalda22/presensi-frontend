import { Box, Stack, TextField, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Paper, Button, Chip, Typography } from '@mui/material';
import { Autocomplete, Input } from '@mui/joy';
import React, { useState } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import rows from '../../static/data';
import filter from '../../static/filter';
import Card from './siswa/Card';
import Kotak from './siswa/Bawah';
import Header from './siswa/Header';

export default function Siswaadmin() {
  return (
    <>
      <Box sx={{ width: 'full', px: 5, mt: 6 }}>
        <Header />
        <Card />
        <Kotak />
      </Box>
    </>
  );
}
