import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Card() {
  return (
    <div>
    <Grid item ys={4} sx={{paddingBottom: 3}}>
            <Box
              sx={{
                bgcolor: '#DDE9F9',
                height: 170,
                width: 'full',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', height: '65%', width: '90%'}}>
                <Typography variant="h4" fontWeight="semibold" color="#5A6A85" sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> 
                  Total Ijin
                </Typography>
               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#cad6e6', height: 150, width: '50%', borderRadius: 2 }}>
                <EventAvailableIcon sx={{ fontSize: 65, color: '#2D8EFF' }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                  1
                </Typography>

               </Box>
              </Box>
            </Box>
            </Grid>
            <Grid item ys={4} sx={{paddingBottom: 3}}>
            <Box
              sx={{
                bgcolor: '#DDE9F9',
                height: 170,
                width: 'full',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', height: '65%', width: '90%'}}>
                <Typography variant="h4" fontWeight="semibold" color="#5A6A85" sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> 
                  Total Ijin
                </Typography>
               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#cad6e6', height: 150, width: '50%', borderRadius: 2 }}>
                <EventAvailableIcon sx={{ fontSize: 65, color: '#2D8EFF' }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                  1
                </Typography>

               </Box>
              </Box>
            </Box>
            </Grid>
            <Grid item ys={4} sx={{paddingBottom: 3}}>
            <Box
              sx={{
                bgcolor: '#DDE9F9',
                height: 170,
                width: 'full',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', height: '65%', width: '90%'}}>
                <Typography variant="h4" fontWeight="semibold" color="#5A6A85" sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> 
                  Total Ijin
                </Typography>
               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#cad6e6', height: 150, width: '50%', borderRadius: 2 }}>
                <EventAvailableIcon sx={{ fontSize: 65, color: '#2D8EFF' }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                  1
                </Typography>

               </Box>
              </Box>
            </Box>
            </Grid>
    </div>
  )
}
