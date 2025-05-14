import React from 'react';
import Header from '../../layout/Dashboard/Header';
import { Box } from '@mui/material';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../../layout/Dashboard/Card';
import client from '../../router/Client';
import Kotak from '../../layout/Dashboard/Kotak';

export default function Dashadmin() {
  const [dataAbsen, setDataAbsen] = React.useState([]);

  React.useEffect(() => {
    client.get('absen').then(({ data }) => {
      setDataAbsen(data.data);

      notify(data.data.length)
    });
  }, []);

  const customId = "this-is-custom"

  const notify = (count) => {
    if (count > 0) {
      toast.info(`Ada ${count} siswa yang izin`, {
        toastId: customId,
        position: "top-center",
        draggable: true,
        theme: "colored",
        transition: Bounce,
        autoClose: 8000
      })
    }
  }

  return (
    <>
      <Box sx={{ width: 'full', px: 5, mt: 6 }}>
        <ToastContainer />
        <Card />
        <Kotak />
      </Box>
    </>
  );
}
