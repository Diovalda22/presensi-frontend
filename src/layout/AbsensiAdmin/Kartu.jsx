import { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Chip, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import client from '../../router/Client';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  outline: 'none',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '85%',
  bgcolor: 'background.paper',
  border: 'transparent',
  boxShadow: 24,
  p: 4,
};

Kartu.propTypes = {
  id: PropTypes.number.isRequired,
  nama: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
  keterangan: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  gambar: PropTypes.string.isRequired,
};

export default function Kartu(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imageUrl = 'http://localhost:8000/storage/uploads/' + props.gambar;

  const handleApprove = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (props.keterangan === 'dispen') {
        response = await client.put(`dispen/${props.id}`);
        alert('Berhasil approve dispen');
      } else if (props.keterangan === 'izin') {
        response = await client.put(`izin/${props.id}`);
        alert('Berhasil approve izin atau sakit');
      } else {
        alert('Maaf Tidak bisa Approve');
      }

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat menyetujui.');
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          width: {xs: '100%', lg: '90%'},
          paddingLeft: {xs: 3},
          display: 'flex',
          ':hover': { bgcolor: 'transparent' },
          ':active': { color: 'transparent' },
          justifyItems: 'start',
        }}>
        <Card
          sx={{
            width: {xs: "80%", lg: '100%'},
            height: 140,
            overflow: 'visible',
            position: 'relative',
            zIndex: '0',
            boxShadow: '0px 4px 10px 3px rgba(0, 0, 0, 0.1)',
          }}>
          <Chip sx={{ position: 'absolute', color: 'white', top: -16, right: 0, zIndex: 100, backgroundColor: props.keterangan === 'dispen' ? '#6f42c1' : props.keterangan === 'izin' ? '#ffc107' : props.keterangan === 'sakit' ? '#dc3545' : 'default', }} label={props.keterangan} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiCardContent-root': { pb: 'none' },
            }}>
            <CardContent>
              <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} textTransform={'capitalize'} textAlign={'start'} component="div" variant="h5">
                {props.nama}
              </Typography>
              <Typography sx={{ pb: 2 }} textTransform={'capitalize'} textAlign={'start'} component="div" variant="p">
                {props.deskripsi}
              </Typography>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
                <Button
                onClick={handleApprove}
                  sx={{
                    height: 40,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    borderTopLeftRadius: 200,
                    borderTopRightRadius: 200,
                    transition: '0.2s',
                    backgroundColor: '#0d6efd',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    ':hover': { bgcolor: '#094cb2' },
                  }}>
                  <Typography textTransform={'capitalize'} fontSize={18} color={'white'} fontWeight="bold" textAlign={'center'} component="div" variant="p">
                    Approve
                  </Typography>
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex justify-center items-center">
            <h1
              className={`text-3xl text-center text-white font-bold w-[140px] p-2 rounded-lg 
  ${props.keterangan === 'izin' ? 'bg-[#ffcc00]' : props.keterangan === 'dispen' ? 'bg-[#4B0082]' : 'bg-[#ffcc00]'}`}>
              {props.keterangan}
            </h1>
          </div>
          <Typography id="modal-modal-nama" variant="p" fontSize={18}>
            Nama
          </Typography>
          <Typography
            id="modal-modal-nama-siswa"
            sx={{
              mb: 3,
              border: '2px solid #CED4DA',
              p: 1,
              borderRadius: 2,
              mt: 1,
            }}>
            {props.nama}
          </Typography>

          <Typography id="modal-modal-nama" variant="p" fontSize={18}>
            Tanggal
          </Typography>
          <Typography
            id="modal-modal-nama-siswa"
            sx={{
              mb: 3,
              border: '2px solid #CED4DA',
              p: 1,
              borderRadius: 2,
              mt: 1,
            }}>
            {props.tanggal}
          </Typography>

          <Typography id="modal-modal-nama" variant="p" fontSize={18}>
            Deskripsi
          </Typography>
          <Typography
            id="modal-modal-nama-siswa"
            sx={{
              mb: 3,
              border: '2px solid #CED4DA',
              p: 1,
              height: 100,
              borderRadius: 2,
              mt: 1,
            }}>
            {props.deskripsi}
          </Typography>

          <Typography id="modal-modal-gambar" variant="p" fontSize={18}>
            Bukti foto
          </Typography>

          {/* Gunakan props.gambar dengan URL dinamis */}
          <img src={imageUrl} className="h-[140px]" alt="Bukti foto" />

          <Box
            className="button-wrapper"
            sx={{
              // bgcolor: "white",
              display: 'flex',
              justifyContent: 'end',
              gap: 3,
            }}>
            <Button
              onClick={handleApprove}
              sx={{
                bgcolor: '#2D8EFF',
                color: 'white',
                ':hover': { bgcolor: '#276BBB' },
                px: 2,
              }}>
              Izinkan
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                bgcolor: '#A3A3A3',
                color: 'white',
                ':hover': { bgcolor: '#666666' },
                px: 2,
              }}>
              Tutup
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
