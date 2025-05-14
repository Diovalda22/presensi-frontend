import React, { useEffect, useState } from 'react';
import Kartu from '../../layout/AbsensiAdmin/Kartu';
import { Box, Grid, Typography } from '@mui/material';
import client from '../../router/Client';
import LoadingSpin from '../../components/LoadingSpin';

export default function Absensimin() {
  const [dataAbsen, setDataAbsen] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    client.get('absen').then(({ data }) => {
      console.log(data.data);

      setDataAbsen(data.data);
      setLoading(false)
    });
  }, []);
  if (loading) {
    return (
      <LoadingSpin />
    )
  }
  return (
    <Grid container spacing={3} mt={7} sx={{px: {sm: 0, lg: 10}, '& .MuiGrid-item': { paddingLeft: 0 } }}>
      {dataAbsen.length === 0 ? (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
          <Typography variant="h6">Tidak ada data</Typography>
        </Grid>
      ) : (
        dataAbsen.map((absen, index) => (
          <Grid item lg={3} sm={6} xs={12} key={index}>
            <Kartu 
              id={absen.id} 
              nama={absen.siswa.nama} 
              tanggal={absen.tanggal} 
              deskripsi={absen.deskripsi} 
              keterangan={absen.keterangan} 
              gambar={absen.image.file_name} 
            />
          </Grid>
        ))
      )}
    </Grid>
  );
}
