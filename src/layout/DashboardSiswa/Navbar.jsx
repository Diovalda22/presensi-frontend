import Logo from '/assets/Logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Tooltip, IconButton, Avatar, Menu, MenuItem } from '@mui/material';

const setting = ['Profile', 'Logout'];
export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedButton, setSelectedButton] = React.useState(null);
  const [selectedIzin, setSelectedIzin] = React.useState('Izin');

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    handleCloseUserMenu();
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    setSelectedButton(option);
  };

  return (
    <>
      <AppBar position="static" color="inherit" sx={{ px: 5, borderRadius: '0 0 50px 50px' }}>
        <Toolbar sx={{ justifyContent: 'space-between', height: 90 }}>
          <img src={Logo} alt="Logos" />
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link to="/siswa">
              <Button
                onClick={() => handleButtonClick('Dashboard')}
                sx={{
                  fontWeight: 'bold',
                  color: selectedButton === 'Dashboard' ? '#2D8EFF' : 'gray',
                  borderBottom: selectedButton === 'Dashboard' ? '2px solid #2D8EFF' : '2px solid transparent',
                  '&:hover': { color: '#2D8EFF', borderBottom: '2px solid #2D8EFF' },
                }}>
                Dashboard
              </Button>
            </Link>
            <Link to="/siswa/riwayat">
              <Button
                onClick={() => handleButtonClick('Riwayat')}
                sx={{
                  fontWeight: 'bold',
                  color: selectedButton === 'Riwayat' ? '#2D8EFF' : 'gray',
                  borderBottom: selectedButton === 'Riwayat' ? '2px solid #2D8EFF' : '2px solid transparent',
                  '&:hover': { color: '#2D8EFF', borderBottom: '2px solid #2D8EFF' },
                }}>
                Riwayat
              </Button>
            </Link>
            <div>
              <Button
                onClick={handleClick}
                sx={{
                  fontWeight: 'bold',
                  color: selectedButton === 'Izin' || selectedButton === 'Dispen' ? '#2D8EFF' : 'gray',
                  borderBottom: selectedButton === 'Izin' || selectedButton === 'Dispen' ? '2px solid #2D8EFF' : '2px solid transparent',
                  '&:hover': { color: '#2D8EFF', borderBottom: '2px solid #2D8EFF' },
                }}
              >
                {selectedIzin}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(null)}
              >
                <Link to="/siswa/izin"><MenuItem onClick={() => handleClose('Izin')}>Izin</MenuItem></Link>
                <Link to="/siswa/dispen"><MenuItem onClick={() => handleClose('Dispen')}>Dispen</MenuItem></Link>
              </Menu>
            </div>
          </Box>
          <Box>
            <Tooltip title="Pengaturan">
              <IconButton onClick={handleOpenUserMenu} sx={{ '&:hover': { backgroundColor: 'transparent', boxShadow: 'none' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'end', marginRight: 2 }}>
                  <Typography sx={{ fontWeight: 'bold', color: 'black' }}>Jean Samuel Putra</Typography>
                  <Typography sx={{ fontWeight: 'light' }}>1234567890</Typography>
                </Box>
                <Avatar
                  sx={{ height: 56, width: 56 }}
                  alt="Profil"
                //   src="https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: 8 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {setting.map((settings) => (
                <MenuItem key={settings} onClick={handleCloseUserMenu}>
                  <Typography fontWeight="semibold" textAlign="center">
                    {settings}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
