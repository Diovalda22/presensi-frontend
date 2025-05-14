import { Box, Stack, Select, MenuItem, Typography ,TextField, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Paper, Button, Chip, Modal, Backdrop, Fade, FormLabel, FormControl } from '@mui/material';
import { Autocomplete, Input } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import rows from '../../static/data';
import client from '../../router/Client';
import filter from '../../static/filter';
import { usePickersTranslations } from '@mui/x-date-pickers';
import { flushSync } from 'react-dom';

export default function Siswaadmin() {
  const [startDate, setStartDate] = useState(null);
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [siswa, setSiswa] = useState([])

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '73%',
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
  };

  const label = {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1
  }

  const textField = {
    borderColor: 'black',
    paddingBottom: 5,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray', 
    },
  }

  function Hapus(id) {
    client.delete(`siswa/${id}`).then((response) => {
      alert('Berhasil menghapus data', response.data)
    }).catch((error) => {
      alert('Ada sesuatu yang error')
      console.log(error)
    })
  }

  useEffect(() => {
    client.get('siswa').then(({data}) => {
      const dataSiswa = data.data
      setSiswa(dataSiswa)
    })
  }, [])

  const FormatedDate = (tanggal) => {
    const [year, month, day] = tanggal.split('-')
    return `${day}/${month}/${year}`
  }

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = siswa.slice(startIndex, endIndex);

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
    <>
      <Box sx={{ width: 'full', height: 900 }}>        
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table sx={{ minWidth: 250 }}>
            <TableHead sx={{ bgcolor: '#DDE9F9', '& .MuiTableCell-root': { fontWeight: 600, width: 900, fontSize: '19px', color: '#32383E' } }}>
              <TableRow>
                <TableCell align="center">NISN</TableCell>
                <TableCell align="center">Nama</TableCell>
                <TableCell align="center">Tanggal Lahir</TableCell>
                <TableCell align="center">Jenis Kelamin</TableCell>
                <TableCell align="center">No HP</TableCell>
                <TableCell align="center">Kelas</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ '& .MuiTableCell-root': { fontSize: '18px' }, '& .MuiChip-root': { fontSize: '18px', width: 90, fontWeight: 'bold', borderRadius: 2 } }}>
              {paginatedRows.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">{row.nisn}</TableCell>
                  <TableCell align="center">{row.nama}</TableCell>
                  <TableCell align="center">{FormatedDate(row.tanggal_lahir)}</TableCell>
                  <TableCell align="center">{row.jenis_kelamin}</TableCell>
                  <TableCell align="center">{row.noHP}</TableCell>
                  <TableCell align="center">{row.kelas.nama}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => Hapus(row.id)} color='error' sx={{ mr: 2 }} variant='contained'>hapus</Button>
                    <Button onClick={handleOpen} color='warning' variant='contained'>edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', width: 180, justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" onClick={() => handleChangePage(page > 0 ? page - 1 : 0)} disabled={page === 0}>
            Prev
          </Button>
          <Button variant="contained" onClick={() => handleChangePage(page < Math.ceil(rows.length / rowsPerPage) - 1 ? page + 1 : page)} disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}>
            Next
          </Button>
        </Box>
      </Box>

      <Modal
      open= {open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      slots={{ backdrop : Backdrop }}
      slotProps={{ 
        backdrop: {
          timeout: 500
        }
       }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant='h4' align='center' sx={{ p: 3, paddingTop: 1, paddingLeft: 0, paddingBottom: 8 }}>EDIT SISWA</Typography>
            <FormControl fullWidth >
              {siswa.map((s, index) => (
                  <Box sx={{ display: 'flex', width: '100%', height: '85%', flexDirection: 'row', padding: 0, justifyContent: 'center', alignItems: 'center', gap: 20, px: 10}}>
                  <Box sx={{ height: 'inherit', width: '70%', display: 'flex', flexDirection: 'column' }}>
                  <FormLabel sx={label} htmlFor='nisn'>NISN</FormLabel>
                  <TextField
                  sx={textField}
                  name='nisn'
                  fullWidth
                  required
                  onChange={handleChange}
                  value={s.nisn}
                  variant='outlined'
                   />
                  <FormLabel sx={label} htmlFor='nisn'>Nama</FormLabel>
                  <TextField
                  sx={textField}
                  name='nama'
                  fullWidth
                  onChange={handleChange}
                  value={s.nama}
                  required
                   />
                  <FormLabel sx={label} htmlFor='nisn'>Tanggal Lahir</FormLabel>
                  <TextField
                  sx={textField}
                  name='tanggal_lahir'
                  fullWidth
                  type='date'
                  onChange={handleChange}
                  required
                   />
                  </Box>
                  <Box sx={{ height: 'inherit', width: '70%', display: 'flex', flexDirection: 'column' }}>
                  <FormLabel sx={label} htmlFor='nisn'>Jenis Kelamin</FormLabel>
                  <Select sx={{ mb: 4 }}>
                    <MenuItem value="Laki-Laki">Laki-Laki</MenuItem>
                    <MenuItem value="Perempuan">Perempuan</MenuItem>
                  </Select>
                  <FormLabel sx={label} htmlFor='nisn'>No Hp</FormLabel>
                  <TextField
                  sx={textField}
                  name='noHP'
                  fullWidth
                  onChange={handleChange}
                  value={s.noHP}
                  required
                   />
                  <FormLabel sx={label} htmlFor='nisn'>Kelas</FormLabel>
                  <TextField
                  sx={textField}
                  name='kelas'
                  fullWidth
                  onChange={handleChange}
                  value={s.kelas.nama}
                  required
                   />
                  </Box>
                  </Box>
              ))}
              <Button variant='contained' size='large' sx={{ width: '15%', height: 60 , position: 'absolute', bottom: -100, right: 80 }}>
                Simpan
              </Button>
            </FormControl>
            <Button onClick={handleClose} variant='outlined' color='error' sx={{ position: 'absolute', top: 0, right: 0, margin: 1 }}>
              X
            </Button>
          </Box>  
        </Fade>
      </Modal>
    </>
  );
}
