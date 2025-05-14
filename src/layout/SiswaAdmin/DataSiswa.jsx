import { 
  Box, 
  Stack, 
  TextField, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Table, 
  Paper,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  
 } from '@mui/material';
  import { Autocomplete, Input } from '@mui/joy';
  import React, { useState } from 'react';
  import { CssVarsProvider, extendTheme } from '@mui/joy';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { DatePicker } from '@mui/x-date-pickers/DatePicker';
  import SearchIcon from '@mui/icons-material/Search';
  import rows from '../../static/data';
import SiswaTable from './TableSiswa';

export const DataSiswa = () => {
  const [open, setOpen] = useState(false);

  const filter = [{ label: 'Semua' }, { label: 'Pra' }, { label: 'Perempuan' }];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [startDate, setStartDate] = useState(null);

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);

  const theme = extendTheme({
    components: {
      JoyAutocomplete: {
        defaultProps: {
          variant: 'soft',
        },
      },
      JoyInput: {
        defaultProps: {
          variant: 'soft',
        },
      },
    },
  });

  return (
    <div>
      <div  style={{ margin: 60}}>
      <Box sx={{mb: 5, width: '100%', mt: 5,  display: "flex", justifyContent: "end",}}>
      <Stack direction="row" gap={3} mr={5} justifyContent="end">
          <CssVarsProvider theme={theme}>
            <Autocomplete variant="soft" placeholder="Filter" options={filter} sx={{ width: 150, height: 55 }} />
          </CssVarsProvider>
          
          <CssVarsProvider theme={theme}>
            <Input variant="soft" sx={{ width: 300 }} startDecorator={<SearchIcon />} placeholder="Cari" />
          </CssVarsProvider>
        </Stack>
        <Button variant="outlined" onClick={handleClickOpen}>
          Tambah Data Murid
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Form Data Siswa</DialogTitle>
        <DialogContent>
          <Box
            sx={{ 
              flexGrow: 1, 
              p: 2, 
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              bgcolor: 'background.paper',
              mt: 1,
              flexDirection: 'column'
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="NISN"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nama"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Tanggal Lahir"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Jenis Kelamin</InputLabel>
                  <Select label="Jenis Kelamin">
                    <MenuItem value="Laki-Laki">Laki-Laki</MenuItem>
                    <MenuItem value="Perempuan">Perempuan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="No HP"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Kelas"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ mt: 2 }}
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                  />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <SiswaTable />
      </div>
    </div>
  );
}
