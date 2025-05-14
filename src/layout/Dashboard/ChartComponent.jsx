import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Box, Typography } from '@mui/material';

Chart.register(...registerables);

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['hadir', 'telat', 'ijin/sakit', 'alpha'],
          datasets: [{
            label: 'Rekap Kehadiran',
            data: [20, 5, 8, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allow the chart to stretch to fill the container
          scales: {
            y: {
              beginAtZero: true,
              max: 40 
            },
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Cleanup chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Box sx={{ width: '100%', height: 700, position: 'relative' }}>
      <Box
        className="wrapper"
        sx={{
          mt: 8,
          width: 'full',
          height: 700,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ px: {lg: 10, xs: 4}, pt: {lg: 5, xs: 2}, width: '95%', height: '80%', borderRadius: 3, boxShadow: "0px 12px 30px 9px #DDE9F9", mt: {lg: 8, xs: 0}, bgcolor:'white' }}>
            <Typography sx={{ fontSize: {lg: '1.9rem', xs: '1.2rem'}, fontWeight: 'bold', color: '#373D3F' }}>Bagan Harian Presensi</Typography>
            <Box sx={{height:'90%'}}>
            <canvas ref={chartRef} style={{
                width: '100%',
                height: '70%', // Mengurangi tinggi chart menjadi 70% dari container-nya
            }} />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChartComponent;
